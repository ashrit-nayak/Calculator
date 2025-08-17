let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnText = button.innerText;   // button ka text milega

        if (btnText == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (btnText == 'AC') {
            string = "";
            input.value = string;
        }
        else if (button.classList.contains("back") || e.target.classList.contains("ri-delete-back-2-line")) {
            // 🔙 Backspace button
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            // ✅ Agar button "x" hai to string me "*" add karo
            if (btnText === "x") {
                string += "*";
            } else {
                string += btnText;
            }
            input.value = string;
        }
    })
});
