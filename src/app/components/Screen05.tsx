import { useTelegramMainButton, useHapticFeedback, useTelegram } from "../hooks/useTelegram";
import { useEffect } from "react";

interface Screen05Props {
  onComplete: () => void;
  name: string;
  avatar: string;
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
      <div className="h-[6px] w-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full"/>
    </div>
  );
}

export default function Screen05({ onComplete, name, avatar }: Screen05Props) {
  const hapticFeedback = useHapticFeedback();
  const { tg } = useTelegram();

  // Trigger success haptic on mount
  useEffect(() => {
    hapticFeedback.success?.();
  }, []);

  // Use Telegram MainButton
  useTelegramMainButton("Начать", () => {
    hapticFeedback.heavy?.();
    onComplete();
  }, true);

  return (
    <div className="bg-[#191838] relative w-full h-screen overflow-hidden">
      <StatusBar />
      
      <Slider />
      
      {/* Celebration Icon */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[200px] text-[100px] animate-bounce">
        🎉
      </div>

      {/* Avatar Circle */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[340px] w-[140px] h-[140px] bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
        <span className="text-[80px]">{avatar}</span>
      </div>
      
      <h1 className="absolute left-1/2 -translate-x-1/2 top-[510px] w-[345px] text-white text-[36px] text-center font-medium leading-tight">
        Все готово!
      </h1>
      
      <p className="absolute left-1/2 -translate-x-1/2 top-[590px] w-[345px] text-[#babbff] text-[22px] text-center font-medium">
        {name}
      </p>
      
      <p className="absolute left-1/2 -translate-x-1/2 top-[640px] w-[345px] text-[#8483a8] text-[17px] text-center leading-relaxed">
        Теперь вы можете отслеживать сны и развитие вашего малыша 💫
      </p>

      {/* Decorative elements */}
      <div className="absolute left-[50px] top-[320px] text-[40px] opacity-50 animate-pulse">
        ✨
      </div>
      <div className="absolute right-[50px] top-[350px] text-[40px] opacity-50 animate-pulse" style={{ animationDelay: "0.5s" }}>
        🌟
      </div>
      <div className="absolute left-[70px] top-[480px] text-[30px] opacity-30 animate-pulse" style={{ animationDelay: "1s" }}>
        💫
      </div>
      <div className="absolute right-[60px] top-[500px] text-[30px] opacity-30 animate-pulse" style={{ animationDelay: "1.5s" }}>
        ⭐
      </div>

      {/* Fallback button for non-Telegram environment */}
      {!tg && (
        <button
          className="absolute left-[121px] top-[830px] w-[186px] h-[72px] bg-[#babbff] rounded-[36px] flex items-center justify-center cursor-pointer hover:bg-[#cacbff] transition-colors shadow-lg shadow-purple-400/50"
          onClick={() => {
            hapticFeedback.heavy?.();
            onComplete();
          }}
        >
          <span className="text-[#0f0f1a] text-[17px] font-medium">
            Начать
          </span>
        </button>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}
