const passwordOutput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]<>?,./";

function generatePassword() {
    let length = parseInt(lengthInput.value);
    let characterPool = "";
    
    if (uppercaseInput.checked) characterPool += uppercaseLetters;
    if (lowercaseInput.checked) characterPool += lowercaseLetters;
    if (numbersInput.checked) characterPool += numbers;
    if (symbolsInput.checked) characterPool += symbols;

    if (characterPool === "") {
        passwordOutput.value = "Please select at least one option!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }
    passwordOutput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    passwordOutput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});
