// 인터페이스는 확장이 가능하다.
interface Person1 {
    name: string;
    age: number;
}

// type은 확장(상속)이 안된다.
type Person2 = {
    name: string;
    age: number;
}

// 인터페이스는 타입을 안보여주는데 별칭으로 설정한 것은 타입을 바로 보여준다?

var jun: Person2 = {
    name:'준',
    age:30
} 

type MyString = string;
var str: MyString = 'hello';