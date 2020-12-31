import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAgqlNR3Ff1YR0AMCK_dBZ3-pE4BOmG0YA';

//should produce some HTML
const App = () => {
    return <div>
        <SearchBar />
    </div>
}

//take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));