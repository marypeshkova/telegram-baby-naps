# 🚀 Быстрый старт - Деплой в Telegram

## Вариант 1: Vercel (Рекомендуется)

### Через веб-интерфейс:

1. **GitHub**:
   - Создайте репозиторий на GitHub
   - Загрузите все файлы проекта

2. **Vercel**:
   - Зайдите на [vercel.com](https://vercel.com)
   - Войдите через GitHub
   - Нажмите "Add New" → "Project"
   - Выберите репозиторий
   - Нажмите "Deploy"
   - Получите URL: `https://ваш-проект.vercel.app`

### Через CLI:

```bash
# Установите Vercel CLI
npm i -g vercel

# В папке проекта
vercel login
vercel --prod
```

---

## Вариант 2: Netlify

```bash
# Установите Netlify CLI
npm i -g netlify-cli

# В папке проекта
netlify login
netlify deploy --prod
```

---

## Вариант 3: GitHub Pages

1. В репозитории GitHub → Settings → Pages
2. Source: "GitHub Actions"
3. Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

URL будет: `https://ваш-логин.github.io/репозиторий`

---

## Настройка в Telegram

1. Откройте [@BotFather](https://t.me/BotFather)
2. Отправьте `/newapp`
3. Выберите бота
4. Заполните:
   - **Title**: Baby App
   - **Description**: Онбординг приложение
   - **Photo**: загрузите или `/empty`
   - **Demo**: `/empty`
   - **Web App URL**: `https://ваш-проект.vercel.app`
   - **Short name**: `babyapp` (только латиница)

5. Получите ссылку: `https://t.me/ваш_бот/babyapp`

---

## Добавление кнопки в бот

1. В @BotFather отправьте `/mybots`
2. Выберите бота
3. "Menu Button" → "Configure menu button"
4. Текст: `Открыть приложение`
5. URL: `https://ваш-проект.vercel.app`

Теперь кнопка появится возле поля ввода в боте! ✅

---

## Проверка

Откройте ссылку `https://t.me/ваш_бот/babyapp` в Telegram и проверьте:
- ✅ Приложение открывается
- ✅ Кнопка "Далее" внизу экрана (Telegram MainButton)
- ✅ Календарь открывается с blur эффектом
- ✅ Ввод имени работает
- ✅ Вибрация при нажатиях

---

## Обновление приложения

### Vercel/Netlify:
Просто сделайте `git push` - деплой автоматический!

### Vercel CLI:
```bash
vercel --prod
```

---

## Проблемы?

**"Invalid URL"**: 
- URL должен начинаться с `https://`
- Проверьте, что сайт доступен

**"Short name taken"**: 
- Придумайте другое короткое имя

**Кнопка не появляется**:
- Проверьте, что открыли в Telegram (не в браузере)
- Telegram SDK работает только в Telegram приложении

**Локальное тестирование**:
```bash
npm run dev
# Откройте http://localhost:5173
# Будут работать fallback кнопки
```
