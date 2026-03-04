import { useTelegram, useHapticFeedback } from "../hooks/useTelegram";

interface DashboardProps {
  name: string;
  birthDate: Date;
  gender: "boy" | "girl" | null;
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

export default function Dashboard({ name, birthDate, gender, avatar }: DashboardProps) {
  const { user } = useTelegram();
  const hapticFeedback = useHapticFeedback();

  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    const birth = new Date(birthDate);
    
    const years = today.getFullYear() - birth.getFullYear();
    const months = today.getMonth() - birth.getMonth();
    const days = today.getDate() - birth.getDate();
    
    let ageMonths = years * 12 + months;
    let ageDays = days;
    
    if (ageDays < 0) {
      ageMonths--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += lastMonth.getDate();
    }
    
    if (ageMonths < 12) {
      return `${ageMonths} мес. ${ageDays} дн.`;
    } else {
      const y = Math.floor(ageMonths / 12);
      const m = ageMonths % 12;
      return `${y} ${y === 1 ? 'год' : 'года'} ${m} мес.`;
    }
  };

  const formatDate = (date: Date) => {
    const monthNames = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div className="bg-[#191838] relative w-full min-h-screen overflow-y-auto pb-20">
      <StatusBar />
      
      {/* Header */}
      <div className="px-5 pt-16">
        <h2 className="text-[#8483a8] text-[15px] mb-2">
          Привет, {user?.first_name || "родитель"}! 👋
        </h2>
        <h1 className="text-white text-[28px] font-semibold">
          Главная
        </h1>
      </div>

      {/* Baby Profile Card */}
      <div className="mx-5 mt-6 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-[24px] p-6 backdrop-blur-sm border border-purple-400/20">
        <div className="flex items-center gap-4">
          <div className={`w-[80px] h-[80px] rounded-full flex items-center justify-center ${
            gender === 'boy' ? 'bg-blue-500/30' : gender === 'girl' ? 'bg-pink-500/30' : 'bg-purple-500/30'
          }`}>
            <span className="text-[50px]">{avatar}</span>
          </div>
          
          <div className="flex-1">
            <h3 className="text-white text-[24px] font-semibold mb-1">{name}</h3>
            <p className="text-[#babbff] text-[15px]">{calculateAge(birthDate)}</p>
            <p className="text-[#8483a8] text-[13px] mt-1">
              {formatDate(birthDate)}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-5 mt-6">
        <h2 className="text-white text-[20px] font-semibold mb-4">Статистика</h2>
        
        <div className="grid grid-cols-2 gap-3">
          {/* Sleep Card */}
          <button
            onClick={() => hapticFeedback.light?.()}
            className="bg-[#252352] rounded-[16px] p-4 text-left hover:bg-[#2d2a5d] transition-colors"
          >
            <div className="text-[32px] mb-2">😴</div>
            <div className="text-white text-[16px] font-medium mb-1">Сны</div>
            <div className="text-[#8483a8] text-[13px]">Скоро</div>
          </button>

          {/* Growth Card */}
          <button
            onClick={() => hapticFeedback.light?.()}
            className="bg-[#252352] rounded-[16px] p-4 text-left hover:bg-[#2d2a5d] transition-colors"
          >
            <div className="text-[32px] mb-2">📊</div>
            <div className="text-white text-[16px] font-medium mb-1">Рост</div>
            <div className="text-[#8483a8] text-[13px]">Скоро</div>
          </button>

          {/* Feeding Card */}
          <button
            onClick={() => hapticFeedback.light?.()}
            className="bg-[#252352] rounded-[16px] p-4 text-left hover:bg-[#2d2a5d] transition-colors"
          >
            <div className="text-[32px] mb-2">🍼</div>
            <div className="text-white text-[16px] font-medium mb-1">Кормление</div>
            <div className="text-[#8483a8] text-[13px]">Скоро</div>
          </button>

          {/* Milestones Card */}
          <button
            onClick={() => hapticFeedback.light?.()}
            className="bg-[#252352] rounded-[16px] p-4 text-left hover:bg-[#2d2a5d] transition-colors"
          >
            <div className="text-[32px] mb-2">🎯</div>
            <div className="text-white text-[16px] font-medium mb-1">Вехи</div>
            <div className="text-[#8483a8] text-[13px]">Скоро</div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-5 mt-6 mb-8">
        <h2 className="text-white text-[20px] font-semibold mb-4">Последняя активность</h2>
        
        <div className="bg-[#252352] rounded-[16px] p-5">
          <div className="flex items-center justify-center flex-col py-8">
            <div className="text-[50px] mb-3 opacity-50">💫</div>
            <p className="text-[#8483a8] text-[15px] text-center">
              Пока нет активности
            </p>
            <p className="text-[#6d6d8e] text-[13px] text-center mt-1">
              Начните отслеживать сны и развитие
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
