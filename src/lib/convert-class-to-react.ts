export default function convertClassToReact(classToCheck: string): string {
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
