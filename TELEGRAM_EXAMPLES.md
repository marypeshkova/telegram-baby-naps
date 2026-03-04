# 📖 Примеры использования Telegram SDK

## Получение данных пользователя

```tsx
import { useTelegram } from './hooks/useTelegram';

function MyComponent() {
  const { user } = useTelegram();
  
  return (
    <div>
      <p>Привет, {user?.first_name}!</p>
      <p>ID: {user?.id}</p>
      <p>Username: @{user?.username}</p>
    </div>
  );
}
```

## Использование MainButton

```tsx
import { useTelegramMainButton } from './hooks/useTelegram';

function MyComponent() {
  const [isValid, setIsValid] = useState(false);
  
  // MainButton автоматически появится внизу экрана
  useTelegramMainButton(
    "Продолжить",          // Текст кнопки
    () => {                // Обработчик клика
      console.log("Clicked!");
    },
    isValid                // Активна ли кнопка (опционально)
  );
  
  return <div>Content</div>;
}
```

## Использование BackButton

```tsx
import { useTelegramBackButton } from './hooks/useTelegram';

function MyComponent() {
  const navigate = useNavigate();
  
  // BackButton появится слева вверху
  useTelegramBackButton(
    () => navigate(-1),   // Обработчик
    true                  // Показать кнопку
  );
  
  return <div>Content</div>;
}
```

## Haptic Feedback (вибрация)

```tsx
import { useHapticFeedback } from './hooks/useTelegram';

function MyComponent() {
  const haptic = useHapticFeedback();
  
  return (
    <div>
      <button onClick={() => haptic.light?.()}>
        Легкая вибрация
      </button>
      
      <button onClick={() => haptic.medium?.()}>
        Средняя вибрация
      </button>
      
      <button onClick={() => haptic.heavy?.()}>
        Сильная вибрация
      </button>
      
      <button onClick={() => haptic.success?.()}>
        Успех ✅
      </button>
      
      <button onClick={() => haptic.error?.()}>
        Ошибка ❌
      </button>
      
      <button onClick={() => haptic.selection?.()}>
        Выбор элемента
      </button>
    </div>
  );
}
```

## Тема Telegram

```tsx
import { useTelegram } from './hooks/useTelegram';

function MyComponent() {
  const { colorScheme, themeParams } = useTelegram();
  
  return (
    <div 
      style={{
        backgroundColor: themeParams.bg_color,
        color: themeParams.text_color,
      }}
    >
      <p>Текущая тема: {colorScheme}</p>
      <button style={{ 
        backgroundColor: themeParams.button_color,
        color: themeParams.button_text_color 
      }}>
        Кнопка в стиле Telegram
      </button>
    </div>
  );
}
```

## Закрытие приложения

```tsx
import { useTelegram } from './hooks/useTelegram';

function MyComponent() {
  const { tg } = useTelegram();
  
  const handleComplete = () => {
    // Ваша логика
    
    // Закрыть Mini App
    tg?.close();
  };
  
  return <button onClick={handleComplete}>Завершить</button>;
}
```

## Отправка данных в бота

```tsx
// В будущем можно добавить отправку данных боту через:
// tg.sendData(JSON.stringify(data));
// 
// Но для этого нужно настроить обработчик в боте
```

## Проверка окружения

```tsx
import { useTelegram } from './hooks/useTelegram';

function MyComponent() {
  const { tg } = useTelegram();
  
  if (!tg) {
    return <div>Откройте приложение в Telegram</div>;
  }
  
  return <div>Работает в Telegram! ✅</div>;
}
```
