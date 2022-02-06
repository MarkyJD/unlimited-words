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

export const Charmap = [];

export default function keymap() {
  if (Charmap.length === 0) {
    for (let i = 0; i < chars.length; i += 1) {
      Charmap.push({
        char: chars[i],
        status: '',
      });
    }
    // console.log(Charmap);
  }
}
