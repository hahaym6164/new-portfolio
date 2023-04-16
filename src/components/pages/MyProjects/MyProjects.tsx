import React from "react";

interface ProjectProps {
  name: string;
  desc: string;
  techStack: string[];
  links?: string[];
}

const Project = (props: ProjectProps) => {
  const { name, desc, techStack, links } = props;
  return <div className="my-project">

  </div>;
};

function MyProjects() {
  return (
    <div>
      MyProjects
      <div className="my-project-list"></div>
    </div>
  );
}

export default MyProjects;
