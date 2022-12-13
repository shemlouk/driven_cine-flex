import { useState } from "react";
import SeatButton from "./SeatButton";

export default function Seat({
  id,
  name,
  isAvailable,
  selectedSeats,
  setSelectedSeats,
}) {
  const [isSelected, setIsSelected] = useState(false);

  const selectSeat = () => {
    setIsSelected(true);
    setSelectedSeats([...selectedSeats, { id, name }]);
  };

  const unselectSeat = () => {
    setIsSelected(false);
    setSelectedSeats(selectedSeats.filter((s) => s.id !== id));
  };

  return (
    <li>
      <SeatButton
        data-test="seat"
        onClick={() => {
          if (!isAvailable) {
            alert("Esse assento não está disponível");
            return;
          }
          isSelected ? unselectSeat() : selectSeat();
        }}
        state={() => {
          if (!isAvailable) return "unavailable";
          return isSelected ? "selected" : "available";
        }}
      >
        {name}
      </SeatButton>
    </li>
  );
}
