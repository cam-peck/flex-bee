import React, { useState } from "react"

function checkAnswer(level: number, userAnswer: string): string {
  // split logic goes here //
  const answers = {
    1: 'test',
    2: 'test2'
  }
  return 'checking answer'
}

export default function Page() {
  const [userAnswer, setUserAnswer] = useState('');
  const [level, setLevel] = useState(0); // this is where we grab the level from local storage (or in useEffect)

  console.log(checkAnswer())
  return (
    <div className="container bg-gold">
      <div className="col-half flex jc-c ac-c">
        <div className="sky flex">
          <img className="bee" src="/images/bee.png" />
          <img className="hive" src="/images/beehive.png"/>
        </div>
      </div>
      <div className="col-half flex column ac-c">
        <div className="row-half">
          <div className="instructions">
            <h2 className="font-c1 font-white">FlexBees</h2>
            <p className="font-golos font-white">
              Your mission, should you choose to accept it is to make the bee do
              bee things. You must achieve this by using flexbox to make the bee
              get to his bee hive to continue doing bee stuff.
            </p>
          </div>
        </div>
        <div className="row-half">
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
              <textarea className="line-text input-area ml-20">
                {/* Controlled input takes user typing */}
                {/* Controlled input checks change and stores in state */}
                {/* State also needs to store the current level (in app) */}
                {/* Check answer functions */}
                {/* Adding multiple lines (STRETCH FEATURE) split on semi-colon and on colon */}
              </textarea>
              <p className="line-text">&#125;</p>
              <button type="button" className="continue">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
