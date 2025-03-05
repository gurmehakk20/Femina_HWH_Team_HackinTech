import React, { useState } from "react";
import { Card, CardContent } from "../Components/Card";
import Slider from "../Components/Slider";
import { Select, SelectItem } from "../Components/Select";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../Styles/PeriodTracker.css'
import dayjs from "dayjs";
import Button from "../Components/Button"; // Import the button

const PeriodTracker = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [flow, setFlow] = useState("");
  const [mood, setMood] = useState("");
  const [pain, setPain] = useState(0);
  const [hadSex, setHadSex] = useState("");
  const [isPeriod, setIsPeriod] = useState(false);

  const expectedDates = ["2025-03-20", "2025-03-21", "2025-03-22"]; // Example dates
  const ovulationDates = ["2025-03-15", "2025-03-16"]; // Example ovulation dates

  const handleDateChange = (value) => {
    setSelectedDate(dayjs(value).format("YYYY-MM-DD"));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">Period Tracker</h1>

      {/* Toggle for Period */}
      <div className="mb-4 flex justify-center items-center">
        <label className="mr-2">Is Period?</label>
        <button
          className="bg-gray-200 px-4 py-2 rounded-md text-sm"
          onClick={() => setIsPeriod(!isPeriod)}
        >
          {isPeriod ? "Yes" : "No"}
        </button>
      </div>

      {/* Calendar with Highlighted Dates */}
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => {
          const formattedDate = dayjs(date).format("YYYY-MM-DD");
          return view === "month" && (expectedDates.includes(formattedDate) || formattedDate === selectedDate)
            ? "bg-pink-200 border-2 border-pink-500 rounded-full animate-pulse"
            : "";
        }}
      />

      {selectedDate && (
        <Card className="mt-4 p-4 shadow-lg">
          <CardContent>
            <h2 className="text-lg font-semibold text-center mb-3">
              Tracking for {selectedDate}
            </h2>

            {/* Flow Dropdown */}
            {isPeriod && (
              <div className="mt-3">
                <label className="block text-sm font-medium">Flow Type</label>
                <Select value={flow} onChange={(e) => setFlow(e.target.value)}>
                  <SelectItem value="heavy">Heavy</SelectItem>
                  <SelectItem value="very-heavy">Very Heavy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="spotting">Spotting</SelectItem>
                </Select>
              </div>
            )}

            {/* Mood Dropdown */}
            <div className="mt-3">
              <label className="block text-sm font-medium">Mood</label>
              <Select value={mood} onChange={(e) => setMood(e.target.value)}>
                <SelectItem value="happy">Happy</SelectItem>
                <SelectItem value="sad">Sad</SelectItem>
                <SelectItem value="irritated">Irritated</SelectItem>
                <SelectItem value="anxious">Anxious</SelectItem>
              </Select>
            </div>

            {/* Pain Level Slider */}
            <div className="mt-3">
              <label className="block text-sm font-medium">Pain Level</label>
              <Slider value={pain} onChange={setPain} min={0} max={10} step={1} />
            </div>

            {/* Had Sex Dropdown */}
            <div className="mt-3">
              <label className="block text-sm font-medium">Had Sex?</label>
              <Select value={hadSex} onChange={(e) => setHadSex(e.target.value)}>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="protected">Yes, Protected</SelectItem>
                <SelectItem value="unprotected">Yes, Unprotected</SelectItem>
              </Select>
            </div>

            {/* Ovulation Dates */}
            {isPeriod && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-center">Expected Ovulation Dates:</h3>
                <ul className="text-sm text-center">
                  {ovulationDates.map((date) => (
                    <li key={date} className="text-pink-600">{date}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Update Button */}
            <div className="mt-4 text-center">
              <Button className="w-full">Update Data</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PeriodTracker;
