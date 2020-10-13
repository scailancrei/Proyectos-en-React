import React, { Component, Fragment } from "react";

class Footer extends Component {
    render() {
        return (
            <div style={{ position: "absolute", bottom: 0, width: "100%" }} className="bg-gray-100">
                <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
                    © 2020 Todo-App.
                </div>
            </div>
        );
    }
}

export default Footer;