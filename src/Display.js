import React from "react";

//const name = "Zakir Hakro";
//const profession = "Mentor";
//const company = "MUET";

const Display = (props) => {
  return (
    <>
      <h1>Hi There!</h1>
      <h2>I'm {props.name} </h2>
      <h3>
        {" "}
        I'm {props.profession} at {props.company}
      </h3>
    </>
  );
};

export default Display;
