import flexValues from "./flex-values"

export default function checkFlex(value: string): string {
  if (!value) return 'flex-start';
  if (!flexValues.includes(value.trim())) {
    return 'flex-start';
  }
  return value;
}
