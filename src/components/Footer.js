import React, {Component} from 'react';
import Github from './img/github.png';
import LinkedIn from './img/linkedin.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row col-lg-12">
                    <div className="col-lg-12">
                        <a>2021 © Hanna-Liisa Vilms</a>
                    </div>
                    <div className="logos">
                        <a href="https://github.com/hannalvilms" target="_blank"><img src={Github}/></a>
                        <a href="https://www.linkedin.com/in/hanna-liisa-vilms/" target="_blank"><img src={LinkedIn}/></a>
                    </div>
                </div>
            </div>
        )
    }
}
