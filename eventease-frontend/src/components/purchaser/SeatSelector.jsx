function SeatSelector({ seats, onSelect }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {seats.map((seat) => (
        <button
          key={seat.id}
          disabled={!seat.available}
          onClick={() => onSelect(seat.id)}
          className={`p-2 rounded ${
            seat.available
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          } transition`}
        >
          {seat.id}
        </button>
      ))}
    </div>
  );
}

export default SeatSelector;