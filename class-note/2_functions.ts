// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }

// sum(10,20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}
// 불필요한 인자 값 or 불충분한 인자 값 일때 오류 발생.
sum(10, 20, 30); 

// 함수의 옵셔널 파라미터 ?-> 넣을 수도 있고 아닐 수도 있고
function log(a: string, b?:string) {

}

log('hello world');
log('hello ts', 'abc');
