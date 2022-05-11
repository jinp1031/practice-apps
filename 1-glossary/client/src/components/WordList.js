import React from 'react';
import Words from './Words.js';

const WordList = ({words, onUpdate, onDelete}) => (
  <div>
    <h4>Glossaries</h4>
    <p>You have added {words.length} words!!</p>
    <ul>
      {words.map(word =>
      <Words
      word={word}
      onUpdate={onUpdate}
      onDelete={onDelete}
      />)}
    </ul>
  </div>
)





export default WordList;
