// {
//   var num1 = Number(prompt("Enter the first number: "));
//   var num2 = Number(prompt("Enter the second number: "));
//   var num3 = num1 + num2;
//   var num4 = num1 * num2;
//   var num5 = num1 / num2;
// }
// alert(
//   "Addition is : " +
//   num3 +
//   "\n" +
//   "Multiplication is : " +
//   num4 +
//   "\n" +
//   "Division is : " +
//   num5
// );
// num6 = num3 ** num4;
// alert(num6);
// {
//   let num1 = prompt("Enter the first number: ");
//   let num2 = prompt("Enter the second number: ");
//   let num3 = num1 % num2;
//   alert("The reminder is: " + num3);

//   const num = 345434;
//   console.log(num);
// }

// let word = prompt("")
// if (word == "usman") {
//   alert('Welcome to my website')
// } else if (word == "Hamza") {
//   alert('welcome back Hamza');
// } else {
//   alert("you are not welcome");
// }

//switch case statement

// switch (word) {
//   case 'usman':
//     alert(`Hello ${word}`)
//     break;
//   case 'hamza':
//     alert(`${word}, Welcome Back`)
//     break;
//   default:
//     alert('You are not allowed here')
// }


let heading = document.getElementById('heading')
let paragraph = document.getElementById('paragraph')
let btn = document.getElementById('btn')


function remind() {
    let num1 = parseInt(prompt(""))
    let num2 = parseInt(prompt(""))
    let num3 = num1 % num2

    heading.innerHTML = `Reminder of ${num1} and ${num2}`
    paragraph.innerHTML = num3
}

btn.addEventListener("click", remind)


// let w = prompt("")
// if ((w === null || w === "") && w !== undefined) {
//     alert("Please enter a valid input!")
//     w = false
// }
// else if (w == "usman" || w == "hamza") {
//     w = true
// }
// else {
//     w = false
// }
// if (w) {
//     console.log("Welcome to my website")
// }
// else {
//     console.log("Invalid Input")
// }


const Bio_data = {
    Name: "usman",
    Age: 23,
    Email: "usman@gmail.com",
    PhoneNumber: '0987654321',
    Address: 'Dubai',
    Hobbies: 'reading'
};

let container = document.getElementById('container')
let h1 = document.createElement('h1')
let table = document.createElement('table')
let tr = document.createElement('tr')
let th = document.createElement('th')
let td = document.createElement('td')
th.innerHTML = "food"
td.innerHTML = "biryani"
h1.innerHTML = "My name is usman"

container.appendChild(h1)
container.appendChild(table)
table.appendChild(tr)
tr.appendChild(th)
tr.appendChild(td)
