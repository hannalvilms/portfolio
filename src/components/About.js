import React, {Component} from 'react';
import $ from 'jquery';

export default class About extends Component {
    componentDidMount() {
        let $animation_elements = $('.animation-element');
        let $window = $(window);

        function check_if_in_view() {
            let window_height = $window.height();
            let window_top_position = $window.scrollTop();
            let window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                let $element = $(this);
                let element_height = $element.outerHeight();
                let element_top_position = $element.offset().top;
                let element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
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
            <div className="aboutme row" id="about">
                <div className="about col-lg-6 col-md-5 col-sm-12 animation-element  animation-element slide slide-left testimonial">
                    <div className="about-row row">
                        <h1 className="col-lg-12">About me</h1>
                        <div className="description">
                            <p>A 21 year old studying software development at Tartu Vocational Centre. I came across programming when I was in Gymnasium doing my thesis - I wrote a small piece code with R to analyse microRNA data. After graduation I started to learn HTML and CSS and decided to apply to Tartu Vocational Education Center to study as a junior software developer.</p>
                            <p>I know fair bit about front-end development, but I'm eager to learn more about it and back-end development. I love learning new things and I’m always open to try them out. Also, I'm really passionate about creating stunning designs and building good looking websites. My hobbies include cooking and I enjoy baking (especially cookies!). I love hiking, spending time in nature and being active. I also like to knit, read and to take care of plants.</p>
                        </div>
                    </div>
                </div>
                <div className="education col-lg-6 col-md-7 col-sm-12">
                    <div className="row">
                         <h1 className="col-lg-12">Education</h1>
                        <div className="row col-lg-12">
                            <p className="col-lg-4 col-sm-4 col-3 year">2019-...</p>
                            <p className="col-lg-8 col-sm-8 col-9 school">Tartu Vocational Education Centre</p>
                        </div>
                        <div className="row col-lg-12">
                            <p className="col-lg-4 col-sm-4 col-3 year">2016-2019</p>
                            <p className="col-lg-8 col-sm-8 col-9 school">Miina Härma Gymnasium <br/> <b>Thesis:</b> MicroRNA Expression Correlation With Other MicroRNAs and Their Target Genes</p>
                        </div>
                        <div className="row col-lg-12">
                            <p className="col-lg-4 col-sm-4 col-3 year">2015-2016</p>
                            <p className="col-lg-8 col-sm-8 col-9 school">Aravete High School <br/> <b>Thesis:</b> Organization of Christmas week</p>
                        </div>
                        <div className="row col-lg-12">
                            <p className="col-lg-4 col-sm-4 col-3 year">2007-2015</p>
                            <p className="col-lg-8 col-sm-8 col-9 school">Maidla School</p>
                        </div>
                        <div className="row col-lg-12">
                            <p className="col-lg-4 col-sm-4 col-3 year">2007-2014</p>
                            <p className="col-lg-8 col-sm-8 col-9 school">Kiviõli School of Music</p>
                        </div>
                    </div>
                    <div className="experience">
                        <h1>Experience</h1>
                        <div className="row">
                            <div className="row col-lg-12">
                                <p className="col-lg-4 col-sm-4 col-3 year">2020</p>
                                <p className="col-lg-8 col-sm-8 col-9 school">Maksimum OÜ (Internship)</p>
                            </div>
                            <div className="row col-lg-12">
                                <p className="col-lg-4 col-sm-4 col-3 year">2019-2020</p>
                                <p className="col-lg-8 col-sm-8 col-9 school">G4S Security (Staff)</p>
                            </div>
                            <div className="row col-lg-12">
                                <p className="col-lg-4 col-sm-4 col-3 year">2018-2019</p>
                                <p className="col-lg-8 col-sm-8 col-9 school">Administrator and janitor at Hotel Draakon</p>
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <h1>Skills</h1>
                        <div className="skills-row row col-lg-12">
                            <div className="col-lg-3">
                                <h6>Beginner</h6>
                                <p>Java</p>
                                <p>PHP</p>
                            </div>
                            <div className="col-lg-3">
                                <h6>Elementary</h6>
                                <p>JS</p>
                            </div>
                            <div className="col-lg-3">
                                <h6>Intermediate</h6>
                                <p>jQuery</p>
                                <p>MySQL</p>
                                <p>ReactJS</p>
                            </div>
                            <div className="col-lg-3">
                                <h6>Advanced</h6>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>WordPress</p>
                                <p>AdobeXD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
