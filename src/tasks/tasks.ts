export const sum = (a: number, b: number) => {
    return a + b
}

export const restParams = (...numbers: number[]) => {
    return numbers.reduce((acc, el) => acc + el)
}

export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}


export const copyStudent = (st: StudentType) => {
    return {...st}
}
export const deepCopyStudent = (st: StudentType) => {
    return {...st, friends: [...st.friends]}
}

export const calc = (a: number, b: number, action: string) => {
    switch (action) {
        case 'sum':
            return a + b
        case 'mult':
            return a * b
        case 'div':
            return a / b
        case 'sub':
            return a - b
        default:
            return 'Unknown'
    }
}

export const addFriends = (students: StudentType[]) => students.map(st => ({
    ...st,
    friends: students
        .map(s => s.name)
        .filter(n => n !== st.name)
}))