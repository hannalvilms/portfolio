import React, {Component} from 'react';
import Down from './img/down.png';

export default class Nav extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="header col-lg-12">
                        <h1>Welcome</h1>
                        <h3>I'm Hanna-Liisa</h3>
                        <a href="#about"><img src={Down} alt="down-arrow"/></a>
                    </div>
                </div>
            </div>
        )
    }
}
