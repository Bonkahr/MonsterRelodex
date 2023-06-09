// import { Component } from "react";

import './search-box.styles.css';


//Function component
const SearchBox = (props) => {
  const { className, placeholder, onChangeHandler } = props;
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};


//class componenet
// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type='search'
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;