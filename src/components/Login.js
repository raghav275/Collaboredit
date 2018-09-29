import { GoogleLogin } from 'react-google-login';
import React , {Component} from 'react';
import { render } from 'react-dom';
import fire from '/Users/raghav/coding/collaberedit/src/fire';
import firebase from 'firebase'

var database = fire.database();
var provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		}
		// this.onLogin=this.onLogin.bind(this);
	}
	onLogin(){
		console.log("on login")
		this.setState({isLoggedIn: true});
	}
	login(){
		var { appLogin } = this.props;

		firebase.auth().signInWithPopup(provider).then(function(result) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			// ...
			this.onLogin();
			
			appLogin(user);
			

		}.bind(this)).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;

			console.log(errorMessage);
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
			this.setState({isLoggedIn: false});
		});
		
	}
	logout(){
		firebase.auth().signOut().then(function() {
						this.setState({isLoggedIn: false});
	  						// Sign-out successful.
	  					}.bind(this)).catch(function(error) {
	  						// An error happened.
	  					});
	  					
	}
  render() {
  	var {value, value1} = this.props;

 	return (
    	  <div>
    	  	{
    	  		this.state.isLoggedIn?
    	  			<button onClick={()=>{
    	  				this.logout()
	  				}}>{value1}</button>
	  				:
	  				<button onClick={()=>{this.login()}} >{value}</button>
    	  	}		
    	  </div>
   
    );
  }
}

export default Login ;


 