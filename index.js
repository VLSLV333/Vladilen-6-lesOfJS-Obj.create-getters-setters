const person = Object.create(
    {
        calculateAge (){
            console.log(new Date().getFullYear() - this.wasBorn)
        }
    }, 
    {
        name: {
          value: "Vladislav",
          enumerable: true,                 // propertyDescriptor - parametr функція дозволяє парсити об'єкт за допомогою for (let key in person), ну і іншими
          writable: true,                   // propertyDescriptor - parametr функція дозволяє переписати об'єкт за допомогою person.name = "Maxim" (obkect.key = "new value")
          configurable: true                // propertyDescriptor - parametr функція дозволяє видаляти ключі з об'єкта за допомогою delete person.name (delete object.key)
        },
        wasBorn: {
          value: 1997,
          enumerable: false,
          writable: false,
          configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.wasBorn   // Get повинний щось повертати (return), працює як звичайне поле в об'єкті, можемо реалізовувати будь-яку зручну для нас логіку в формулі, яка потрібна для користування об'єктом
            },
            set (value){                                         // Set в них можемо "робити що завгодно", наприклад ми змінюємо бек всього вікна
                document.body.style.background = "yellow"
                console.log("Set age:", value)                 // на гетерах і сетерах побудована додаткова логіка багатьох сайтів, вони слідкують за зміною певних полів, виконують наприклад додатково відмальовку сайтів
            }
        }
    }
)

// person.name = "Maxim"


// console.log(person)


// const person = {
//     name: "Vladislav",
//     wasBorn: 1997
// }


for (let key in person){
    if (person.hasOwnProperty(key)){
        console.log("key:", key, ",value:", person[key])
    }
}
 