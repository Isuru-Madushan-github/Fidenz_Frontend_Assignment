import Card from './Card';
import './Cards.css'

const Cards = ({ cityList }) => {

  return (
    <ul className="cards">
      {cityList?.map((city,index) => (
        <Card key={index} city={city}/>
      ))}
    </ul>
  );
};

export default Cards;
