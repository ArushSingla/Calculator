// let input = document.getElementById("inputbox");
// let buttons = document.querySelectorAll('button');
// let string = "";

// let arr = Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             input.value = string;
//         } else if (e.target.innerHTML == 'AC') {
//             string = "";
//             input.value = string;
//         } else if (e.target.innerHTML == 'DEL') {
//             string = string.substring(0, string.length - 1);
//             input.value = string;
//         } else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     });
// });


// here is shorter version of code


let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll('button');
let string = "";

for (let button of buttons) {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;
        if (buttonText === '=') {
            string = eval(string);
        } else if (buttonText === 'Ac') {
            string = "";
        } else if (buttonText === 'x^2') {
            string = String(Number(string) ** 2);
        } else if (buttonText === 'x^3') {
            string = String(Number(string) ** 3);
        } else if (buttonText === 'x^y') {
            let exponent = prompt("Enter exponent value y :");
            if (exponent !== null && exponent !== "") {
            string = String(Number(string) ** Number(exponent));
            }
        } else if (buttonText === 'ln') {
            string = String(Math.log(Number(string)));
        } else if (buttonText === 'e') {
            string = String(Math.exp(Number(string)));
        } else if (buttonText === 'Del') {
            string = string.slice(0, -1);
        } else {
            string += buttonText;
        }
        input.value = string;
    });
}
