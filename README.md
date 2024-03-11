# UI-KIt

В данном проекте предложен 1 из возможных вариантов реализации UI-Kit проекте используется CSS-in-JS подход.
Данный подход можно использовать как для создания отдельного UI-Kit так и для стилизации внутри приложения.

Проект включает в себя:

1) Работу с темой через с использованием JSS и Context APi
2) Типизация палитры цветов, для каждого элемента задается свой набор цветов в соотвествии со схемой
3) Создание stories в Storybook для разных тем приложения
4) Покрытие созданных компонентов unit тестами

Стэк технологий React, JSS, JEST, Storybook

Стилизация компонентов носит условный характер и служит для демонстрации  CSS-in-JS подхода
Созданные компоненты легко расширяемы с помощью дополнительных props

Приложение представляет собой input и кнопку для смены темы
Компоненты также доступны в StoryBook

# Scripts
    npm run start - запуск приложение
    npm run test - запуск юнит тество
    npm run storybook - запуск storyBook
