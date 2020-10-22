import React from 'react';

const Note = (props) => {
    const { title, content,onClick } = props;
    return (
        
            <div className="column is-one-fifth" onClick={onClick}>
                <div className="card">
                <div className="card-content">
                    <h2 className="title">{title}</h2>
                    <p className="subtitle">{content}</p>
                </div>
                </div>
            </div>
        
    );
}

export default Note;