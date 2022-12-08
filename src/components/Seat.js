import SeatButton from "./SeatButton";

export default function Seat({
  id,
  name,
  isAvailable,
  selectedSeats,
  setSelectedSeats,
}) {
  const isSelected = selectedSeats.includes(id);

  function selectSeat() {
    if (!isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }
    if (!isSelected) {
      setSelectedSeats([...selectedSeats, id]);
      return;
    }
    const index = selectedSeats.indexOf(id);
    const newList = [...selectedSeats];
    newList.splice(index, 1);
    setSelectedSeats(newList);
  }

  function selectColor() {
    if (isSelected) return "selected";
    if (isAvailable) return "available";
    return "unavailable";
  }

  return (
    <li>
      <SeatButton onClick={() => selectSeat()} color={selectColor()}>
        {name}
      </SeatButton>
    </li>
  );
}
