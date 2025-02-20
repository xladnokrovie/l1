declare const multiplyTwoNumbers: (a: number, b: number) => number;
declare const constNumber = 22;
declare const constString = "\u041F\u0440\u0438\u043C\u0435\u0440 \u0441\u0442\u0440\u043E\u043A\u0438";
declare const constBoolean = true;
declare let letObject: {
    key: string;
};
declare let letArray: number[];
declare let letNull: any;
declare const constSymbol: unique symbol;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: string;
}
declare const data: ToJsonStringify;
declare const jsonString: string;
