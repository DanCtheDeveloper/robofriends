import React from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


class App extends Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox SearchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots}/>
    </div>
    )
    }
}

export default App;