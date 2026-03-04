import { useState } from "react";
import { useTelegramMainButton, useHapticFeedback, useTelegram } from "../hooks/useTelegram";

interface Screen02Props {
  onNext: () => void;
  onGenderChange: (gender: "boy" | "girl") => void;
  selectedGender: "boy" | "girl" | null;
}

function StatusBar() {
  return (
    <div className="absolute left-0 top-0 w-full px-5 py-3 flex justify-between items-center text-white text-sm">
      <span className="font-semibold">9:41</span>
      <div className="flex gap-2 items-center">
        <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 16 11">
          <path d="M0 3.04C4.33-1.01 11 -1.01 15.33 3.04L14.08 4.67C10.03 1.14 5.44 1.14 1.69 4.67L0 3.04ZM2.77 5.73C5.53 3.17 9.8 3.17 12.56 5.73L11.41 7.36C8.89 5.09 5.45 5.09 2.77 7.36V5.73ZM5.45 8.43C6.73 7.34 8.61 7.34 9.89 8.43L7.67 11L5.45 8.43Z"/>
        </svg>
        <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 17 11">
          <path d="M2 6.5H1C0.45 6.5 0 6.95 0 7.5V9.5C0 10.05 0.45 10.5 1 10.5H2C2.55 10.5 3 10.05 3 9.5V7.5C3 6.95 2.55 6.5 2 6.5ZM6.5 4.5H5.5C4.95 4.5 4.5 4.95 4.5 5.5V9.5C4.5 10.05 4.95 10.5 5.5 10.5H6.5C7.05 10.5 7.5 10.05 7.5 9.5V5.5C7.5 4.95 7.05 4.5 6.5 4.5ZM11 2H10C9.45 2 9 2.46 9 3.02V9.48C9 10.04 9.45 10.5 10 10.5H11C11.55 10.5 12 10.04 12 9.48V3.02C12 2.46 11.55 2 11 2ZM15.5 0H14.5C13.95 0 13.5 0.44 13.5 0.98V9.52C13.5 10.06 13.95 10.5 14.5 10.5H15.5C16.05 10.5 16.5 10.06 16.5 9.52V0.98C16.5 0.44 16.05 0 15.5 0Z"/>
        </svg>
        <svg className="w-6 h-3" fill="none" viewBox="0 0 24 12">
          <rect x="1" y="1" width="18" height="9" rx="2" stroke="currentColor" strokeOpacity="0.35"/>
          <rect x="2" y="3" width="15" height="5" rx="1" fill="currentColor"/>
          <path d="M20 3C20.8 3.34 21.33 4.13 21.33 5C21.33 5.87 20.8 6.66 20 7V3Z" fill="currentColor" fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute left-[34px] top-[93px] w-[370px]">
      <div className="h-[6px] w-full bg-gradient-to-r from-purple-300/50 via-purple-200/50 to-purple-100/50 rounded-full"/>
      <div className="absolute top-0 left-0 h-[6px] w-[91px] bg-gradient-to-r from-purple-400 to-purple-300 rounded-full"/>
    </div>
  );
}

export default function Screen02({ onNext, onGenderChange, selectedGender }: Screen02Props) {
  const hapticFeedback = useHapticFeedback();
  const { tg } = useTelegram();

  // Use Telegram MainButton (disabled when gender is not selected)
  useTelegramMainButton("Далее", () => {
    hapticFeedback.light?.();
    onNext();
  }, selectedGender !== null);

  const handleGenderSelect = (gender: "boy" | "girl") => {
    hapticFeedback.selection?.();
    onGenderChange(gender);
  };

  return (
    <div className="bg-[#191838] relative w-full h-screen overflow-hidden">
      <StatusBar />
      
      <h1 className="absolute left-1/2 -translate-x-1/2 top-[178px] w-[345px] text-white text-[32px] text-center font-medium leading-tight">
        Мальчик или девочка?
      </h1>
      
      <p className="absolute left-1/2 -translate-x-1/2 top-[284px] w-[345px] text-[#8483a8] text-[17px] text-center">
        Это поможет нам персонализировать опыт ✨
      </p>
      
      <Slider />
      
      {/* Gender Selection Cards */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[400px] flex gap-4">
        {/* Boy Card */}
        <button
          onClick={() => handleGenderSelect("boy")}
          className={`
            w-[180px] h-[200px] rounded-[20px] flex flex-col items-center justify-center
            transition-all duration-300 cursor-pointer
            ${selectedGender === "boy" 
              ? 'bg-[#6b9eff] shadow-lg shadow-blue-500/30 scale-105' 
              : 'bg-[#252352] hover:bg-[#2d2a5d]'
            }
          `}
        >
          <div className={`text-[60px] mb-4 transition-transform ${selectedGender === "boy" ? 'scale-110' : ''}`}>
            👶🏻
          </div>
          <span className="text-white text-[20px] font-medium">Мальчик</span>
        </button>

        {/* Girl Card */}
        <button
          onClick={() => handleGenderSelect("girl")}
          className={`
            w-[180px] h-[200px] rounded-[20px] flex flex-col items-center justify-center
            transition-all duration-300 cursor-pointer
            ${selectedGender === "girl" 
              ? 'bg-[#ff8fb3] shadow-lg shadow-pink-500/30 scale-105' 
              : 'bg-[#252352] hover:bg-[#2d2a5d]'
            }
          `}
        >
          <div className={`text-[60px] mb-4 transition-transform ${selectedGender === "girl" ? 'scale-110' : ''}`}>
            👧🏻
          </div>
          <span className="text-white text-[20px] font-medium">Девочка</span>
        </button>
      </div>

      {/* Fallback button for non-Telegram environment */}
      {!tg && (
        <button
          className={`absolute left-[121px] top-[830px] w-[186px] h-[72px] rounded-[36px] flex items-center justify-center cursor-pointer transition-colors ${
            selectedGender !== null
              ? 'bg-[#babbff] hover:bg-[#cacbff]'
              : 'bg-[#6d6d8e] cursor-not-allowed'
          }`}
          onClick={() => {
            if (selectedGender !== null) {
              hapticFeedback.light?.();
              onNext();
            }
          }}
          disabled={selectedGender === null}
        >
          <span className="text-[#0f0f1a] text-[17px] font-medium">
            Далее
          </span>
        </button>
      )}
    </div>
  );
}
