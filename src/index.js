import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAgqlNR3Ff1YR0AMCK_dBZ3-pE4BOmG0YA';
//const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1n027DP0_5Ss';



//should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = {videos: [], selectedVideo: null};


        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) =>{
            //this.setState({videos:videos});
            this.setState({videos:videos, selectedVideo: videos[0]});
            
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
        <div>
            <SearchBar onSearchTermChange = {videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
        </div>
        );
    }
}


//take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));