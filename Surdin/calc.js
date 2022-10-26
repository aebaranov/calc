var x = prompt('Введите первое число');
var y = prompt('Введите второе число');
var z = prompt('Введите номер знака: 1 - "+", 2 - "-", 3 - "*", 4 - "/"');

var x = parseInt(x);
var y = parseInt(y);



var result;
switch (z) {
  case "1":
    result = x + y;
    break;
  case "2":
    result = x - y;
    break;
  case "3":
    result = x * y;
    break;
  case "4":
    result = x / y;
    break;
  default: result =
    ("Ошибка")

}
alert(result);
