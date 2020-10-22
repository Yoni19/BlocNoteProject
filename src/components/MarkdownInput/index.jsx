import React, { useState, useEffect } from "react";


const MarkdownInput = ({ getNote, getStored }) => {
    const [input, setInput] = useState({});


    const handleChange = (event) => {
        setInput({
            ...input,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    useEffect(() => {
        getNote(input);
    }, [input]);


    const handleSave = (event) => {
        event.preventDefault();
        localStorage.setItem(input.title, JSON.stringify(input.content));
        console.log(`A été sauvegardé : ${input.title} ${input.content}`);
        console.log(input);
        console.log(localStorage);
        const contentStore = JSON.parse(localStorage.getItem(input.title));
        console.log(`Sauvegardé : ${contentStore}`);
        getStored(input.title, contentStore);
    };

    return (
        <div className="column">
            <div class="field">
                <label className="label">Titre</label>
                <div className="control-radius">
                    <input name='title' placeholder="Votre titre" type='text' onChange={handleChange} className='input' />
                </div>
            </div>

            <div className="field">
            <label class="label">Votre Note</label>
            <div className="control-radius">
                <textarea name='content' placeholder="Votre note" onChange={handleChange} className='textarea' />
            </div>
            <br></br>
            <div>
                <button onClick={handleSave} className='button is-primary is-rounded'>Sauvegarder</button>
            </div>


        </div>
    </div>


    );


}


export default MarkdownInput;