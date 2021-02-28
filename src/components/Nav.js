import React, {Component} from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div className="container port-navbar">
                <div className="row">
                    <div className="col-lg-12">
                    <a href="#about">About Me</a>
                    <a href="#work">Work</a>
                    </div>
                </div>
            </div>
        )
    }
}
