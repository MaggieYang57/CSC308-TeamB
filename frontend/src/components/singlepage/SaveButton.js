/* eslint-disable node/handle-callback-err */
import React, { Component } from "react";
import "../../css/SinglePage.css";
import { withRouter } from "react-router-dom";
import { PropTypes } from 'prop-types';

class SaveButton extends Component {
    constructor(props) {
      super(props);
      this.state = {saved: false};
    }

    saveHike = () => {
        const hikeID = this.props.hike
        const hike = hikeID
        const user = localStorage.getItem("_id")
        const data = {
            id: hike,
            user: user
        };
        console.log(data)
        fetch("http://localhost:3001/hike/" + this.props.hike + "/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((res) => {
              return res.json();
          })
        .catch((err) => {
            console.log("Error");
        });
    }

    toggle = () => {
        if(localStorage.getItem("isLoggedIn") === "false")
            window.location.href = "/login";
        else
        {
        let currentSave = this.state.saved
        currentSave = !currentSave
        this.setState({saved: currentSave})
        if (this.state.saved === false) // just switch to "saved!"
            this.saveHike()
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
    hike: PropTypes.object,
  };
export default withRouter(SaveButton);
  