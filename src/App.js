// import { Component } from 'react';
import { useState, useEffect } from 'react';


import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


//Function components

const App = () => {

  // console.log('render');

  const [searchField, setSearchField] = useState(''); // has [value, setValue]

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

  };

  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));

  }, []);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const newFiltredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFiltredMonsters);

  }, [monsters, searchField]);

  return (
    <div className="App" >
      <h1 className='app-title'>Monster Relodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monster' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};



// Class components
// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((responsuseEffect(() => {
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users) => setMonsters(users));

//   }, []); e) => response.json())
//     .then((users) => this.setState(() => {
//       return { monsters: users };
//     }));
// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filtredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App" >
//         <h1 className='app-title'>Monster Relodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monster' className='monsters-search-box' />
//         <CardList monsters={filtredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
