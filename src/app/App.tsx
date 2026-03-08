import { useState } from "react";
import Screen01 from "./components/Screen01";
import Screen02 from "./components/Screen02";
import Screen03 from "./components/Screen03";
import Screen04 from "./components/Screen04";
import Screen05 from "./components/Screen05";
import Dashboard from "./components/Dashboard";
import { useTelegram } from "./hooks/useTelegram";

type ScreenType = "screen01" | "screen02" | "screen03" | "screen04" | "screen05" | "dashboard";

export default function App() {
  const { user, tg } = useTelegram();
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("screen01");
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 12)); // 12 Января 2026
  const [selectedGender, setSelectedGender] = useState<"boy" | "girl" | null>(null);
  const [name, setName] = useState(user?.first_name || "");
  const [avatar, setAvatar] = useState("👶");

  const handleScreen01Next = () => {
    setCurrentScreen("screen02");
  };

  const handleScreen02Next = () => {
    setCurrentScreen("screen03");
  };

  const handleScreen03Next = () => {
    setCurrentScreen("screen04");
  };

  const handleScreen04Next = () => {
    setCurrentScreen("screen05");
  };

  const handleComplete = () => {
    console.log("Completed onboarding with:", { 
      date: selectedDate, 
      gender: selectedGender,
      name, 
      avatar 
    });
    setCurrentScreen("dashboard");
  };

  return (
    <div className="h-screen w-full max-w-[428px] mx-auto overflow-hidden relative">
      {currentScreen === "screen01" && (
        <div className="absolute inset-0 animate-fadeIn">
          <Screen01
            onNext={handleScreen01Next}
            onDateChange={setSelectedDate}
            selectedDate={selectedDate}
          />
        </div>
      )}
      {currentScreen === "screen02" && (
        <div className="absolute inset-0 animate-fadeIn">
          <Screen02
            onNext={handleScreen02Next}
            onGenderChange={setSelectedGender}
            selectedGender={selectedGender}
          />
        </div>
      )}
      {currentScreen === "screen03" && (
        <div className="absolute inset-0 animate-fadeIn">
          <Screen03
            onNext={handleScreen03Next}
            onNameChange={setName}
            name={name}
          />
        </div>
      )}
      {currentScreen === "screen04" && (
        <div className="absolute inset-0 animate-fadeIn">
          <Screen04
            onNext={handleScreen04Next}
            onAvatarChange={setAvatar}
            selectedAvatar={avatar}
          />
        </div>
      )}
      {currentScreen === "screen05" && (
        <div className="absolute inset-0 animate-fadeIn">
          <Screen05
            onComplete={handleComplete}
            name={name}
            avatar={avatar}
          />
        </div>
      )}
      {currentScreen === "dashboard" && (
        <div className="absolute inset-0 animate-fadeIn">
          <Dashboard
            name={name}
            birthDate={selectedDate}
            gender={selectedGender}
            avatar={avatar}
          />
        </div>
      )}
    </div>
  );
}