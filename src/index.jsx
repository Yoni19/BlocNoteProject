import React from 'react';
import ReactDOM from 'react-dom';
import NotePage from './components/NotePage'
import 'sass/mystyles.scss'


const App = () => {
    return (
        <div>
            <NotePage />

        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"))