import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const pageTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30
  };

  return (
    <div className="h-screen w-full max-w-[428px] mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === "screen01" && (
          <motion.div
            key="screen01"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute inset-0"
          >
            <Screen01
              onNext={handleScreen01Next}
              onDateChange={setSelectedDate}
              selectedDate={selectedDate}
            />
          </motion.div>
        )}
        {currentScreen === "screen02" && (
          <motion.div
            key="screen02"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute inset-0"
          >
            <Screen02
              onNext={handleScreen02Next}
              onGenderChange={setSelectedGender}
              selectedGender={selectedGender}
            />
          </motion.div>
        )}
        {currentScreen === "screen03" && (
          <motion.div
            key="screen03"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute inset-0"
          >
            <Screen03
              onNext={handleScreen03Next}
              onNameChange={setName}
              name={name}
            />
          </motion.div>
        )}
        {currentScreen === "screen04" && (
          <motion.div
            key="screen04"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute inset-0"
          >
            <Screen04
              onNext={handleScreen04Next}
              onAvatarChange={setAvatar}
              selectedAvatar={avatar}
            />
          </motion.div>
        )}
        {currentScreen === "screen05" && (
          <motion.div
            key="screen05"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute inset-0"
          >
            <Screen05
              onComplete={handleComplete}
              name={name}
              avatar={avatar}
            />
          </motion.div>
        )}
        {currentScreen === "dashboard" && (
          <motion.div
            key="dashboard"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="absolute inset-0"
          >
            <Dashboard
              name={name}
              birthDate={selectedDate}
              gender={selectedGender}
              avatar={avatar}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
