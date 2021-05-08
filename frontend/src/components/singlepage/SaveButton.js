import React, { Component } from "react";
import "../../css/SinglePage.css";
import { withRouter } from "react-router-dom";
import { PropTypes } from 'prop-types';

class SaveButton extends Component {
    constructor(props) {
      super(props);
      this.state = {saved: true};
    }

    toggle = () => {
        if(localStorage.getItem("isLoggedIn") === "false")
            window.location.href = "/login";
        else
        {
        let currentSave = this.state.saved
        currentSave = !currentSave
        this.setState({saved: currentSave})
        // if (this.state.saved === true) // just switch to "saved!"
        //    saveHike()
        // else
        //    unsaveHike()
        }
    }
  
    render() {
        if (this.state.saved===false)
        {
        return (
            <div>
                <button id="save-hike" onClick={() => this.toggle()}><p>Save Hike</p>
                    <img style={{marginLeft:"10px", fill:"white", height:"35px"}} src="/images/save-button/notsaved.png"/>
                </button>
            </div>
        );
        }
        else
        {
            return (
                <div>
                    <button id="save-hike" onClick={() => this.toggle()}><p>Saved!</p>
                        <img style={{marginLeft:"10px", fill:"white", height:"35px"}} src="/images/save-button/saved.png"/>
                    </button>
                </div>
            );  
        }
    }
  }
  
  SaveButton.propTypes = {
    history: PropTypes.object,
  };
export default withRouter(SaveButton);
  