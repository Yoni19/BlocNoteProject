import React, { useState } from 'react';
import Showdown from 'showdown';


const NoteDisplay = (props) => {
    const converter = new Showdown.Converter();
    const HTMLTextconvert = converter.makeHtml(props.content);


    const createMarkup = (text) => {
        return { __html: text };
    }

    return (
        <div>
            <div>
                <h1>{props.title}</h1>
            </div>

            <div>
                <div dangerouslySetInnerHTML={createMarkup(HTMLTextconvert)} />
            </div>

        </div>
    )

}

export default NoteDisplay;