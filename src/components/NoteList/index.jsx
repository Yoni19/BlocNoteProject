import React, {useState} from 'react';
import Note from 'components/Note';

const NoteList = (props) => {
  const [list, setList] = useState("");
  let listOfNotes = [];

  for(let i =0; i < localStorage.length; i++) {
    let note = {
      title: localStorage.key(i),
      content: localStorage.getItem(localStorage.key(i))
    }
    listOfNotes.push(note);
  };

  /*const handleClick= (note) => () => {
    props.onSelect(note)
  }
  */

  let notes = listOfNotes.map((note) =>(
    <Note
    title={note.title}
    content={note.content}
    /*onClick={handleClick(note)}*/
    />
  ));
  return(notes);
};

export default NoteList;