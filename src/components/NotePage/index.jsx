import React, { useState } from 'react';
import NoteDisplay from 'components/NoteDisplay';
import MarkdownInput from 'components/MarkdownInput';


const NotePage = () => {
    const [note, setNote] = useState({});
    const [storedNote, setStoreNote] = useState({});


    return (

        <div>
            <h1>Ajouter une note</h1>

        <div>
            <NoteDisplay title={note.title} content={note.content} />
        </div>
        <div>
            <MarkdownInput
            getNote={(input) => setNote(input)}

            getStored={(title,content) => setStoreNote({
                title: title,
                content: content
            })}
            />
        </div>



        </div>
    )
}

export default NotePage;