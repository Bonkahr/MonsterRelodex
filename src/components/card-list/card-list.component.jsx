// import { Component } from "react";

import Card from "../card/card.component";


import './card-list.styles.css';

//function componenet

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);



//Class component
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return (
//             <Card monster={monster} />
//           );
//         }
//         )}
//       </div>
//     );
//   }
// }

export default CardList;
