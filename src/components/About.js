import React, { Component } from "react";
import $ from "jquery";

export default class About extends Component {
  componentDidMount() {
    let $animation_elements = $(".animation-element");
    let $window = $(window);

    function check_if_in_view() {
      let window_height = $window.height();
      let window_top_position = $window.scrollTop();
      let window_bottom_position = window_top_position + window_height;

      $.each($animation_elements, function () {
        let $element = $(this);
        let element_height = $element.outerHeight();
        let element_top_position = $element.offset().top;
        let element_bottom_position = element_top_position + element_height;

        //check to see if this current container is within viewport
        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          $element.addClass("in-view");
        } else {
          $element.removeClass("in-view");
        }
      });
    }

    $window.on("scroll resize", check_if_in_view);
    $window.trigger("scroll");
  }

  render() {
    let education = [
      {
        year: "2019 - 2021",
        school: "Tartu Vocational Education Centre",
        thesis: "Web Application for 2nd Grade Students",
      },
      {
        year: "2016 - 2019",
        school: "Miina Härma Gymnasium",
        thesis:
          "MicroRNA Expression Correlation With Other MicroRNAs and Their Target Genes",
      },
      {
        year: "2015 - 2016",
        school: "Aravete High School",
        thesis: "Organization of Christmas week",
      },
      {
        year: "2007 - 2015",
        school: "Maidla School",
      },
      {
        year: "2007 - 2014",
        school: "Kiviõli School of Music",
      },
    ];

    let experience = [
      {
        year: "2020",
        description: "Maksimum OÜ (Internship)",
      },
      {
        year: "2019 - 2020",
        description: "G4S Security (Staff)",
      },
      {
        year: "2018 - 2019",
        description: "Administrator and janitor at Hotel Draakon",
      },
    ];

    let beginner = ['Java', 'PHP']
    let elementary = ['Less']
    let intermediate = ['JS', 'jQuery', 'MySQL', 'Sass', 'ReactJS']
    let advanced = ['HTML', 'CSS', 'WordPress', 'AdobeXD']

    return (
      <div className="aboutme row" id="about">
        <div className="about col-lg-6 col-md-5 col-sm-12 animation-element  animation-element slide slide-left testimonial">
          <div className="about-row row">
            <h1 className="col-lg-12">About me</h1>
            <div className="description">
              <p>
                A 21 year old living in Tartu. I studied software development at
                Tartu Vocational Centre and came across programming when I was
                in Gymnasium doing my thesis - I wrote a small piece code with R
                to analyse microRNA data. After graduation I started to learn
                HTML and CSS and decided to apply to Tartu Vocational Education
                Center to study as a junior software developer.
              </p>
              <p>
                I know fair bit about front-end development, but I'm eager to
                learn more about it. I love learning new things and I’m always
                open to try them out. Also, I'm really passionate about creating
                stunning designs and building good looking websites. My hobbies
                include cooking and I enjoy baking (especially cookies!). I also
                like to knit, spend time in nature and to take care of plants.
              </p>
            </div>
          </div>
        </div>
        <div className="education col-lg-6 col-md-7 col-sm-12">
          <div className="row">
            <h1 className="col-lg-12">Education</h1>
            {education.map((item) => (
              <div className="row col-lg-12">
                <p className="col-lg-4 col-sm-4 col-3 year">{item.year}</p>
                <p className="col-lg-8 col-sm-8 col-9 school">
                  {item.school}
                  <br />
                  {item.thesis && (
                    <>
                      <b>Thesis:</b> {item.thesis}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="experience">
            <h1>Experience</h1>
            <div className="row">
              {experience.map((item) => (
                <div className="row col-lg-12">
                  <p className="col-lg-4 col-sm-4 col-3 year">{item.year}</p>
                  <p className="col-lg-8 col-sm-8 col-9 school">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <div className="skills-row row col-lg-12">
              <div className="col-lg-3">
                <h6>Beginner</h6>
                {beginner.map((item) => (
                    <p>{item}</p>
                ))}
              </div>
              <div className="col-lg-3">
                <h6>Elementary</h6>
                {elementary.map((item) => (
                    <p>{item}</p>
                ))}
              </div>
              <div className="col-lg-3">
                <h6>Intermediate</h6>
                {intermediate.map((item) => (
                    <p>{item}</p>
                ))}
              </div>
              <div className="col-lg-3">
                <h6>Advanced</h6>
                {advanced.map((item) => (
                    <p>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
