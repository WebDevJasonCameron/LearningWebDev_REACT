import { Component } from "react";

import "./card-list.styles.css";

class CardList extends Component {
  render(){
    console.log('render')
    const { monsters } = this.props;

    return (
      <div>
       {monsters.map(monster => (
        <div className="card-container">
          <img 
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} 
            alt={`monster ${monster.name}`} 
          />
          <h2>{monster.name}</h2>
          <p>{monster.email}</p>
        </div>
       ))}
      </div>
    )
  }
}

export default CardList;