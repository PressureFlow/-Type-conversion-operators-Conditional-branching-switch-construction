//Оператор if/else

if (n == 1)
   console.log("Получено 1 новое сообщение.");
else
   console.log("Получено " + n + " новых сообщений.");


//Оператор else if

if (n == 1) {
    // Выполнить блок 1
}
else if (n == 2) {
    // Выполнить блок 2
}
else if (n == 3) {
    // Выполнить блок 3
}
else {
    // Если ни один из предыдущих операторов else не был выполнен, выполнить блок 4
}

//Оператор switch

switch(n) {
    case 1:        // Выполняется, если n === 1 
         // Выполнить блок 1
         break;    // Здесь остановиться 
    case 2:        // Выполняется, если n === 2
         // Выполнить блок 2
         break;    // Здесь остановиться 
    case 3:        // Выполняется, если n === 3 
         // Выполнить блок 3
         break;    // Здесь остановиться 
    default:       // Если все остальное не подходит... 
         // Выполнить блок 4
         break;    // Здесь остановиться
}

//Тернарный оператор ?:

var n = 10;

// Определить четное или нечетное число
var result = (n % 2 == 0) ? "четное" : "нечетное";

console.log(result);     // Результат "четное"





