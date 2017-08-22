# Sentimental

A sentiment analyzer for English, Dutch and German. Feel free to add more languages.

## Scoring

Word scores are normalized to a scale between -1 and 1 and all scores in a sentence are summed for the total score. The higher the score the more positive the sentiment.

Words are sourced from:

- English: the [AFINN-165](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010)
- Dutch: [Moors et al](http://crr.ugent.be/papers/Moors_et_al_BRM_norms_Valence_Arousal_Dominance_AoA.pdf)
- German: [Leipzig Affective Norms for German](https://link.springer.com/article/10.3758%2FBRM.42.4.987)

German is by far the smallest word list and therefor the least reliable.

## install

```npm install --save sentimental```

```javascript
  const sentiment = require('sentimental');

  const s = sentiment('EN', 'Cats are amazing!');
  // Results in: 0.8 score
```

## Credits

Inspired and based upon [Andrew Sliwinskis Sentiment](https://github.com/thisandagain/sentiment)

## License

Copyright 2017 Hidde Stokvis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
