import { useState } from "react";
import Screen01 from "./components/Screen01";
import Screen03 from "./components/Screen03";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"screen01" | "screen03">("screen01");
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 12)); // 12 Января 2026
  const [name, setName] = useState("");

  const handleScreen01Next = () => {
    setCurrentScreen("screen03");
  };

  const handleScreen03Next = () => {
    // Здесь можно добавить логику перехода на следующий экран
    console.log("Completed onboarding with:", { date: selectedDate, name });
  };

  return (
    <div className="h-screen w-full max-w-[428px] mx-auto overflow-hidden">
      {currentScreen === "screen01" && (
        <Screen01
          onNext={handleScreen01Next}
          onDateChange={setSelectedDate}
          selectedDate={selectedDate}
        />
      )}
      {currentScreen === "screen03" && (
        <Screen03
          onNext={handleScreen03Next}
          onNameChange={setName}
          name={name}
        />
      )}
    </div>
  );
}