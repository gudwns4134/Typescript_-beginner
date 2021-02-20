// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

// union Type 하나 이상의 타입을 사용 할 때 사용하는 방법
var sehooo: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer2 { 
    name: string;
    skill: string;
}

interface Person3 {
    name: string;
    age: number;
}

function askSomeone( someone: Developer2 | Person3) {
    someone.name;
    someone.age;
    someone.skill;
}
