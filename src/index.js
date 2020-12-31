import React from 'react';
import ReactDOM from 'react-dom';

//should produce some HTML
const App = function() {
    return <div>
        Hi!
    </div>
}

//take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));