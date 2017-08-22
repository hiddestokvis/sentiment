const sentiment = require('./');

const zinnen = [
  'ik vind katten lief',
  'ik haat katten',
  'ik heb gène',
  'Ik ben super goed!'
];

for (let i = 0; i < zinnen.length; i += 1) {
  console.log(zinnen[i]);
  console.log(sentiment('NL', zinnen[i]));
  console.log('-----');
}

const sentences = [
  'cats are stupid',
  'cats are amazing',
  'i am embarrassed',
  'i am the best most awesome person in the world',
  'i don\'t kill'
];

for (let i = 0; i < sentences.length; i += 1) {
  console.log(sentences[i]);
  console.log(sentiment('EN', sentences[i]));
  console.log('-----');
}

const satze = [
  "Das war ein Wunder",
  "Ich muss Kotze",
  "Ich habe lust dazu"
];

for (let i = 0; i < satze.length; i += 1) {
  console.log(satze[i]);
  console.log(sentiment('DE', satze[i]));
  console.log('-----');
}
