import React from 'react';




const Words = ({word,onUpdate,onDelete}) => {
  let updateD = function(){
    let newDef = prompt('Your own definition');
    onUpdate(word.word, newDef)
  }
return (
<div>
  <li>
    <p>{word.word}</p>
    <span>{word.definition}</span>
  </li>
  <button onClick={() => onDelete(word.word)}> Delete </button>
  <button onClick={()=> updateD()}> Update </button>
</div>
)}




export default Words;
