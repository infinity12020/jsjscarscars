  let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
let index = prompt("idx")
let idd = arr.indexOf('Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica')


if (index !== -1 ) {
    arr.splice(index , 1)
console.log(arr);
}


