import React, { Fragment } from "react";
import MyImage from "../MyImage/MyImage";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import "./style.css";
import JobExperienceList from "../JobExperienceList/JobExperienceList";
function Main() {
  const skillLists = [
    "React",
    "Javascript (ES6+)",
    "Node.js",
    "Html5",
    "Typescript",
  ];
  return (
    <Fragment>
      <section id="main-section">
        <p> my name is </p>
        <h1>Ming Ying</h1>
        <h1>I built things for the Web</h1>
      </section>
      <section id="about-me">
        <h2 className="numbered-heading">About Me</h2>

        <div className="about-me-inner">
          <div className="about-me-desc">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                voluptas blanditiis exercitationem dolor consequuntur provident
                non facilis corporis cupiditate repellendus quo earum est
                inventore, odit ducimus quidem illo asperiores aliquid.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis et soluta vitae vel deleniti maiores rerum impedit,
                saepe ipsum ea. Ad necessitatibus praesentium asperiores
                mollitia eum harum quos nemo voluptatibus!
              </p>
            </div>
            <div className="skill">
              <ul className="skill-list">
                {skillLists.map((i) => (
                  <li key={i}>
                    <CheckOutlinedIcon style={{ marginRight: "10px" }} /> {i}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <MyImage />
        </div>
      </section>

      <section id="job-experience">
        <h2 className="numbered-heading">My Job Experience</h2>
        <JobExperienceList />
      </section>
    </Fragment>
  );
}

export default Main;
