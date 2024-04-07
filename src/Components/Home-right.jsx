import React from "react";
import "./Home-right.scss";

function Right() {
  return (
    <>
      <div className="right-wrap">
        <div className="right-header">
          <h2>
          Passionate web developer
          </h2>
        </div>
        <div className="right-text">
          <p>
       <span>WELCOME !</span> IM SIMON KAMAU, a web developer
            <br />
           specializing in <span>React</span> ,<span>Express js</span>.<br />
     and <span>Microsoft SQL.</span>
     Lets build something amazing together!
          </p>
          <p>Exprole my portfolio to see my projects</p>
        </div>
        <div className="button">
          <button>
            <p>
              WEB <span>DEVELOPER</span>
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Right;
