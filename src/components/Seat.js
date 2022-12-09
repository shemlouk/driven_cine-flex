import SeatButton from "./SeatButton";

export default function Seat({
  id,
  name,
  isAvailable,
  selectedSeats,
  setSelectedSeats,
}) {
  const isSelected = selectedSeats.find((e) => e.id === id);

  function selectSeat() {
    if (!isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }
    if (!isSelected) {
      setSelectedSeats([...selectedSeats, { id: id, name: name }]);
      return;
    }
    const newList = selectedSeats.filter((s) => s.id !== id);
    setSelectedSeats(newList);
  }

  function selectColor() {
    if (isSelected) return "selected";
    if (isAvailable) return "available";
    return "unavailable";
  }

  return (
    <li>
      <SeatButton
        data-test="seat"
        onClick={() => selectSeat()}
        color={selectColor()}
      >
        {name}
      </SeatButton>
    </li>
  );
}
