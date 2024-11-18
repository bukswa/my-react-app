import React from "react";
import { LANG } from "../utils/langConstants";
import { useUserOnline } from "./livechat/LiveChat copy";

const About = ({ lang }) => {
  const isOnline = useUserOnline();
  return (
    <div>
      <h1>{LANG[lang].title}</h1>
      <p>{LANG[lang].desc}</p>
      <p>{`user state is:${isOnline}`}</p>
    </div>
  );
};

export default About;
