import { useState } from "react";
import { Link } from "react-router-dom";

export default function BookPage() {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("Wedding");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");

const handleBook = () => {
  const message = `🌸✨ New Photoshoot Booking ✨🌸

📸 Customer Details
👤 Name: ${name || "Not Provided"}

🎭 Session Details
📌 Event: ${event}
📅 Date: ${date || "Not Selected"}
⏰ Start Time: ${startTime || "Not Selected"}

💌 Request
Please share availability, pricing & confirm booking.

🌷 Thank you,
PinkPhotography Studio 💛`;

  const url = "https://wa.me/916374234058?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-yellow-50 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border border-yellow-200">

        {/* 📌 BACK BUTTON (PLACE: TOP OF FORM) */}
        <Link
          to="/"
          className="inline-block mb-6 text-[#d63384] font-semibold hover:underline"
        >
          ← Back to Home
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-[#d63384] text-center mb-6">
          Book Your Photoshoot 📸
        </h1>

        {/* NAME */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-xl mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* EVENT */}
        <select
          className="w-full p-3 border rounded-xl mb-4"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        >
          <option>Wedding</option>
          <option>Pre Wedding</option>
          <option>Baby Shoot</option>
          <option>Birthday</option>
	  <option>Maternity Shoot</option>
	  <option>Ear Piercing</option>
	  <option>Puberty Ceremony</option>
	  <option>House warming</option>
	  <option>Engagement</option>
	  <option>Reception</option>
        </select>

        {/* DATE */}
        <input
          type="date"
          className="w-full p-3 border rounded-xl mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* ⏰ START TIME (NEW FIELD - ADD HERE) */}
        <input
          type="time"
          className="w-full p-3 border rounded-xl mb-6"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        {/* SUBMIT BUTTON */}
        <button
  onClick={handleBook}
  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl shadow-lg"
>
  Send on WhatsApp 📲
</button>

        {/* CANCEL BUTTON */}
        <Link
          to="/"
          className="w-full block text-center mt-4 text-gray-600 hover:text-black"
        >
          Cancel & Go Home
        </Link>

      </div>
    </div>
  );
}
