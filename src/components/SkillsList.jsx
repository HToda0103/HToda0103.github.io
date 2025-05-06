import React, { useEffect, useState } from "react";
import yaml from "js-yaml";

function SkillsList({skills}){
  // const [skills, setSkills] = useState([]); //変数を定義

  // useEffect(() => {
  //   fetch("/skills.yaml")
  //     .then((response) => response.text())
  //     .then((text) => {
  //       //response => response.text()の値textに引き渡す
  //       const data = yaml.loadAll(text);
  //       // console.log(data);
  //       setSkills(data);
  //     })
  //     .catch((error) => console.error("yaml読み込みエラー :", error));
  // }, []);

  return (
    <section id="skills">
      <h3>Skills</h3>
      <ul className="skill-list">
        {console.log(skills)}
        {skills.map((skill, index) => (
          <li>{skill.program}</li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsList;
