let names = ["oof", "yeet", "skrtt", "wow"]

names.forEach(capitalize)
names.forEach(print)

let grades = [20, 70, 10, 50, 80, 30, 100]
grades.sort(sortAsc)
grades.forEach(print)

function sortDes(x, y) {

    return y - x
}

function sortAsc(x, y) {

    return x - y
}

function capitalize(element, index, array) {

    array[index] = element[0].toUpperCase()  + element.substring(1)
}

function print(element) {

    console.log(element)
}