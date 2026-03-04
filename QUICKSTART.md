# ⚡ Быстрый старт за 5 минут

## 1️⃣ Локальный запуск

```bash
# Установка зависимостей
npm install

# Запуск
npm run dev
```

➡️ Откройте http://localhost:5173

**Что увидите:**
- ✅ Все 6 экранов работают
- ✅ Переходы с анимацией
- ✅ Fallback кнопки (вместо Telegram MainButton)

---

## 2️⃣ Деплой на Vercel (1 минута)

```bash
# Установите Vercel CLI
npm i -g vercel

# Войдите
vercel login

# Деплой
vercel --prod
```

➡️ Получите URL: `https://ваш-проект.vercel.app`

---

## 3️⃣ Настройка в Telegram (2 минуты)

1. Откройте [@BotFather](https://t.me/BotFather)
2. Отправьте `/newapp`
3. Выберите своего бота
4. Введите данные:
   ```
   Title: Baby App
   Description: Приложение для малыша
   Photo: /empty (или загрузите иконку)
   Demo: /empty
   Web App URL: https://ваш-проект.vercel.app
   Short name: babyapp
   ```

5. Готово! Ссылка: `https://t.me/ваш_бот/babyapp`

---

## 4️⃣ Первый запуск

Откройте приложение в Telegram и пройдите онбординг:

1. **Экран 1**: Выберите дату рождения
   - Нажмите на поле даты
   - Календарь откроется снизу с blur эффектом
   - Выберите дату → "Добавить"
   - Нажмите Telegram MainButton "Далее"

2. **Экран 2**: Выберите пол
   - Мальчик 👶🏻 или Девочка 👧🏻
   - Карточка подсветится
   - Нажмите "Далее"

3. **Экран 3**: Введите имя
   - Имя автоматически подставится из Telegram
   - Можно изменить
   - Нажмите "Далее"

4. **Экран 4**: Выберите аватар
   - 18 эмодзи на выбор
   - Превью вверху обновится
   - Нажмите "Далее"

5. **Экран 5**: Финальный экран
   - Анимация празднования 🎉
   - Нажмите "Начать"

6. **Dashboard**: Главный экран
   - Профиль малыша
   - Карточки статистики
   - Готово! ✨

---

## 🎯 Что дальше?

### Сохранение данных:
```typescript
// В src/app/App.tsx добавьте
useEffect(() => {
  localStorage.setItem('babyData', JSON.stringify({
    name, birthDate, gender, avatar
  }));
}, [name, birthDate, gender, avatar]);
```

### Восстановление при открытии:
```typescript
useEffect(() => {
  const saved = localStorage.getItem('babyData');
  if (saved) {
    const data = JSON.parse(saved);
    setName(data.name);
    setSelectedDate(new Date(data.birthDate));
    setSelectedGender(data.gender);
    setAvatar(data.avatar);
    setCurrentScreen('dashboard'); // Сразу на Dashboard
  }
}, []);
```

---

## 🔧 Полезные команды

```bash
# Разработка
npm run dev

# Продакшн билд
npm run build

# Превью продакшн билда
npm run preview

# Деплой на Vercel
vercel --prod
```

---

## 📚 Документация

- `README.md` - общая информация
- `SCREENS.md` - описание экранов
- `DEPLOY.md` - подробный гайд по деплою
- `NEXT_STEPS.md` - план развития
- `VISUAL_GUIDE.md` - дизайн система
- `TELEGRAM_EXAMPLES.md` - примеры Telegram SDK
- `CHANGELOG.md` - история изменений

---

## ❓ Частые вопросы

**Q: MainButton не появляется**
A: Откройте в Telegram, не в браузере. В браузере отображаются fallback кнопки.

**Q: Как изменить цвета?**
A: См. `VISUAL_GUIDE.md` - там вся цветовая палитра.

**Q: Как добавить новый экран?**
A: 
1. Создайте файл `src/app/components/ScreenXX.tsx`
2. Добавьте в `App.tsx` в состояние и рендер
3. Обновите прогресс-бары

**Q: Данные теряются при перезагрузке**
A: Добавьте LocalStorage (код выше) или подключите Supabase.

**Q: Как добавить функционал в Dashboard?**
A: См. `NEXT_STEPS.md` - там подробный план.

---

## 🎉 Готово!

Теперь у вас есть полноценное Telegram Mini App с:
- ✅ 6 экранами онбординга
- ✅ Telegram SDK интеграцией
- ✅ Красивыми анимациями
- ✅ Готовностью к расширению

**Что добавить дальше?** Смотрите `NEXT_STEPS.md` 🚀
