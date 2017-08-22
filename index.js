const dutch = require('./dutch');
const english = require('./english');
const german = require('./german');

function tokenize(input) {
  return input
          .toLowerCase()
          .replace(/[.,\/#!$%\^&\*;:{}=_`\"~()]/g, '')
          .split(' ');
}

function getNorms(language) {
  switch (language) {
    case 'NL':
      return dutch.norms;
    case 'EN':
      return english.norms;
    case 'DE':
      return german.norms;
    default:
      return english.norms;
  }
}

function getConfig(language) {
  switch (language) {
    case 'NL':
      return dutch.config;
    case 'EN':
      return english.config;
    case 'DE':
      return german.config;
    default:
      return english.config;
  }
}

function normalize(from, to, score) {
  return 2 * ((score - from) / (to - from)) - 1;
}

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
const sum = arr => arr.reduce( ( p, c ) => p + c, 0 );

module.exports = function sentiment(language, sentence) {
  const config = getConfig(language);
  const negators = config.negators;
  const norms = getNorms(language);

  const tokens = tokenize(sentence);
  let score = [];
  let i = tokens.length;

  while (i -= 1) {
    const word = tokens[i];
    const norm = norms[word];
    if (typeof norm === 'undefined') continue;
    let normScore = normalize(config.scale.from, config.scale.to, norm);

    if (i > 0) {
      const previousToken = tokens[i - 1];
      if (negators.indexOf(previousToken) > -1) {
        normScore = -normScore;
      }
    }
    score.push(normScore);
  }
  return sum(score);
}
