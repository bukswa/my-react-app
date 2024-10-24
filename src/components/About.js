import React from "react";
import { LANG } from "../utils/langConstants";

const About = ({ lang }) => {
  return (
    <div>
      <h1>{LANG[lang].title}</h1>
      <p>{LANG[lang].desc}</p>
    </div>
  );
};

export default About;
