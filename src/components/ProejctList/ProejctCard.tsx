import React, { useState } from "react";
import styled from "styled-components";
import "./Projects.css";
import { AnimateBurger } from "@hahaym6164/burger-animated-icon";
import { Button } from "@mui/material";

interface CardProps {
  imageUrl: string;
}
const ProjectCard = () => {
  const [state, setState] = useState(false);
  const toggleButton = () => {
    setState(!state);
  };
  const Cards = [
    {
      title: "E-commerce Pet Shop",
      imageUrl:
        "https://utfs.io/f/f098f4d5-896b-480c-b09d-16f4bfbe0c3b-6h9n4a.png",
      description:
        "A full-stack Next.js e-commerce platform for pet products, featuring a comprehensive order and product management system with integrated Google Authentication.",
      techStack: "Next.js / Typescript / Tailwind / MongoDB",
      link: "https://hamster-land.onrender.com/",
    },
    {
      title: "NPM Componnet Library",
      isComponent: true,

      imageUrl:
        "https://utfs.io/f/ef2a50bf-b2e9-4a55-ac4f-53fbce93dafd-6ipnmy.png",
      description:
        "This package offers a sleek, animated burger menu button designed for React applications. It transitions smoothly between a burger icon and a close button, providing an intuitive toggle mechanism.",
      techStack: "Typescript / Tailwind / Webpack",
      link: "https://www.npmjs.com/package/@hahaym6164/burger-animated-icon",
    },
  ];
  return (
    <StyledWrapper className="cardlist-wrapper">
      {Cards.map((i) => (
        <CardWrapper className="card-wrapper " imageUrl={i.imageUrl}>
          <div className="card">
            <a className="card__title" target="_blank" href={i.link}>
              <h3 className="card__title">{i.title}</h3>
            </a>

            {i.isComponent && (
              <Button onClick={() => toggleButton()}>
                <AnimateBurger
                  classes={state ? "is-active" : ""}
                  color="var(--black)"
                  num={6}
                  size="small"
                />
              </Button>
            )}
            <p className="card__content">{i.description}</p>
            <div className="card__date">{i.techStack}</div>
            <a target="_blank" href={i.link}>
              <div className="card__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="15"
                  width="15"
                >
                  <path
                    fill="#fff"
                    d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </CardWrapper>
      ))}
    </StyledWrapper>
  );
};
const CardWrapper = styled.div<CardProps>`
  .card::before {
    background-image: url(${(props) => props.imageUrl});
  }
`;
const StyledWrapper = styled.div`
  .card-wrapper {
    width: 400px;
  }
  .card::before {
    content: "";
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.15;
    z-index: -1;
  }
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    --border-radius: 0.75rem;
    --primary-color: var(--dark-white);
    --secondary-color: var(--black);
    width: 100%;
    font-family: "Arial";
    padding: 1rem;
    border-radius: var(--border-radius);
    opacity: 0.9;

    background: #f1f1f3;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
    position: relative;
  }

  .card > * + * {
    margin-top: auto;
  }

  .card .card__content {
    color: var(--black);
    font-size: 1.2rem;
  }
  .card .card__title {
    padding: 0;
    color: var(--black);
    font-size: 1.5rem;
    font-weight: bold;
  }

  .card .card__date {
    color: #6e6b80;
    font-size: 1rem;
  }

  .card .card__arrow {
    position: absolute;
    background: var(--primary-color);
    padding: 0.4rem;
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    bottom: 0;
    right: 0;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card svg {
    transition: 0.2s;
  }

  /* hover */
  .card__title:hover {
    color: var(--black);
    text-decoration: underline;
  }

  .card__arrow:hover {
    background: #111;
  }

  .card:hover .card__arrow svg {
    transform: translateX(3px);
  }
`;

export default ProjectCard;
