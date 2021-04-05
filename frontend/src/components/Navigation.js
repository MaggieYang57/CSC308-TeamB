import React from 'react';
import { Card, Badge, Button, NavBar, Form } from 'react-bootstrap';

export function Navigation({ }) {
   return (
      <div>

         <nav className="navbar navbar-dark " style={{ backgroundColor: '#2c6674' }}>
            <a className="navbar-brand" href="/">
               <form className="form-inline " style={{ marginLeft: '-11vw' }} >
                  <img className="nav-link" src="/images/SH.png" style={{ width: 200, height: 53, borderRadius: 0 }} />
                  <a className="nav-link text-light" href="/login">Profile</a>
                  <a className="nav-link text-light" href="/hikeFinder">HikeFinder</a>

               </form>
            </a>
            <form className="form-inline" style={{ marginRight: '2vw' }} href="/">
               <a className="btn btn-outline-light my-2 my-sm-0 m-3 border border-white" href="/login">Login</a>
               <a className="btn btn-outline-light my-2 my-sm-0 border border-white" href="/signup">Sign Up</a>
            </form>
         </nav>

      </div>
   )
}