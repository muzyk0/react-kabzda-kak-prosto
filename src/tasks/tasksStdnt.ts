// 1. Функция принимает параметром целые положительные числа и возвращает
// их сумму.
export const funcToPropsNum = (...args: number[]) => {
    return args.reduce((acc, el) => acc + el)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
export const getTriangleType = (a: number, b: number, c: number) => {

    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || b === c || c === a) {
            return '01'
        } else {
            return '11'
        }
    } else {
        return '00'
    }
}

// 03
// export const getSum = (numbers: number) => {
//     return numbers
//         .toString()
//         .split('')
//         .reduce((a, b) => a + Number(b), 0)
// }

// export const getSum = (number: number) => {
//     let sum = 0
//     for (; number > 0; number = Math.trunc(number/10)){
//         sum += number % 10
//     }
//     return sum
// }

export const getSum = (arg: number) => eval(arg.toString().replace(/(\d)(?=\d)/g, '$1+'));

// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётным индексом (0 как чётный индекс) больше суммы чисел с нечётными индексами,
// то функция возвращает true. В противном случае - false.

export function isEvenIndexSumGreater(array: number[]) {
    let odd = 0
    let even = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            even += array[i]
        } else {
            odd += array[i]
        }
    }
    return even > odd
}

// export const isEvenIndexSumGreater = (arr: Array<number>) => {
//     let even = 0
//     let odd = 0
//     arr.reduce((acc, el, index) => index % 2 === 0 ? even += el : odd += el)
//     return even > odd
// }

// export const isEvenIndexSumGreater = (arr: Array<number>) => {
//     const sums = arr.reduce((acc, el, i) => {
//         acc[i % 2] += el
//         return acc
//     }, [0, 0])
//     return sums[0] > sums[1]
// }


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае. Диаметр куруга не должен быть больше стороны

export const isSquareGreater = (a: number, b: number) => {
    let sCr = Math.sqrt(a / Math.PI)
    const sSq = (Math.sqrt(b)) / 2
    return sSq > sCr
}

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export const getBanknoteList = (amountOjMoney: number): Array<number> => {
    let result: Array<number> = []
    let money = amountOjMoney
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    for (let i = 0; i < banknotes.length; i++) {
        if (money >= banknotes[i]) {
            result = [...result, banknotes[i]]
            money -= banknotes[i]
        }
    }
    return result
}