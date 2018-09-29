import React , {Component} from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import fire from './fire';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from "./pages/Main";
import Docs from "./pages/Docs";

import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/theme/github';
import Chat from './components/Chat'
import Login from './components/Login'
var database =fire.database();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  render() {
    return (
      <div>
      {this.state.user.displayName}
      <img src={this.state.user.photoURL} />
      <Login value="Login" value1="Logout" appLogin={(user)=>{
        this.setState({user: user});
      }} />
      <Chat />
        <Router>
          <div>
            <Route exact path = "/" component={Main} />
            <Route exact path = "/profile/:id" component={Docs} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


