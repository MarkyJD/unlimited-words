export const status = ['absent', 'present', 'correct'];

export const chars = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
];

export const Charmap = [
  {
    char: '',
    status: '',
  },
];

export default function keymap() {
  for (let i = 0; i < chars.length; i += 1) {
    Charmap.chars = chars[i];
    Charmap.status = '';
    console.log(Charmap);
  }
}
