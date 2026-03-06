# Установка зависимостей

npm install

# Запуск в режиме разработки

npm run dev

# Сборка для продакшена

npm run build

# Запуск Storybook (для разработки компонентов)

npm run storybook

# Сборка Storybook

npm run build-storybook

# CI/CD

При каждом push в ветки main, develop, feature/\* автоматически запускаются:

npm run lint - линтер

tsc --noEmit - проверка типов TypeScript

npm run build - сборка проекта
