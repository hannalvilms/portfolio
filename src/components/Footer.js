import React, {Component} from 'react';
import Github from './img/github.png';
import LinkedIn from './img/linkedin.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row col-lg-12">
                    <div className="col-lg-12">
                        <p>2022 © Hanna-Liisa Vilms</p>
                    </div>
                    <div className="logos">
                        <a href="https://github.com/hannalvilms" target="_blank" rel="noreferrer"><img src={Github} alt="github" /></a>
                        <a href="https://www.linkedin.com/in/hanna-liisa-vilms/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="linkedin" /></a>
                    </div>
                </div>
            </div>
        )
    }
}
