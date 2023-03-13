import answers from "./answers";

export default function checkAnswer(level: number, userAnswer: string): boolean {
  const answerObject = answers.get(level);
  if (userAnswer === answerObject.levelAnswer || userAnswer === (answerObject.levelAnswer + ';')) {
    return true;
  }
  else return false;
}
