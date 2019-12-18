/*
1. Сделать три ассоциативных массива a, b, c, в каждом из которых должны быть поля name и surname.
2. Добавьте некоторые другие поля (например age, fathername, sex (пол)) так, что бы набор полей отличался у разных объектов
3. Проверьте наличие необязательных полей у каждого из этих массивов. Если поле найдено, выведите его с помощью alert. Проверку делайте по typeof или in в if.
 */

var a = {
  name: 'Maxim',
  surname: 'Degtariov',
  age: 28
}

var b = {
  name: 'Denis',
  surname: 'Murashew',
  fathername: 'Olegovich'
}

var c = {
  name: 'Kate',
  surname: 'Sambuka',
  sex: 'female'
}

function proverka(nashMassiv) {
  for (var elem in nashMassiv) {
    if (elem === 'name' || elem === 'surname') continue
    alert(elem + ' - ' + nashMassiv[elem])
  }
}
proverka(a)

/*4. Добавьте несколько ассоциативных массивов с персонами в обычный массив persons, например a,b,c. Так же добавьте персону литерально ({...}). Получится обычный массив с элементами-ассоциативными массивами с персонами.

5. Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])

6. Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны.

7. Сделайте цикл, который выводит весь массив persons, но только значения всех полей из объектов. Используйте вложенный цикл

8. Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО. Учтите, что поле fathername не является обязательным.

9. Создайте JSON-строку из persons

10. Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons

11. Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия - колонки. 

12. Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия, а так же другие поля при наличии.

13. Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга tr.

14. Переработайте вывод persons в HTML с поиском всех возможных колонок во всех записях, выводом названий колонок в заголовок HTML-таблицы. Для решения этой задачи вначале узнайте множество полей (ключей) во всех записях, выведите HTML-заголовок используя тэги <th>, а потом выводите все записи.
*/

var persons = [{
  namePerson: 'Джон',
  surname: 'Lala',
  age: 10
}, {
  namePerson: 'Джон1',
  surname: 'Lala',
  age: 10
}, {
  namePerson: 'Джон2',
  surname: 'Lala',
  age: 10
}]

for (var i = 0; i < persons.length; i++) {
  console.log(persons[i])
}

for (var i = 0; i < persons.length; i++) {
  console.log(persons[i].namePerson + ' ' + persons[i].surname)
}

function myPersons(objects) {
  var znach
  var result
  for (var i = 0; i < objects.length; i++) {
    znach = objects[i]
    result = new Array(znach.namePerson, znach.surname, znach.age)
    for (var j = 0; j < result.length; j++) {
      console.log(result)
    }
  }
}
myPersons(persons)

for (var i = 0; i < persons.length; i++) {
  persons[i].fullName = 'Джон Lala Izya'
  console.log(persons[i])
}

var obj = {
  namePerson: 'Джон1',
  surname: 'Lala',
  age: 100
}
var json1 = JSON.stringify(obj)
persons.push(JSON.parse(json1))

console.log(JSON.stringify(persons));

var str = "<table border='1' style='text-align: center; width: 300px'>"
str += "<tr><th>Имя</th><th>Фамилия</th><th>Возраст</th></tr>"
for (var i = 0; i < persons.length; i++) {
  str += `<tr>
  <style>
    tr:nth-child(2n) {
      background-color:grey
    }
  </style><td>${persons[i].namePerson}</td><td>${persons[i].surname}</td><td>${persons[i].age}</td></tr>`
}
str += "</table>"
console.log(str)
document.write(str)