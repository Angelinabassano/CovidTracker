import Tracer1Images from "../../utils/images/imagesTracker1.js";
import ReusableCards from "./ReusableCards.jsx";
import "../../components/reusableCardsTracker1/reusableCards.css"

const List2 = () => {
  const infoCard = [
    { icon: Tracer1Images.covidBlueDark, label: 'Total Cases', value: '374111576', color: "#3639AE" },
    { icon: Tracer1Images.covidRed, label: 'Total Deaths', value: '4', color: '#ff0000' },
    { icon: Tracer1Images.covidGreen, label: 'Total Recovered', value: '3', color: '#82c519' },
    { icon: Tracer1Images.covidBlue, label: 'Total Active', value: '2', color: "#2c6dff"},
    { icon: Tracer1Images.covidOrange, label: 'New Cases', value: '1', color: '#ff6a07' },
    { icon: Tracer1Images.covidRedark, label: 'New Deaths', value: '0', color: '#b70202' }
   
  ];
  return (
    <div className="cardsContainer">
      {infoCard.map((infoCard, index) => (
        <ReusableCards
          key={index}
          icon={infoCard.icon}
          label={infoCard.label}
          value={infoCard.value}
          color={infoCard.color}
        />
      ))}
    </div>
  );
};
export default List2;
