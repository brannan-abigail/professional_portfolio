import React from "react";
import Headshot from "../resources/AbbyBrannan_LavGrad2021_Headshot.jpg";

export default function Home() {
  return (
    <div className = "component"> 
      <h2>Howdy!</h2>

      <p>
        I'm an aspiring Software Engineer. I find solving technical problems satisfying, 
        much like finishing a puzzle. Especially as the field challenges one to continuously 
        learn new languages, philosophies and techniques, which is quite exciting! 
        Technology is a powerful tool for making positive change, and it's invigorating to 
        be a part of it.
      </p>

      <img src={Headshot}  alt="Abby Profile Pic" height={325} width={275}/> 
    </div>
  );
}