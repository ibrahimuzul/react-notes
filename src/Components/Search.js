import React from "react";
import { MdSearch } from "react-icons/md";

class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="search">
            <MdSearch className="search-icons" size='1.3em'></MdSearch>
            <input onChange={(event) => this.props.handleSearchNote(event.target.value)} type="text" placeholder="type to search..."></input>
        </div>;
    }
}

export default Search;