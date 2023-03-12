export default function checkAnswer(level: number, userAnswer: string): boolean {
  // split logic goes here //
  const answers = new Map<number, string>();
  answers.set(1, 'justify-content: flex-end');
  if (userAnswer === answers.get(level)) {
    console.log('match found')
    return true;
  }
  else return false;
}
