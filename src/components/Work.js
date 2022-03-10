import React, { Component } from "react";
import $ from "jquery";
import Snake from "./img/snake.png";
import Foodie from "./img/foodie.png";
import Monet from "./img/monet.png";
import Simons from "./img/simons.png";
import Weather from "./img/whereisthesun.png";
import Kassikaitse from "./img/kassikaitse.png";
import Quiz from "./img/quiz.png";
import Aed from "./img/aed.png";
import Knitchart from "./img/knitchart.png";
import Coffee from "./img/coffee.png";
import Link from "./img/link.png";
import Github from "./img/github.png";

export default class Work extends Component {
  componentDidMount() {
    let $animation_elements = $(".animation-element");
    let $window = $(window);

    function check_if_in_view() {
      let window_height = $window.height();
      let window_top_position = $window.scrollTop();
      let window_bottom_position = window_top_position + window_height;

      $.each($animation_elements, function () {
        let $element = $(this);
        let element_top_position = $element.offset().top;

        //check to see if this current container is within viewport
        if (element_top_position <= window_bottom_position) {
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
    let works = [
      {
        link: "https://hannalvilms.github.io/monet/",
        githubLink: "https://github.com/hannalvilms/monet",
        img: Monet,
        alt: "monet",
        title: "Monet artwork page made using JS and Sass",
      },
      {
        link: "https://hannalvilms.github.io/foodie/",
        githubLink: "https://github.com/hannalvilms/foodie",
        img: Foodie,
        alt: "foodie",
        title: "Recipe page made using JS, Sass and Firebase",
      },
      {
        link: "https://hannalvilms.github.io/knitchart",
        githubLink: "https://github.com/hannalvilms/knitchart",
        img: Knitchart,
        alt: "knitchart",
        title: "Knitting chart maker made using ReactJS, Sass and Firebase",
      },
      {
        link: "https://hannalvilms.github.io/whereIsTheSun",
        githubLink: "https://github.com/hannalvilms/whereIsTheSun",
        img: Weather,
        alt: "weather",
        title: "Weather app made using ReactJS and Sass",
      },
      {
        link: "https://youtu.be/QDXF9-VMOaE",
        githubLink: "https://github.com/hannalvilms/aed",
        img: Aed,
        alt: "aed",
        title: "KHK Thesis: 2nd grade study material made with ReactJS and Laravel",
      },
      {
        link: "https://hannalvilms.github.io/coffee-app/",
        githubLink: "https://github.com/hannalvilms/coffee-app",
        img: Coffee,
        alt: "coffee-app",
        title: "Coffee ordering app made with jQuery Mobile",
      },
      {
        link: "https://hannalvilms.github.io/react-quiz/",
        githubLink: "https://github.com/hannalvilms/react-quiz",
        img: Quiz,
        alt: "quiz",
        title: "Quiz made using ReactJS",
      },
      {
        link: "https://xd.adobe.com/view/0795d59e-8053-4c4d-56f7-182b48520606-71a4/",
        img: Kassikaitse,
        alt: "Kassikaitse",
        title: "Design made for Kassikaitse MTÜ",
      },
      {
        link: "https://hannalvilms.github.io/simons-game",
        githubLink: "https://github.com/hannalvilms/simons-game",
        img: Simons,
        alt: "simon's gamne",
        title: "Simon's game made using JS",
      },
      {
        link: "https://hannalvilms.github.io/snake",
        githubLink: "https://github.com/hannalvilms/snake",
        img: Snake,
        alt: "snake",
        title: "Snake game made using ReactJS",
      },
    ];

    return (
      <div
        className="work animation-element slide slide-left testimonial"
        id="work"
      >
        <div className=" work-row row col-lg-10 col-md-10 col-sm-12">
          <h1 className="col-lg-12">Work</h1>
          {works.map((work, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 work-item" key={index}>
              <div
                onMouseEnter={() => {
                  document
                    .getElementsByClassName("overlay")
                    [index].classList.add("show");
                }}
                onMouseLeave={() =>
                  document
                    .getElementsByClassName("overlay")
                    [index].classList.remove("show")
                }
                onClick={() =>
                  document
                    .getElementsByClassName("overlay")
                    [index].classList.add("show")
                }
              >
                <div className="overlay" id={index}>
                  <p>{work.title}</p>
                  <div className="work-icons">
                    <a href={work.link} target="_blank" rel="noreferrer">
                      <img src={Link} alt="Link" />
                    </a>
                    {work.githubLink && (
                      <a
                        href={work.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Github} alt="github" />
                      </a>
                    )}
                  </div>
                </div>
                <img src={work.img} alt={work.alt} className="work-thumbnail" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
