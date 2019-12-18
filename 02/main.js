/*
Создайте объект, свойства которого описывают содержимое дамской сумочки
Создайте метод объекта, позволяющий удалить что-то из сумочки

Создайте метод объекта, позволяющий положить что-то в сумочку
*/

var handbag = {
  one: 'mobile phone',
  two: 'mirror',
  three: 'comb',
  four: 'perfume',
  five: 'notebook'
}
delete handbag.two
handbag.six = 'a pen'
console.log(handbag)

/*Объявить конструктор LibraryBook, с помощью которого можно создавать и редактировать объекты, хранящие информацию о книгах в библиотеке:
Приватные свойства объекта:
     - bookTitle ( название книги ),
     - year ( год издания ),
     - author ( автор ),
     - readerName ( кому выдана ),
     - readerData ( когда выдана )

Приватный метод giveTheBook ( client ):
    внесение изменений в свойства readerName ( client ), readerData ( текущая дата )

Публичные методы:

- getBookInfo () - посмотреть информацию о наличии книги ( вывести в консоль readerData )

- getTheBook ( client ) -  получить книгу:
       проверка, что книга не выдана на руки ( приватное свойство readerName должно быть пустой строкой )
       если выдана - вернуть null
       если не выдана, то вызвать приватный метод giveTheBook ( client ) и вернуть bookTitle
       
- вернуть книгу:
       сбросить значения приватных свойств: readerName, readerData

Создать экземпляр книги
Запросить экземпляр от имени ... ( любое имя )*/


var LibraryBook = function () {

  var bookProp = [{
      bookTitle: "Великий Гетсби",
      year: 1925,
      author: "Фрэнсис Скотт Фицджеральд",
      readerData: "",
      readerName: ""
    },
    {
      bookTitle: "Богатый папа, бедный папа",
      year: 1994,
      author: "Роберт Кийосаки",
      readerData: "",
      readerName: ""
    }
  ]

  this.newReaderData = null;
  this.newReaderName = null;

  // Редактирование данных. Приватный метод
  function giveTheBook(client) {
    bookProp[0].readerName = client // редактирование имени читателя

    var date = new Date()
    var myDate = date.toLocaleDateString()
    bookProp[0].readerData = myDate // запись текущей даты
  }

  // Посмотреть информацию (кто взял и когда)
  this.getBookInfo = function () {
    this.newReaderData = bookProp[0].readerData
    console.log(this.newReaderData)

    this.newReaderName = bookProp[0].readerName // добавила и читателя,чтоб понять что выводит
    console.log(this.newReaderName)
  }

  // Метод для получения книги

  this.getTheBook = function (client) {
    if (bookProp[0].readerName === "") {
      giveTheBook(client)
      return bookProp[0].bookTitle

    } else return null
  }

  // Метод для возврата книги
  this.returnBook = function () {
    bookProp[0].readerName = ""
    bookProp[0].readerData = ""
  }
}

var myBook = new LibraryBook()

console.log(myBook.getTheBook("Максим")) //взял Максим
myBook.getBookInfo() // информация
myBook.returnBook() // вернул
console.log("   ")
console.log(myBook.getTheBook("Андрей")) //взял Андрей
myBook.getBookInfo() // информация
console.log("                            ")
console.log(myBook.getTheBook("Иван")) //взял Иван но не сдал Андрей

/*
Напилить код функции modificator, такой, чтобы в результате работы кода:
в консоль было выведено число символов в коде функции sampleFunc, т.е.:
Symbols in my code: 93
*/

var str = function sampleFunc() {
  console.info(`Symbols in my code: ${arguments.callee + 0}`)
}
var newStr = String(str).split('')