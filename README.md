
Используй этот
[шаблон React-проекта](https://github.com/goitacademy/react-homework-template#readme)
как стартовую точку своего приложения.

# Критерии приема

- Создан репозиторий `goit-react-hw-06-phonebook`
- При сдаче домашней работы есть ссылки: на исходные файлы и рабочую страницу
  проекта на `GitHub Pages` или `Netlify`
- В Redux-состоянии хранится минимально необходимый набор данных
- При запуске кода задания, в консоли нету ошибок и предупреждений
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом
  стилей
- Для компонентов описаны `propTypes`
- Использована библиотека `Redux Toolkit`

## Телефонная книга

Выполни рефакторинг кода приложения «Телефонная книга» добавив управление
состоянием при помощи библиотеки [Redux Toolkit](https://redux-toolkit.js.org/).

Пусть Redux-состояние выглядит следующим образом.

```bash
{
  contacts: {
    items: [],
    filter: ''
  }
}
```

- Создай хранилище с `configureStore()`
- Создай действия сохранения и удаления контакта, а также обновления фильтра.
  Используй функцию `createAction()`.
- Создай редюсеры контактов и фильтра. Используй функцию `createReducer()` или
  `createSlice()`.
- Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки
  [react-redux](https://react-redux.js.org/).
