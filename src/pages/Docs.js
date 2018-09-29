import React, {Component} from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import fire from '/Users/raghav/coding/collaberedit/src/fire';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/theme/github';
var database =fire.database();
var ip="";


	$.getJSON('https://ipapi.co/json/', function(data) {
  ip = JSON.stringify(data.ip, null, 2);
});	

class Docs extends Component{

	constructor(props){
		super(props);
		this.state = {
		newVal: "",
		count:0
		}
	}
	
	handleEdit(newValue) {
		var {match} = this.props;
		database.ref('code/' + match.params.id + '/code').set({
			code:newValue
		})

	}
	disconnect(){
		var connectedRef = database.ref('.info/connected');
		connectedRef.remove();
	}


  componentDidMount(){
  	

		var {match} = this.props;
		
		var ConnectionsRef = database.ref('code/'+ match.params.id +'/connections');
		var Ip = database.ref('code/'+ match.params.id +'/ip');
		// stores the timestamp of my last disconnect (the last time I was seen online)
	

		var connectedRef = database.ref('.info/connected');
		connectedRef.on('value', function(snap) {
			if (snap.val() === true) {

				// We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
				var con = ConnectionsRef.push();
				var ipad = Ip.push();
				// When I disconnect, remove this device
				con.onDisconnect().remove();

				// Add this device to my connections list
				// this value could contain info about the device or a timestamp too
				con.set(ip);
				ipad.set(ip);
				// When I disconnect, update the last time I was seen online
				//lastOnlineRef.onDisconnect().set(fire.database.ServerValue.TIMESTAMP);
			}
		});
		
		var ConnectionsRef = database.ref('code/'+ match.params.id+'/connections');
    	ConnectionsRef.on("value",(snapshot)=>{
			var data = snapshot.val();
			var length = Object.keys(data).length;
			this.setState({
					count:length
				})
			console.log(this.state.count);
		})

    	database.ref("code/" + match.params.id +'/code').on("value", (snapshot) => {
			
			var data = snapshot.val();
			
			if(data !=null){
			this.setState({
				newVal: data["code"]
			});
		}
		})

		
	}
	render(){
		setInterval("handleEdit",10);
		var {match} = this.props;
		return(
			<div>
				<h3>Profile {match.params.id}</h3>
				<h3> No. of participants : {this.state.count}</h3>
        <AceEditor
         style = {{width: 900 , marginLeft:200}}
          mode="java"
          theme="github"
          onChange={(newValue)=>{
            
            this.handleEdit(newValue);
            database.ref("code/"+match.params.id +'/code').on("value",(snapshot) => {
              var data = snapshot.val();
              
              this.setState({
              newVal: data["code"]
            });
            })
            
          }}
          name="UNIQUE_ID_OF_DIV"
          value = {this.state.newVal}
          editorProps={{$blockScrolling: true}}>
        </AceEditor>
				<br />
				<Link to="/" onClick = {()=>{this.disconnect();}}>Back</Link>
			</div>
			);
	}
}

export default Docs;