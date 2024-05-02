//1

function sum(x, y) {
  return x + y;
}

console.log(sum(3, 2));
console.log(sum(-3, -6));
console.log(sum(7, 3));

//2

function toSeconds(minutes) {
  return minutes * 60;
}

console.log(toSeconds(5));
console.log(toSeconds(3));
console.log(toSeconds(2));

//3

function nextInteger(int) {
  return int + 1;
}

console.log(nextInteger(0));
console.log(nextInteger(9));
console.log(nextInteger(-3));

//4

function uchburchakYuzi(asos, balandlik) {
  return (asos * balandlik) / 2;
}

console.log(uchburchakYuzi(3, 2));
console.log(uchburchakYuzi(7, 4));
console.log(uchburchakYuzi(10, 10));

//5

function ageToDays(age) {
  return age * 365;
}

console.log(ageToDays(65));
console.log(ageToDays(0));
console.log(ageToDays(20));

//6

function kub(num) {
  return Math.pow(num, 3);
}

console.log(kub(3));
console.log(kub(5));
console.log(kub(10));

//7

function firstElement(arr) {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement([80, 5, 100]));
console.log(firstElement([-500, 0, 50]));

//8

function power(x, y) {
  return x * y;
}

console.log(power(230, 10));
console.log(power(110, 3));
console.log(power(480, 20));

//9

function hourToSeconds(hour) {
  return hour * 3600;
}

console.log(hourToSeconds(2));
console.log(hourToSeconds(10));
console.log(hourToSeconds(24));

//10

function uchinchiTomon(tomon1, tomon2) {
  return tomon1 + tomon2 - 1;
}

console.log(uchinchiTomon(8, 10));
console.log(uchinchiTomon(5, 7));
console.log(uchinchiTomon(9, 2));

//11

function qoldiq(son1, son2) {
  return son1 % son2;
}

console.log(qoldiq(1, 3));

//12

function turtburchakYuzi(boyi, eni) {
  return boyi * eni;
}

console.log(turtburchakYuzi(6, 7));

//13

function stringQoshish(a) {
  return "something " + a;
}

console.log(stringQoshish("is better than nothing"));
console.log(stringQoshish("Bob Jane"));
console.log(stringQoshish("something"));

//14

function kvadrat(x) {
  return x * x;
}

console.log(kvadrat(5));
console.log(kvadrat(9));
console.log(kvadrat(100));

//15

function noldan(raqam) {
  return raqam <= 0;
}

console.log(noldan(5));
console.log(noldan(0));
console.log(noldan(-2));

//16

function ichkiBurchaklar(n) {
  return (n - 2) * 180;
}

console.log(ichkiBurchaklar(3));
console.log(ichkiBurchaklar(4));
console.log(ichkiBurchaklar(6));

//17

function ochkolar(x, y) {
  return x * 2 + y * 3;
}

console.log(ochkolar(1, 1));
console.log(ochkolar(7, 5));
console.log(ochkolar(38, 8));

//18

function nameString(name) {
  return name + "Edabit";
}

console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));

//19

function kichik100dan(x, y) {
  return x + y < 100;
}

console.log(kichik100dan(22, 15));
console.log(kichik100dan(83, 34));
console.log(kichik100dan(3, 77));

//20

function printArray(num) {
  let yigindi = [];
  for (let i = 1; i <= num; i++) {
    yigindi.push(i);
  }
  return yigindi;
}

console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));

//21

function oyoqlar(tovuq, qoy, sigir) {
  return tovuq * 2 + qoy * 4 + sigir * 4;
}

console.log(oyoqlar(2, 3, 5));
console.log(oyoqlar(1, 2, 3));
console.log(oyoqlar(5, 2, 8));

//22

function and(ifoda1, ifoda2) {
  return ifoda1 && ifoda2;
}

console.log(and(true, false));
console.log(and(true, true));
console.log(and(false, true));
console.log(and(false, false));

//23

function tengMi(x, y) {
  return x === y;
}

console.log(tengMi(4, 8));
console.log(tengMi(2, 2));
console.log(tengMi(2, "2"));

//24

function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
  return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
}

console.log(futbolOchko(3, 4, 2));
console.log(futbolOchko(5, 0, 2));
console.log(futbolOchko(0, 0, 1));

//25

function sekundlar(soat, minut) {
  return soat * 3600 + minut * 60;
}

console.log(sekundlar(1, 3));
console.log(sekundlar(2, 0));
console.log(sekundlar(0, 0));

//26

function fun(num) {
  return num % 2 !== 0;
}

console.log(fun(4));
console.log(fun(9));
console.log(fun(7));

//27

function tengMi(x, y) {
  return typeof x === typeof y;
}

console.log(tengMi(1, true));
console.log(tengMi(0, "0"));
console.log(tengMi(1, 1));

//28

function booleanToString(bool) {
  return bool.toString();
}

console.log(booleanToString(true));
console.log(booleanToString(false));

//29

let arrowFunc = (value) => value;

console.log(arrowFunc(3));
console.log(arrowFunc("3"));
console.log(arrowFunc(true));

//30

function frameSoni(minut, frame) {
  return minut * frame * 60;
}

console.log(frameSoni(1, 1));
console.log(frameSoni(10, 1));
console.log(frameSoni(10, 25));

//31

function calc(str) {
  return eval(str);
}

console.log(calc("23+4"));
console.log(calc("45-15"));
console.log(calc("13+2-5*2"));
console.log(calc("49/7*2-3"));

//32

function teng10(x, y) {
  return x === 10 || y === 10 || x + y === 10;
}

console.log(teng10(9, 10));
console.log(teng10(9, 9));
console.log(teng10(1, 9));

//33

function litrMasofa(km) {
  return km * 10;
}

console.log(litrMasofa(15));
console.log(litrMasofa(23.5));
console.log(litrMasofa(3));

//34

function fun(x, y) {
  return Math.max(x, y);
}

console.log(fun(3, 7));
console.log(fun(-1, 0));
console.log(fun(1000, 400));

//35

function arr(x, y) {
  return [x, y];
}

console.log(arr(1, 2));
console.log(arr(51, 21));
console.log(arr(512124, 215));

//36

function tengStrings(str1, str2) {
  return str1.length === str2.length;
}

console.log(tengStrings("AB", "CD"));
console.log(tengStrings("ABC", "DE"));
console.log(tengStrings("hello", "edabit"));

//37

function boshStr(str) {
  return str === "";
}

console.log(boshStr(""));
console.log(boshStr(" "));
console.log(boshStr("a"));

//38

function bolinsin5(son) {
  return son % 5 === 0;
}

console.log(bolinsin5(5));
console.log(bolinsin5(-55));
console.log(bolinsin5(37));

//39

function bolinsin100(son) {
  return son % 100 === 0;
}

console.log(bolinsin100(1));
console.log(bolinsin100(1000));
console.log(bolinsin100(100));

//40

function uzunlik(str) {
  if (str === "") {
    return 0;
  }
  return 1 + uzunlik(str.slice(1));
}

console.log(uzunlik("apple"));
console.log(uzunlik("make"));
console.log(uzunlik("a"));
console.log(uzunlik(""));
console.log(uzunlik("  "));

//41

function bolinsin(x, y) {
  return x > y && x % y === 0;
}

console.log(bolinsin(98, 7));
console.log(bolinsin(85, 4));

//42

function raqam(str) {
  return parseInt(str);
}

console.log(raqam("6"));
console.log(raqam("1000"));
console.log(raqam("12"));

//43

function tortYuzi(a, b) {
  if (a <= 0 || b <= 0) {
    return -1;
  } else {
    return a * b;
  }
}

console.log(tortYuzi(3, 4));
console.log(tortYuzi(10, 11));
console.log(tortYuzi(-1, 5));
console.log(tortYuzi(0, 2));

//44

function ismFam(ism, familiya) {
  return familiya + ", " + ism;
}

console.log(ismFam("First", "Last"));
console.log(ismFam("John", "Doe"));
console.log(ismFam("Mary", "Jane"));

//45

function bug(isBug) {
  return isBug ? "sad days" : "it's a good day";
}

console.log(bug(true));
console.log(bug(false));

//46

function tushirMassiv(arr, tushirishSoni) {
  return arr.slice(tushirishSoni);
}

console.log(tushirMassiv([1, 2, 3], 1));
console.log(tushirMassiv([1, 2, 3], 2));
console.log(tushirMassiv([1, 2, 3], 5));
console.log(tushirMassiv([1, 2, 3], 0));

//47

function ovozlar(ovozObj) {
  return ovozObj.upvotes - ovozObj.downvotes;
}

console.log(ovozlar({ upvotes: 13, downvotes: 0 }));
console.log(ovozlar({ upvotes: 2, downvotes: 33 }));
console.log(ovozlar({ upvotes: 132, downvotes: 132 }));

//48

function negativ(son) {
  if (son >= 0) {
    return -son;
  } else {
    return son;
  }
}

console.log(negativ(4));
console.log(negativ(15));
console.log(negativ(-4));
console.log(negativ(0));

//49

function almash(arr) {
  return arr.reverse();
}

console.log(almash([1, 2, 3, 4]));
console.log(almash([9, 9, 2, 3, 4]));
console.log(almash([]));

//50

function kinogaKirish(yosh, otaOna) {
  return yosh >= 15 && otaOna;
}

console.log(kinogaKirish(14, true));
console.log(kinogaKirish(14, false));
console.log(kinogaKirish(16, false))