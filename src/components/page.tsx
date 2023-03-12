import React, { useState } from "react"

function checkAnswer(level: number, userAnswer: string): boolean {
  // split logic goes here //
  const answers = new Map<number, string>();
  answers.set(1, 'justify-content: flex-end;');
  if (userAnswer === answers.get(level)) {
    console.log('match found')
    return true;
  }
  else return false;
}

export default function Page() {
  const [userAnswer, setUserAnswer] = useState('');
  const [level, setLevel] = useState(1); // this is where we grab the level from local storage (or in useEffect)

  const isCorrect = checkAnswer(level, userAnswer)

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
              <textarea onChange={ event => setUserAnswer(event.target.value) } className="line-text input-area ml-20">
                {/* Check answer functions */}
                {/* Adding multiple lines (STRETCH FEATURE) split on semi-colon and on colon */}
              </textarea>
              {
                isCorrect === true ? 'WOW NICE!' : 'You SUCK AT CSS'
              }
              <p className="line-text">&#125;</p>
              <button type="button" className="continue">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
