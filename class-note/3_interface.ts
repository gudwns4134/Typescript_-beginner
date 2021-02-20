interface User {
    age: number;
    name : string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 10,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    age:10,
    name: '캡틴'
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b:number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b' , 'c'];
// number 형식은 string에 할당 할 수 없다.
// arr[0] = 10

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

// 오류
// obj['cssFile'] = 'a'

// 오류 안남
obj['cssFile'] = /\.css$/

// 추론? 강의 후반부에 따로 다룬다.
Object.keys(obj).forEach(function(value) {

});

// 인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

var captain: Developer = {
    language: 'Ts',
    name: '캡틴',
    age: 100
}