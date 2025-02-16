const multiplyTwoNumbers = (a: number, b: number): number => a * b;
console.log(multiplyTwoNumbers(5, 4)); 
const constNumber = 22;
const constString = "Пример строки"; 
const constBoolean = true; 
let letObject = { key: "value" };
let letArray = [1, 2, 3]; 
let letNull = null; 
const constSymbol = Symbol("уникальный");
console.log(constNumber, constString, constBoolean, letObject, letArray,letNull, constSymbol);
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number 
    e2?: string 
}
const data: ToJsonStringify = {
    id: 4,
    e1: null, 
    e2: null, 
};

const jsonString = JSON.stringify(data);
console.log(jsonString);


