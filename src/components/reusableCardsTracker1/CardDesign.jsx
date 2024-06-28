
import imagesTracker1 from "../../utils/images/imagesTracker1.js";
import reusableCardsImage from "../../utils/images/imagesTracker1.js";
import ReusableCards from "./ReusableCards.jsx";
import "../../components/reusableCardsTracker1/reusableCards.css"

const List = () => {
  const infoCard = [
    { icon: imagesTracker1.covidBlueDark, label: 'Total Confirmed', value: '374111576', color: "#3639AE" },
    { icon: imagesTracker1.covidRed, label: 'Total Deaths', value: '4', color: '#ff0000' },
    { icon: imagesTracker1.covidGreen, label: 'Total Recovered', value: '3', color: '#82c519' },
    { icon: imagesTracker1.covidBlue, label: 'Total Active', value: '2', color: "#2c6dff"},
    { icon: imagesTracker1.covidOrange, label: 'New Cases', value: '1', color: '#ff6a07' },
    { icon: imagesTracker1.covidRedDark, label: 'New Deaths', value: '0', color: '#b70202' }
   
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
export default List;
