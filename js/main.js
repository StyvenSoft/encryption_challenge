const btnEncrypt = document.getElementById('btn_encrypt');
const btnDecrypt = document.getElementById('btn_decrypt');
const btnCopy = document.getElementById('btn_copy');
const messageText = document.querySelector('.text__enter');
const output = document.querySelector('.message');

const vowels = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
let stateEncry = false, stateDecry = false;

const encrypt = () => {
    stateEncry = true;
    changeMessage(messageText.value);
}

const decrypt = () => {
    stateDecry = true;
    changeMessage(messageText.value);
}
const copy = () => {
    navigator.clipboard.writeText(output.textContent);
    alert('Copied text!')
}

const changeMessage = (message) => { 

    for (const i in vowels) {
        
        if (message.includes(vowels[i][0])) {
            if (stateEncry) {
                message = message.replaceAll(vowels[i][0], vowels[i][1]);   
            }
            if (stateDecry) {
                message = message.replaceAll(vowels[i][1], vowels[i][0]);
            }
        }
    }
    stateEncry = false;
    stateDecry = false;
    //return message;

    document.querySelector(".img-dummy").style.display = 'none';
    document.querySelector(".title__message").style.display = 'none';
    document.querySelector(".btn-copy").style.display = 'block';
    document.querySelector(".message").innerHTML = message;
}

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copy);