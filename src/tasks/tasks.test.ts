import {addFriends, calc, copyStudent, deepCopyStudent, restParams, StudentType, sum} from './tasks';

test('sum of two numbers', () => {
    //1. test data
    const a: number = 6
    const b: number = 8

    // 2. Выполнение тестируемого кода с тестовыми данными
    const result = sum(a, b)

    // 3. Expect
    expect(result).toBe(14)
})
test('sum of some numbers', () => {
    //1. test data
    const a: number = 6
    const b: number = 8
    const c: number = 10
    const d: number = 2

    // 2. Выполнение тестируемого кода с тестовыми данными
    const result1 = restParams(a, b, c)
    const result2 = restParams(c, d)
    const result3 = restParams(a, b, c, d)

    // 3. Expect
    expect(restParams(6, 8, 10)).toBe(24)
    expect(result2).toBe(12)
    expect(result3).toBe(26)
})
test('copy Student', () => {
    //test data
    const student: StudentType = {
        friends: ['Katy', 'Valera', 'Viktor', 'Dimych'],
        isStudent: true,
        name: 'Vlad'
    }

    //Code
    const copySt = copyStudent(student)
    const deepCopySt = deepCopyStudent(student)

    //Expect
    expect(copySt.name).toBe('Vlad')
    expect(copySt.friends).toEqual(student.friends) // ссылается на один

    expect(deepCopySt.name).toBe('Vlad')
    expect(deepCopySt.friends).toStrictEqual(student.friends) // ссылаются на разные, но одинаковой структуры
})

test('copy Student 2', () => {
    //test data
    const student: StudentType = {
        friends: ['Katy', 'Valera', 'Viktor', 'Dimych'],
        isStudent: true,
        name: 'Vlad'
    }
    const student2: StudentType = {
        friends: ['Kasty', 'Valera', 'Viktor', 'Dimych'],
        isStudent: true,
        name: 'Vlad'
    }

    //Code
    const copySt = copyStudent(student)
    const deepCopySt = deepCopyStudent(student)

    //Expect
    expect(copySt.name).toBe('Vlad')
    expect(copySt.friends).toEqual(student.friends) // ссылается на один

    expect(deepCopySt.name).toBe('Vlad')
    expect(deepCopySt.friends).toStrictEqual(student.friends) // ссылаются на разные, но одинаковой структуры
})

test('calc test', () => {
    expect(calc(4, 2, 'sum')).toBe(6)
    expect(calc(4, 2, 'mult')).toBe(8)
    expect(calc(4, 2, 'div')).toBe(2)
    expect(calc(4, 2, 'sub')).toBe(2)
})

test('Student has friend', () => {
    // Data
    const students: StudentType[] = [
        {
            friends: ['Katy', 'Valera', 'Viktor', 'Dimych'],
            isStudent: true,
            name: 'Vlad'
        },
        {
            friends: ['Katy', 'Valera', 'Viktor', 'Dimych'],
            isStudent: true,
            name: 'Dimych'
        }
        ,
        {
            friends: ['Katy', 'Valera', 'Viktor', 'Dimych'],
            isStudent: true,
            name: 'Katy'
        }]

    const newStudents = addFriends(students)

    // Expects
    expect(newStudents[0].friends.length).toBe(2)
    expect(newStudents[0].friends).not.toStrictEqual(students[0].friends) // Массивы не равны
    expect(newStudents[0].friends).not.toContain('Vlad') // В массиве нет имени 'Vlad'
    expect(newStudents[1].friends).toContain('Vlad') // В массиве есть 'Vlad'
    expect(students[1].friends === newStudents[1].friends).toBe(false) // Не одинаковые
})