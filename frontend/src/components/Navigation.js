import React from 'react';
import { Card, Badge, Button, NavBar, Form} from 'react-bootstrap';

export function Navigation({}) {
	 return (
		<div>

			<nav class="navbar navbar-dark " style={{backgroundColor: '#2c6674'}}>
			  <a class="navbar-brand" href="/">
			  	<form class="form-inline " style = {{marginLeft: '-11vw'}} >
			  	  <img class="nav-link" src="/images/SH.png" style={{width: 200, height: 53, borderRadius: 0}}/>
			  	  <a class="nav-link text-light" href="/Profile">Profile</a>
				  <a class="nav-link text-light" href="/hikeFinder">HikeFinder</a>
				  
			  	</form>
			  </a>
			  <form class="form-inline" style = {{marginRight: '2vw'}} href="/">
			    <a class="btn btn-outline-light my-2 my-sm-0 m-3 border border-white" href="/login">Login</a>
			    <a class="btn btn-outline-light my-2 my-sm-0 border border-white" href="/signup">Sign Up</a>
			  </form>
			</nav>

		</div>
	 	)
}