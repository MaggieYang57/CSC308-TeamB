import React from 'react';
import { Card, Badge, Button, NavBar, Form} from 'react-bootstrap';

export function Navigation({}) {
	 return (
		<div>

			<nav class="navbar navbar-dark " style={{backgroundColor: '#2c6674'}}>
			  <a class="navbar-brand" href="/">
			  	<form class="form-inline " style = {{marginLeft: '-9.5vw'}} >
			  	  <img class="nav-link" src="/images/SH.png" style={{width: 250, height: 63, borderRadius: 0}}/>
			  	  <a class="nav-link text-light" href="/Profile">Profile</a>
				  <a class="nav-link text-light" href="/singlepage">Single</a>
				  <a class="nav-link text-light" href="/hikeFinder">HikeFinder</a>
				  
			  	</form>
			  </a>
			  <form class="form-inline" style = {{marginRight: '2vw'}}>
			    <button class="btn btn-outline-light my-2 my-sm-0 m-3 border border-white" type="submit">Sign Up</button>
			    <button class="btn btn-outline-light my-2 my-sm-0 border border-white" type="submit">Register</button>
			  </form>
			</nav>

		</div>
	 	)
}