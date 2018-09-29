import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import randomstring from "randomstring";
import fire from '/Users/raghav/coding/collaberedit/src/fire';
import Docs from "./Docs";
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component{
	handleClick(){
		var rand = randomstring.generate({
			length:5,
			capitalization:'lowercase'
		});
		this.props.history.push("/profile/"+rand)
	}

	render(){
		return(
			<div class = "container-fluid mw-100">
				<div style={{margin:"auto"}} class="row justify-content-center mw-100">
					<div style ={{ padding:20}} class="col-md-10 mw-100">
					<div class="back">
					<img width="100%" src = "https://www.webcrayons.biz/images/banner.png" />
					<nav class="navbar sticky-top navbar-light bg-light">
						<a class="navbar-brand">Collaberedit</a>
					</nav>
					<div class="row justify-content-center">
					<p class ="col-md-10 display-1 text-center">Main Page</p>
					</div>
					<div style={{paddingLeft:"5%" , paddingRight:"5%"}} class ="row justify-content-center">

					
						<br />
						<p  class="col-md-7">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at mauris ut nisi semper sollicitudin facilisis eget felis. Praesent vitae malesuada tellus. Donec quis congue sapien, eget mattis dui. Maecenas ac ex a metus posuere tincidunt in ac nulla. Quisque sed enim vel orci ullamcorper volutpat. Pellentesque sed ante in turpis vehicula placerat eu vitae leo. Nullam ac egestas orci. Ut id ligula leo. Aenean viverra ante eu metus commodo auctor. Proin in tortor sapien. Nam sapien odio, porttitor et feugiat ut, rhoncus in lorem. Nulla vulputate ipsum a arcu lobortis lacinia. Suspendisse est metus, consectetur eget imperdiet ut, vulputate sit amet diam. Quisque vitae neque ipsum. Mauris congue venenatis libero.

	Nullam eu nisl nec nisi scelerisque sagittis. Vivamus maximus velit nec dui finibus, id venenatis ex bibendum. Quisque non erat vitae nisi facilisis feugiat. Mauris efficitur vitae magna sed lacinia. Cras vitae imperdiet neque. Proin rhoncus neque vel purus consectetur, nec fermentum nisl ullamcorper. Donec vitae lacus lorem.

	Fusce quis massa a sem consectetur euismod in id justo. Etiam ornare, dolor ac efficitur auctor, tortor enim imperdiet velit, eu ullamcorper lorem nisi quis risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc at eros sit amet sem dictum scelerisque. Cras quis massa in arcu imperdiet sollicitudin. Fusce gravida semper varius. Morbi placerat, odio sit amet interdum hendrerit, tellus arcu dictum orci, sit amet consectetur est metus sed nisi. Morbi at congue ipsum. Morbi sed egestas mauris. Curabitur fermentum arcu non egestas consectetur. Vivamus ut lacus laoreet, molestie mi vel, rutrum turpis.
						</p>
						<button style={{margin:"4%"}} class= "col-md-4 btn btn-primary btn-block h-25" onClick={()=>{this.handleClick()}}>Create a Doc</button>
						</div>
						<br />
						
						
						
						<br />
				</div>
			</div>
			</div>
			</div>
			);
	}
}
export default withRouter(Main);