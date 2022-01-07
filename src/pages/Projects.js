import { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
        <Link to="contacts">Contacts</Link>
      </>
    );
  }
}

export default Projects;
