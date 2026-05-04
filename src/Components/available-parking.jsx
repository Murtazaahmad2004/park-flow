import React, { useState } from  "react";
import "./styling/available-parking.css";

const slotsData = Array.from({ length: 5} , (_, i) => ({
  id: i + 1,
}));

const AvailableParking = () => {
  const [slots, setsolts] = useState(slotsData);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelect = (slot) => {
    if(slot.status === "booked") return;
    setSelectedSlot(slot.id);
  };

  const confirmBooking = () => {
    if(!selectedSlot) return;
    setsolts((prev) =>
      prev.map((slot) =>
        slot.id === selectedSlot ? { ...slot, ststus: "booked"} : slot
      ) 
    );
    setSelectedSlot(null);
  };

  const getSlotClass = (slot) => {
    if(slot.ststus === "booked") return "slot booked";
    if(selectedSlot === slots.id) return "slot selected";
    return "slot available";
  };

  return (
    <div className="parking-container">
      <h2>Parking Slots</h2>
      
      <div className="slots-grid">
        {slots.map((slot) => (
          <div
            key={slot.id}
            onClick={() => handleSelect(slot)}
            className={getSlotClass(slot)}
          >
            Slot {slot.id}
          </div>
        ))}
      </div>

      {selectedSlot && (
        <div className="info">
          Selected Slot: <b>{selectedSlot}</b>
          <button onClick={confirmBooking}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
};
export default AvailableParking;