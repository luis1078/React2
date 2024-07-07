import React from "react";
import '../stylesheets/Button.css'
function Button({text, buttonType, clickFunction}){
  return(
    <button className={ buttonType }
    onClick={clickFunction}>
      {text}
    </button>
  );
}
export default Button;