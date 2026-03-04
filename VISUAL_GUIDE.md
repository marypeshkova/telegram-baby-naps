# 🎨 Визуальный гайд

## Прогресс онбординга

```
Screen01: [███░░░░░░░] 16%  - Дата рождения
Screen02: [████░░░░░░] 25%  - Пол
Screen03: [██████░░░░] 34%  - Имя  
Screen04: [████████░░] 43%  - Аватар
Screen05: [██████████] 100% - Финал
Dashboard: Онбординг завершен
```

---

## Цветовая палитра

### Основные цвета
```css
#191838  /* Темно-фиолетовый фон */
#252352  /* Карточки/элементы */
#babbff  /* Акцентный (кнопки) */
#8483a8  /* Второстепенный текст */
#ffffff  /* Основной текст */
```

### Градиенты
```css
/* Прогресс-бар (фон) */
from-purple-300/50 via-purple-200/50 to-purple-100/50

/* Прогресс-бар (заполнение) */
from-purple-400 to-purple-300

/* Карточка профиля */
from-purple-500/20 to-purple-700/20
```

### Цвета по полу
```css
/* Мальчик */
#6b9eff  /* Синий */
bg-blue-500/30

/* Девочка */
#ff8fb3  /* Розовый */
bg-pink-500/30
```

---

## Типографика

### Заголовки
```css
font-size: 32px
font-weight: 500 (medium)
color: #ffffff
line-height: tight
text-align: center
```

### Подзаголовки
```css
font-size: 17px
font-weight: 400 (regular)
color: #8483a8
text-align: center
```

### Кнопки
```css
font-size: 17px
font-weight: 500 (medium)
color: #0f0f1a
```

### Dashboard заголовки
```css
font-size: 28px
font-weight: 600 (semibold)
color: #ffffff
```

---

## Размеры элементов

### Прогресс-бар
```
Ширина: 370px
Высота: 6px
Позиция: top-[93px], left-[34px]
Border-radius: full (pill)
```

### Кнопки
```
Ширина: 186px
Высота: 72px
Border-radius: 36px (полностью скругленная)
```

### Карточки выбора
```
Ширина: 180px (Screen02)
Высота: 200px (Screen02)
Border-radius: 20px
```

### Поля ввода
```
Ширина: 387px
Высота: 78px
Border-radius: 12px
Padding: 20px
```

---

## Анимации

### Переходы экранов
```typescript
// Motion variants
initial: { opacity: 0, x: 50 }
animate: { opacity: 1, x: 0 }
exit: { opacity: 0, x: -50 }

// Transition
type: "spring"
stiffness: 300
damping: 30
```

### Hover эффекты
```css
transition: colors 200ms
hover:bg-[#2d2a5d]  /* Для карточек */
hover:bg-[#cacbff]  /* Для кнопок */
```

### Выбор элемента
```css
scale-105  /* Увеличение */
shadow-lg  /* Тень */
```

### Screen05 анимации
```css
/* Bounce (🎉) */
@keyframes bounce {
  0%, 100%: translateY(0)
  50%: translateY(-20px)
}

/* Pulse (звезды) */
@keyframes pulse {
  0%, 100%: opacity 0.3
  50%: opacity 0.7
}
```

---

## Иконки и эмодзи

### Эмодзи размеры
```css
/* Выбор пола */
font-size: 60px

/* Аватар большой (превью) */
font-size: 70px

/* Аватар в сетке */
font-size: 28px

/* Аватар в Dashboard */
font-size: 50px

/* Финальный экран */
font-size: 100px (празднование)
font-size: 80px (аватар)
```

---

## Структура экрана

```
┌─────────────────────────────────┐
│ StatusBar (9:41, сигналы)       │ ← Всегда вверху
├─────────────────────────────────┤
│                                 │
│     Progress Bar (93px)         │ ← Прогресс
│                                 │
│                                 │
│     Заголовок (178px)           │ ← Главный текст
│                                 │
│     Подзаголовок (284px)        │ ← Описание
│                                 │
│                                 │
│     Контент (400-710px)         │ ← Основной контент
│     (календарь/карточки/input)  │
│                                 │
│                                 │
│     Кнопка/MainButton           │ ← Внизу
│     (830px или Telegram)        │
│                                 │
└─────────────────────────────────┘
```

---

## Эффекты

### Blur эффект (календарь)
```css
backdrop-filter: blur(8px)
background: rgba(0, 0, 0, 0.4)
```

### Тени
```css
/* Выбранная карточка */
shadow-lg shadow-blue-500/30   /* Мальчик */
shadow-lg shadow-pink-500/30   /* Девочка */
shadow-lg shadow-purple-400/50 /* Аватар */

/* Аватар в Screen05 */
shadow-2xl shadow-purple-500/50
```

### Градиенты карточек
```css
/* Профиль малыша */
from-purple-500/20 to-purple-700/20
backdrop-blur-sm
border border-purple-400/20
```

---

## Сетки

### Dashboard статистика
```css
grid-cols-2
gap-3
```

### Выбор аватара
```css
grid-cols-6
gap-3
```

---

## Адаптивность

### Максимальная ширина
```css
max-width: 428px  /* iPhone 14 Pro Max */
margin: 0 auto    /* Центрирование */
```

### Viewport
```html
viewport-fit=cover
user-scalable=no
```

### Overflow
```css
overflow: hidden  /* Основной контейнер */
overflow-y: auto  /* Dashboard */
```

---

## Состояния элементов

### Кнопка "Далее"
```
Активна:     bg-[#babbff] cursor-pointer
Неактивна:   bg-[#6d6d8e] cursor-not-allowed
Hover:       bg-[#cacbff]
```

### Карточка выбора
```
Не выбрана:  bg-[#252352]
Выбрана:     bg-[#6b9eff] scale-105 shadow-lg
Hover:       bg-[#2d2a5d]
```

### Аватар в сетке
```
Не выбран:   bg-[#252352]
Выбран:      bg-[#babbff] scale-110 shadow-lg
Hover:       bg-[#2d2a5d]
```

---

## Haptic Feedback

### Когда используется
```typescript
light    // Легкие действия (клики, выбор)
medium   // Средние действия
heavy    // Важные действия (завершение)
selection // Изменение выбора
success  // Успешное завершение
error    // Ошибка
warning  // Предупреждение
```

### В приложении
```
Screen01: light при выборе даты
Screen02: selection при выборе пола, light при "Далее"
Screen03: light при "Далее"
Screen04: selection при выборе аватара, light при "Далее"
Screen05: success при открытии, heavy при "Начать"
Dashboard: light при клике на карточки
```

---

## Иконография

### Status Bar иконки
- WiFi сигнал
- Сотовая связь (4 полоски)
- Батарея (с процентом)
- Время: 9:41

### Эмодзи Dashboard
```
😴 Сны
📊 Рост
🍼 Кормление
🎯 Вехи
💫 Пустое состояние
```

---

## Пустые состояния

### Dashboard - нет активности
```
Иконка: 💫 (50px, opacity 50%)
Текст: "Пока нет активности"
Подтекст: "Начните отслеживать сны и развитие"
Цвет: #8483a8, #6d6d8e
```

---

## Особые элементы

### Календарь
```
Цвет фона: #1a1a2e
Border-radius: 20px (верх)
Дни недели: ПН ВТ СР ЧТ ПТ СБ ВС
Grid: 7 колонок
Выбранный день: bg-[#babbff] text-[#0f0f1a]
Невыбранный: text-white hover:bg-gray-700
```

### Handle bar (календарь)
```
Ширина: 40px
Высота: 4px
Color: gray-600
Border-radius: full
```

---

## Расстояния (отступы)

### Горизонтальные
```
Контейнер: px-5 (20px)
Карточки: gap-3, gap-4
```

### Вертикальные
```
Между секциями: mt-6 (24px)
Внутри карточек: p-4, p-5, p-6
```

---

## Z-index слои

```
z-0  - Основной контент
z-40 - Backdrop (blur)
z-50 - Календарь drawer
```

---

Этот гайд поможет поддерживать единообразие дизайна при добавлении новых экранов! 🎨
