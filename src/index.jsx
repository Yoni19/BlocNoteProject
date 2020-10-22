import React from 'react';
import ReactDOM from 'react-dom';
import NotePage from './components/NotePage'


const App = () => {
    return (
        <div>
            <h1>Bonjour</h1>
            <NotePage />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"))