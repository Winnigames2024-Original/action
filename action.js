// Предположим, URL такой: https://example.com/page?name=John&id=123

// Получаем объект параметров из текущего URL
const urlParams = new URLSearchParams(window.location.search);

// Получаем значение параметра 'name'
const name = urlParams.get('name');
console.log(name); // Выведет "John"

// Получаем значение параметра 'id'
const id = urlParams.get('id');
console.log(id); // Выведет "123"

// Добавляем новый параметр
urlParams.set('newParam', 'hello');
console.log(urlParams.toString()); // "name=John&id=123&newParam=hello"
