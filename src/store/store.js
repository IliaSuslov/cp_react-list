import { createStoreon } from 'storeon'
import { storeonDevtools } from 'storeon/devtools';

const table = {
    headers: [
        { head: 'number' },
        { head: 'name' },
        { head: 'age' },
        { head: "skill" }
    ],
    data: [
        { name: 'Rob', age: 1, skill: 'JS' },
        { name: 'Victor', age: 3, skill: 'Angular' },
        { name: 'Alex', age: 2, skill: 'TS' },
        { name: 'Alexey Victorovich', age: 4, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 26, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 241, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 26, skill: 'JS' },
        { name: 'Name1', age: 27, skill: 'Angular' },
        { name: 'Name2', age: 28, skill: 'TS' },
        { name: 'Name3', age: 29, skill: 'React' },
        { name: 'Name4', age: 30, skill: 'Vue' },
        { name: 'Name', age: 31, skill: 'JS' },
        { name: 'Name1', age: 32, skill: 'Angular' },
        { name: 'Name2', age: 33, skill: 'TS' },
        { name: 'Name3', age: 34, skill: 'React' },
        { name: 'Name4', age: 35, skill: 'Vue' },
        { name: 'Name', age: 36, skill: 'JS' },
        { name: 'Name1', age: 37, skill: 'Angular' },
        { name: 'Name2', age: 38, skill: 'TS' },
        { name: 'Name3', age: 39, skill: 'React' },
        { name: 'Name4', age: 40, skill: 'Vue' },
        { name: 'Name', age: 41, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 24, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 21, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 24, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 21, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Rob', age: 1, skill: 'JS' },
        { name: 'Victor', age: 3, skill: 'Angular' },
        { name: 'Alex', age: 2, skill: 'TS' },
        { name: 'Alexey Victorovich', age: 4, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 26, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 241, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 26, skill: 'JS' },
        { name: 'Name1', age: 27, skill: 'Angular' },
        { name: 'Name2', age: 28, skill: 'TS' },
        { name: 'Name3', age: 29, skill: 'React' },
        { name: 'Name4', age: 30, skill: 'Vue' },
        { name: 'Name', age: 31, skill: 'JS' },
        { name: 'Name1', age: 32, skill: 'Angular' },
        { name: 'Name2', age: 33, skill: 'TS' },
        { name: 'Name3', age: 34, skill: 'React' },
        { name: 'Name4', age: 35, skill: 'Vue' },
        { name: 'Name', age: 36, skill: 'JS' },
        { name: 'Name1', age: 37, skill: 'Angular' },
        { name: 'Name2', age: 38, skill: 'TS' },
        { name: 'Name3', age: 39, skill: 'React' },
        { name: 'Name4', age: 40, skill: 'Vue' },
        { name: 'Name', age: 41, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 24, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 21, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 24, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 21, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Rob', age: 1, skill: 'JS' },
        { name: 'Victor', age: 3, skill: 'Angular' },
        { name: 'Alex', age: 2, skill: 'TS' },
        { name: 'Alexey Victorovich', age: 4, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 26, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 241, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 26, skill: 'JS' },
        { name: 'Name1', age: 27, skill: 'Angular' },
        { name: 'Name2', age: 28, skill: 'TS' },
        { name: 'Name3', age: 29, skill: 'React' },
        { name: 'Name4', age: 30, skill: 'Vue' },
        { name: 'Name', age: 31, skill: 'JS' },
        { name: 'Name1', age: 32, skill: 'Angular' },
        { name: 'Name2', age: 33, skill: 'TS' },
        { name: 'Name3', age: 34, skill: 'React' },
        { name: 'Name4', age: 35, skill: 'Vue' },
        { name: 'Name', age: 36, skill: 'JS' },
        { name: 'Name1', age: 37, skill: 'Angular' },
        { name: 'Name2', age: 38, skill: 'TS' },
        { name: 'Name3', age: 39, skill: 'React' },
        { name: 'Name4', age: 40, skill: 'Vue' },
        { name: 'Name', age: 41, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 24, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 21, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 24, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 21, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Rob', age: 1, skill: 'JS' },
        { name: 'Victor', age: 3, skill: 'Angular' },
        { name: 'Alex', age: 2, skill: 'TS' },
        { name: 'Alexey Victorovich', age: 4, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 26, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 241, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 26, skill: 'JS' },
        { name: 'Name1', age: 27, skill: 'Angular' },
        { name: 'Name2', age: 28, skill: 'TS' },
        { name: 'Name3', age: 29, skill: 'React' },
        { name: 'Name4', age: 30, skill: 'Vue' },
        { name: 'Name', age: 31, skill: 'JS' },
        { name: 'Name1', age: 32, skill: 'Angular' },
        { name: 'Name2', age: 33, skill: 'TS' },
        { name: 'Name3', age: 34, skill: 'React' },
        { name: 'Name4', age: 35, skill: 'Vue' },
        { name: 'Name', age: 36, skill: 'JS' },
        { name: 'Name1', age: 37, skill: 'Angular' },
        { name: 'Name2', age: 38, skill: 'TS' },
        { name: 'Name3', age: 39, skill: 'React' },
        { name: 'Name4', age: 40, skill: 'Vue' },
        { name: 'Name', age: 41, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 24, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 21, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
        { name: 'Name2', age: 23, skill: 'TS' },
        { name: 'Name3', age: 24, skill: 'React' },
        { name: 'Name4', age: 25, skill: 'Vue' },
        { name: 'Name', age: 21, skill: 'JS' },
        { name: 'Name1', age: 22, skill: 'Angular' },
    ],
    page: 1,
    limit: 50,
    sort_field: "name",
    sort_direction: "asc",
    filter: {
        name: '',
        age: '',
        skill: '',
    }
}


let app = store => {
    store.on('@init', () => ({ table }));

    store.on('table/changed', ({ table }, payload) => {
        return { table: { ...table, ...payload } }
    })

    store.on('filter/changed', ({ table }, payload) => {
        return { table: { ...table, filter: { ...table.filter, ...payload } } }
    })

    store.on('sort/changed', ({ table }, header) => {
        switch (header) {
            case 'age':
                let sAge = () => {
                    if (table.sort_direction === 'asc') {
                        return table.data.sort((f, s) => f.age - s.age);
                    } else {
                        return table.data.sort((f, s) => s.age - f.age);
                    }
                }
                sAge();
                break;
            case 'skill':
                let sSkill = () => {
                    if (table.sort_direction === 'asc') {
                        return table.data.sort((f, s) => f.skill.length - s.skill.length);
                    } else {
                        return table.data.sort((f, s) => s.skill.length - f.skill.length);
                    }
                }
                sSkill();
                break;
            case 'name':
                let sName = () => {
                    if (table.sort_direction === 'asc') {
                        return table.data.sort((f, s) => f.name.length - s.name.length);
                    } else {
                        return table.data.sort((f, s) => s.name.length - f.name.length);
                    }
                }
                sName();
                break;
            default:
                break;
        }
    });

    store.on('filter', ({ table }) => {
        const { name, age, skill } = table.filter;
        const sortedData = table.data
            .filter(d => name === "" ? true : d.name.toLowerCase().includes(name))
            .filter(d => age === "" ? true : String(d.age).includes(age))
            .filter(d => skill === "" ? true : d.skill.toLowerCase().includes(skill))
        return { table: { ...table, sortedData } }
    });

    store.on('sort/dir', ({ table }) => {
        const dir = () => {
            if (table.sort_direction === "asc") { return "desc" }
            else { return "asc" }
        }
        let res = dir();
        return { table: { ...table, sort_direction: res } }
    });
}

export const store = createStoreon(
    [
        app,
        process.env.NODE_ENV !== 'production' && storeonDevtools
    ])
