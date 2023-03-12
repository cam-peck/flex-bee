import React, { useState } from "react";
import JustifyHelp from "./justify-help";

function checkAnswer(level: number, userAnswer: string): boolean {
  // split logic goes here //
  const answers = new Map<number, string>();
  answers.set(1, 'justify-content: flex-end');
  if (userAnswer === answers.get(level)) {
    console.log('match found')
    return true;
  }
  else return false;
}

function convertClassToReact(classToCheck: string): string {
  const reference = new Map();
  reference.set('justify-content', 'justifyContent')
  reference.set('align-items', 'alignItems')

  const grabbedClass = reference.get(classToCheck)
  if (classToCheck.includes('-')) {
    if (grabbedClass) { return grabbedClass }
    else return 'nope'
  }
  return classToCheck;
}

function checkForSemicolon(value: string): boolean {
  if (!value) return false;
  if (value.includes(';')) {
    return true;
  } else return false;
}

function removeSemiColon(value: string): string {
  if (checkForSemicolon(value)) {
    return value.split(';')[0];
  } return value;
}

export default function Page() {
  const [userAnswer, setUserAnswer] = useState('');
  const [level, setLevel] = useState(1); // this is where we grab the level from local storage (or in useEffect)

  const isCorrect = checkAnswer(level, userAnswer)
  const splitAnswer = userAnswer.split(':');
  const property: string | undefined = convertClassToReact(splitAnswer[0]);
  const value: string | undefined = removeSemiColon(splitAnswer[1]);

  const userStyle = {
      [property]: value
    };

  return (
    <div className="container bg-gold">
      <div className="col-half flex jc-c ac-c">
        <div className="sky flex" style={userStyle}>
          <img className="bee" src="/images/bee-g.webp" />
          <div className="hive-container flex jc-fe">
            <img className="hive" src="/images/hive-g.webp"/>
          </div>
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
            <JustifyHelp />
          </div>
        </div>
        <div className="row-half">
          <div className="input-box flex">
            <div className="number-bar">
              <p className="line-num font-consolas font-white">1</p>
              <p className="line-num font-consolas font-white">2</p>
              <p className="line-num font-consolas font-white">3</p>
              <p className="line-num font-consolas font-white">4</p>
              <p className="line-num font-consolas font-white">5</p>
              <p className="line-num font-consolas font-white">6</p>
            </div>
            <div className="text-box">
              <p className="line-text font-consolas">.sky &#123;</p>
              <p className="line-text pl-20 font-consolas">display: flex;</p>
              <textarea onChange={ event => setUserAnswer(event.target.value) } className="line-text input-area ml-20"></textarea>

              <p className="line-text font-consolas">&#125;</p>
              <button disabled={isCorrect ? false : true} onClick={() => setLevel(level + 1)} type="button" className="continue">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
