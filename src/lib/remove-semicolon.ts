import checkForSemicolon from "./check-for-semicolon";

export default function removeSemiColon(value: string): string {
  if (checkForSemicolon(value)) {
    return value.split(';')[0];
  } return value;
}
