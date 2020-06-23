export const HEATER_KIT = [
  {
    id: 'heater-1',
    code: 81,
    key: 'Q',
    description: 'Heater 1',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/heater-kit/heater-1.mp3`
  }, {
    id: 'heater-2',
    code: 87,
    key: 'W',
    description: 'Heater 2',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/heater-kit/heater-2.mp3`
  }, {
    id: 'heater-3',
    code: 69,
    key: 'E',
    description: 'Heater 3',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/heater-kit/heater-3.mp3`
  }, {
    id: 'heater-4',
    code: 65,
    key: 'A',
    description: 'Heater 4',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/heater-kit/heater-4.mp3`
  }, {
    id: 'clap',
    code: 83,
    key: 'S',
    description: 'Clap',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/heater-kit/clap.mp3`
  }, {
    id: 'open-hh',
    code: 68,
    key: 'D',
    description: 'Open HH',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/heater-kit/open-hh.mp3`
  }, {
    id: "kick-n-hat",
    code: 90,
    key: 'Z',
    description: "Kick n' Hat",
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/heater-kit/kick-n-hat.mp3`
  }, {
    id: 'kick',
    code: 88,
    key: 'X',
    description: 'Kick',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/heater-kit/kick.mp3`
  }, {
    id: 'closed-hh',
    code: 67,
    key: 'C',
    description: 'Closed HH',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/heater-kit/closed-hh.mp3`
  }
];

export const SMOOTH_PIANO_KIT = [
  {
    id: 'chord-1',
    code: 81,
    key: 'Q',
    description: 'Chord 1',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/smooth-piano-kit/chord-1.mp3`
  }, {
    id: 'chord-2',
    code: 87,
    key: 'W',
    description: 'Chord 2',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/smooth-piano-kit/chord-2.mp3`
  }, {
    id: 'chord-3',
    code: 69,
    key: 'E',
    description: 'Chord 3',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/smooth-piano-kit/chord-3.mp3`
  }, {
    id: 'shaker',
    code: 65,
    key: 'A',
    description: 'Shaker',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/smooth-piano-kit/shaker.mp3`
  }, {
    id: 'open-hh',
    code: 83,
    key: 'S',
    description: 'Open HH',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/smooth-piano-kit/open-hh.mp3`
  }, {
    id: 'closed-hh',
    code: 68,
    key: 'D',
    description: 'Closed HH',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/smooth-piano-kit/closed-hh.mp3`
  }, {
    id: "punchy-kick",
    code: 90,
    key: 'Z',
    description: "Punchy Kick",
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/smooth-piano-kit/punchy-kick.mp3`
  }, {
    id: 'side-stick',
    code: 88,
    key: 'X',
    description: 'Side Stick',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/smooth-piano-kit/side-stick.mp3`
  }, {
    id: 'snare',
    code: 67,
    key: 'C',
    description: 'Snare',
    soundUrl: `${process.env.PUBLIC_URL}/assets/mp3/smooth-piano-kit/snare.mp3`
  }
];

export const BANKS = [HEATER_KIT, SMOOTH_PIANO_KIT];
