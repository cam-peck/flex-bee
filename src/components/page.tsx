import React from "react";

export default function Page() {
  return (
    <div className="container bg-gold">
      <div className="col-half flex jc-c ac-c">
        <div className="sky flex">
          <img className="bee" src="/images/bee.png" />
          <img className="hive" src="/images/beehive.png"/>
        </div>
      </div>
      <div className="col-half flex column ac-c">
        <h2>FlexBee</h2>
        <p>
          Your mission, should you choose to accept it is to make the bee do
          bee things. You must achieve this by using flexbox to make the bee
          get to his bee hive to continue doing bee stuff.
        </p>
        <div className="input-box flex">
          <div className="number-bar">
            <p className="line-num">1</p>
            <p className="line-num">2</p>
            <p className="line-num">3</p>
            <p className="line-num">4</p>
            <p className="line-num">5</p>
            <p className="line-num">6</p>
          </div>
          <div className="text-box">
            <p className="line-text">.sky &#123;</p>
            <p className="line-text pl-20">display: flex;</p>
            <p className="line-text pl-20">filler text</p>
            <p className="line-text">&#125;</p>
          </div>
        </div>
      </div>
    </div>
  )
}
