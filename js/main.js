const btnEncrypt = document.getElementById('btn_encrypt');
const btnDecrypt = document.getElementById('btn_decrypt');
const messageText = document.querySelector('.text__enter');

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

const changeMessage = (message) => { 

    console.log(stateEncry);
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

    document.querySelector(".title__message").innerHTML = 'Recorded message';
    document.querySelector(".message").innerHTML = message;
}

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);