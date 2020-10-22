import React, { useState } from 'react';
import NoteDisplay from 'components/NoteDisplay';
import MarkdownInput from 'components/MarkdownInput';
import NoteList from 'components/NoteList';
import 'sass/mystyles.scss';


const NotePage = () => {
    const [note, setNote] = useState({});
    const [storedNote, setStoreNote] = useState({});

    const handleSelect = (selectedNote) => {

    }

    return (
        <div>
            <div classeName="columns">
                <div className="column">
                    <button className="button is-primary is-light">
                        Ajouter une note
            </button>
                        <NoteList /*onSelect={}*//>
                    
                </div>
                </div>

                <div className="box" >
                    <div class="columns">
                        
                        <div></div>
                            <NoteDisplay title={note.title} content={note.content} />
                        </div>

                        <div>
                            <MarkdownInput
                                getNote={(input) => setNote(input)}
                                getStored={(title, content) =>
                                    setStoreNote({
                                        title: title,
                                        content: content,
                                    })
                                }
                            />
                        </div>


                    </div>
                </div>
            
        


    );
}

export default NotePage;