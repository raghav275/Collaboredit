import React , {Component} from 'react';
import { render } from 'react-dom';
import fire from '/Users/raghav/coding/collaberedit/src/fire';


var database = fire.database();
class Chat extends Component {
	constructor(props){
		super(props);
		this.state = {
			messages:[],
			newMsg:"",
			groups:[],
			user:""
		}
	}
	componentDidMount(){
  	database.ref(this.state.user+"/messages").on("value",(snapshot)=>{
  		var data = snapshot.val() || {};
  		var messages =[];
  		for(var id in data){
  			var item = data[id];
  			messages.push(item.body);
  		}
  		this.setState({
  			messages: messages
  		});
  	})
  }
	sendMessage(){
		database.ref(this.state.user +"/messages").push().set({
			body:this.state.newMsg
		})
		this.setState({
			newMsg:""
		})
	}
  render() {
    return (
    	<div>
    	{this.state.messages.map((message,i)=>{
    		return(
    			<h3 key={i}>{this.state.user}:{message}</h3>
    			)
    	})
    }
      <input value={this.state.newMsg} onChange = {(e)=>{this.setState({
 			newMsg : e.target.value     	
      })
  		}}>
  	</input>
      <button onClick = {()=>{this.sendMessage();}}>Send</button>
      </div>
    );
  }
}

export default Chat;
