export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
  name: 'Atushi',
  height: 178
} as const;

// profile.name = 'Ham';
// profile.height = 180;