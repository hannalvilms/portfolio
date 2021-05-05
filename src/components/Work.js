import React, {Component} from 'react';
import $ from 'jquery';
import Portfolio from './img/portfolio.png';
import Snake from './img/snake.png';
import Simons from './img/simons.png';
import Weather from './img/weather.png';
import Kassikaitse from './img/kassikaitse.png';
import Quiz from './img/quiz.png';
import Aed from './img/aed.png';

export default class Work extends Component {
    componentDidMount() {
        let $animation_elements = $('.animation-element');
        let $window = $(window);

        function check_if_in_view() {
            let window_height = $window.height();
            let window_top_position = $window.scrollTop();
            let window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                let $element = $(this);
                let element_top_position = $element.offset().top;

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    }

    render() {
        return (
            <div className="work animation-element slide slide-left testimonial" id="work">
                <div className=" work-row row col-lg-10">
                    <h1 className="col-lg-12">Work</h1>
                        <div className="col-lg-4 col-md-6">
                            <a href="https://aed.academy/frontpage" target="_blank">
                                <img src={Aed} alt="aed"/>
                                <p>2nd grade study material (WIP)</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <a href="https://hannalvilms.github.io/react-quiz/" target="_blank">
                                <img src={Quiz} alt="quiz"/>
                                <p>Quiz made using ReactJS</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <a href="https://xd.adobe.com/view/0795d59e-8053-4c4d-56f7-182b48520606-71a4/" target="_blank">
                                <img src={Kassikaitse} alt="Kassikaitse"/>
                                <p>Design made for Kassikaitse MTÜ</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <a href="https://hannalvilms.github.io/weather" target="_blank">
                                <img src={Weather} alt="weather"/>
                                <p>Weather app made using ReactJS</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <a href="https://hannalvilms.github.io/simons-game" target="_blank">
                                <img src={Simons} alt="simons"/>
                                <p>Simon's game made using JS</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <a href="https://hannalvilms.github.io/snake" target="_blank">
                                <img src={Snake} alt="snake"/>
                                <p>Snake game made using ReactJS</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <a href="https://hannalvilms.github.io/hanna.liisa" target="_blank">
                                <img src={Portfolio} alt="portfolio"/>
                                <p>Very first portfolio</p>
                            </a>
                        </div>
                    </div>
                </div>

        )
    }
}
