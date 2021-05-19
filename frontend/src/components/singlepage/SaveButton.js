/* eslint-disable node/handle-callback-err */
import React, { Component } from "react";
import "../../css/SinglePage.css";
import { withRouter } from "react-router-dom";
import { PropTypes } from 'prop-types';

require('dotenv').config()
const backendHostURL = process.env.REACT_APP_BACKEND_HOST_URL

class SaveButton extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    async componentDidMount() {
        await fetch(`${backendHostURL}/login/${localStorage.getItem("_id")}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("data", data);
            this.setState({ ...data[0] });
          });
        this.setState({saved: this.props.saved})
        console.log(this.state)
    }

    saveHike = () => {
        console.log(this.props.hike)
        const hikeID = this.props.hike
        const hike = hikeID
        const user = localStorage.getItem("_id")
        const data = {
            hike: hike,
            user: user
        };
        fetch(`${backendHostURL}/save/${this.props.hike}`, {
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

    unsaveHike = () => {
        const hikeID = this.props.hike
        const hike = hikeID
        const user = localStorage.getItem("_id")
        const data = {
            hike: hike,
            user: user
        };
        fetch(`${backendHostURL}/save/${this.props.hike}`, {
            method: "DELETE",
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
        if (localStorage.getItem("isLoggedIn") === "false")
            window.location.href = "/login";
        else {
            let currentSave = this.state.saved
            currentSave = !currentSave
            this.setState({ saved: currentSave })
            if (this.state.saved === false) // just switch to "saved!"
                this.saveHike()
            else
                this.unsaveHike()
        }
    }

    render() {
        console.log(this.state.saved)
        if (this.state.saved === false) {
            return (
                <div>
                    <button id="save-hike" onClick={() => this.toggle()}><p>Save Hike</p>
                        <img style={{ marginLeft: "10px", fill: "white", height: "35px" }} src="/images/save-button/notsaved.png" />
                    </button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <button id="save-hike" onClick={() => this.toggle()}><p>Saved!</p>
                        <img style={{ marginLeft: "10px", fill: "white", height: "35px" }} src="/images/save-button/saved.png" />
                    </button>
                </div>
            );
        }
    }
}

SaveButton.propTypes = {
    history: PropTypes.object,
    hike: PropTypes.object,
    saved: PropTypes.object,
};
export default withRouter(SaveButton);
