import React, { useState, useEffect } from 'react';




const MarkdownInput = ({getNote,getStored}) => {
    const  [input,setInput] = useState({});


    const handleChange = (event) => {
        setInput({
            ...input,
            [event.currentTarget.name] : event.currentTarget.value});
    };

    useEffect(() => {
        getNote(input);
    },[input]);


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
      
        <form>
            <div>
                <input name='title' type='text' onChange={handleChange} className='form-control'/>
            </div>

            <div>
                <textarea name='content' onChange={handleChange} className='form-control'/>
            </div>

            <div>
                <button onClick={handleSave} className='btn btn-info'>Sauvegarder</button>
            </div>

        </form>


    );


}


export default MarkdownInput;