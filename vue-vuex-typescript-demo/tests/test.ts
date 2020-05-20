// let isTrue: boolean = false
// let num: number = 1
// let mytest: string = "yanlu";
// let intruduction: string = `my name is ${mytest}`;
// let list: Array<number> = [1,2]
// let list: number<number> = [1,2]
// let list: [string, number] = ['111', 111]
// let list: [string, number] = [111, '111']
// enum color { red = 1, green = 2, bule = 4 }
// let c: color = color.green
// console.log(c)
interface LabelledValue {
    label: string;
    readonly x: number;
    y?: boolean;
}

interface searchFunc {
    (sounce: string, substring: string): boolean
}
let mysearch: searchFunc;
mysearch = (sounce: string, substring: string):boolean => {
    let resule = sounce.search(substring);
    return resule > -1;
}

console.log(mysearch('qqq','q'))