import React from "react"
import "../../components/reusableCardsTracker1/reusableCards.css"


const ReusableCards = ({ icon, label, value, color }) => {
  return (
    <div className="reusableCardsContainer">
    <div className="card">
      <div className="info" >
        <h5 className="label">{label}</h5>
        <h3 className="value" style={{ color: color }}>{value}</h3>
      </div> 
      <div className="icon">
        <img className="imgIcon" src={icon} alt={label} /> 
      </div>
    </div>
    </div>
  );
};
export default ReusableCards;