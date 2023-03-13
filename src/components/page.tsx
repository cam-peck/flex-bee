import React, { useState } from "react";
import JustifyHelp from "./justify-help";
import AlignHelp from "./align-help";
import { checkAnswer, convertClassToReact, removeSemiColon, checkFlex, answers } from "../lib";

export default function Page() {
  const [userAnswer, setUserAnswer] = useState('');
  const [level, setLevel] = useState(1);
  const levelDescription: string = answers.get(level).levelDescription;
  const splitFormat: string[] = answers.get(level).levelAnswer.split(':');
  const formatProperty: string = convertClassToReact(splitFormat[0]);
  const hiveStyle = {
    [formatProperty]: splitFormat[1]
  }

  const isCorrect: boolean = checkAnswer(level, userAnswer)
  const splitAnswer: string[] = userAnswer.split(':');
  const property: string | undefined = convertClassToReact(splitAnswer[0]);
  const value: string | undefined = removeSemiColon(splitAnswer[1]);
  const checkedValue: string = checkFlex(value);


  const userStyle = {
    [property]: checkedValue
  };

  return (
    <div className="container bg-gold">
      <div className="col-half flex jc-c ac-c">
        <div className="sky flex" style={userStyle}>
          <img className="bee" src="/images/bee-g.webp" />
          <div className="hive-container flex" style={hiveStyle}>
            <img className="hive" src="/images/hive-g.webp"/>
          </div>
        </div>
      </div>
      <div className="col-half flex column ac-c">
        <div className="row-half">
          <div className="instructions">
            <h1 className="font-c1 font-white title">FlexBees</h1>
            <p className="font-golos font-white">
              { levelDescription }
            </p>
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
              <textarea onChange={ event => setUserAnswer(event.target.value) } className="line-text input-area ml-20" value={userAnswer}></textarea>

              <p className="line-text font-consolas">&#125;</p>
              <button disabled={isCorrect ? false : true} onClick={() => {setLevel(level + 1); setUserAnswer('')}} type="button" className={`continue ${isCorrect}`}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
