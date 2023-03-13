export default function checkForSemicolon(value: string): boolean {
  if (!value) return false;
  if (value.includes(';')) {
    return true;
  } else return false;
}
