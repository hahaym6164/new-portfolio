import React, { Fragment, useEffect, useState, useRef } from "react";
import MyImage from "./MyImage/MyImage";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import "./style.css";
import MyProjects from "./MyProjects/MyProjects";
import JobExperienceList from "./JobExperienceList/JobExperienceList";
import MyButton from "../CustomStyle/MyButton";

function Main() {
  const [ref1, ref2, ref3, ref4, ref5] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const refs = [ref1, ref2, ref3, ref4, ref5];
  const skillLists = [
    "React",
    "Javascript (ES6+)",
    "Node.js",
    "Html5",
    "Typescript",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // console.log( "entry", entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("activeSection");
          console.log(entry.target.className, "tar");
        });
      },
      {
        rootMargin: "-100px",
      }
    );
    refs.forEach((i) => {
      if (i.current) {
        observer.observe(i.current);
      }
    });
  }, []);

  return (
    <Fragment>
      <section ref={ref1} id="main-section" className="first-section">
        <div className="main-intro">
          <div className="intro-text">
            <p className="yellow"> Hi, my name is </p>
          </div>
          <div className="intro-text">
            <h1>Ming Ying</h1>
          </div>
          <div className="sub-big intro-text dark-white ">
            <h1>My job is building websites!</h1>
          </div>

          <div className="intro-text dark-white">
            <p>
              I'm a passionate web developer who always pursuit higher standard
              and up-to-date technology expertise on building responsive and
              dynamic website with clean code
            </p>
          </div>
        </div>
      </section>
      <section ref={ref2} id="about-me">
        <h2 className="numbered-heading">About Me</h2>

        <div className="about-me-inner">
          <div className="about-me-desc">
            <div className="text">
              <p>
                Hi, my name is Ming Ying. I enjoy creating things for the web.
                What I understand as a programmer is to keep learning every
                single day. The technology is always updating. Since that I've
                learned a lot tech stack by my own. Including{" "}
                <span className="yellow">
                  React, Nodejs, Express, MongoDB, Wordpress,Shopify
                </span>
              </p>
              <p>
                My career plan so far is to deeply working through the front-end
                or full stack development towards webpages. I will keep updating
                this portfolio since I learned some new technology to execute.
              </p>
            </div>
            <div className="skill">
              <ul className="skill-list">
                {skillLists.map((i) => (
                  <li className="italic" key={i}>
                    <CheckOutlinedIcon
                      className="yellow"
                      style={{ marginRight: "10px" }}
                    />{" "}
                    {i}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <MyImage />
        </div>
      </section>

      <section ref={ref3} id="job-experience">
        <h2 className="numbered-heading">My Job Experience</h2>
        <JobExperienceList />
      </section>
      {/* <section ref={ref4} id="my-project">
        <h2 className="numbered-heading">Project I've built</h2>
        <MyProjects></MyProjects>
      </section> */}
      <section ref={ref5} id="contact-me">
        <h2 className="numbered-heading small-heading">What's next?</h2>
        <h2 className="title">Get In Touch</h2>
        <p>
          I'm currently looking for job opportunity. You are very welcome if you
          want to know me better. My inbox is always open. I will get back to
          you as soon as I can.
        </p>
        <MyButton variant="outlined" href="mailto:peteryingming@gmail.com">
          Say Hi
        </MyButton>
      </section>
    </Fragment>
  );
}

export default Main;
