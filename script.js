//boton desencriptador y encriptador
let textBox = document.querySelector(".text-encrydescry--box");
let bottonEncrypter = document.querySelector(".botton-encrypter"); 
let bottonDencrypter = document.querySelector(".botton-dencrypter");
let result = document.querySelector(".result-dep");
let textEncrypter = document.querySelector(".encrypterdecryptor-box");
let desEn = document.querySelector(".encrypterdecryptor")
let munheca = document.querySelector(".draw-munheca")

let words = ["a","e","i","o","u"];
let encrypter = ["ai","enter","imes","ober","ufat"]; 


function encrypterDes(){    
    let text = textBox.value;

    text = text.split(""); 
    for(let i = 0; i <= text.length; i++ ){ 
        if(text[i] == words[0]){
            text[i] = encrypter[0];
        }else if(text[i] == words[1]){
            text[i] = encrypter[1];
        }else if(text[i] == words[2]){
            text[i] = encrypter[2];        
        }else if(text[i] == words[3]){
            text[i] = encrypter[3];        
        }else if(text[i] == words[4]){
            text[i] = encrypter[4];        
        }
    }
    localtext = text.join("");
    return localtext
}

function desencriptadorDes(){
    let text = textBox.value;
    let a = 0;
    while(a <= encrypter.length){
        text =text.replaceAll(encrypter[a],words[a]);
        localtext = text;
        a++;
    }
    return localtext;
}


function emptyAndAddEn(){
    if(textBox.value == ""){
        return;
    }else

    encrypterDes();
   textEncrypter.innerHTML = `<textarea class="encrypterdecryptor" > ${localtext} </textarea><input class='botton botton-copie' type='submit' value='copie'>` ;    
}

function emptyAndAddSDes(){ 
    if(textBox.value == ""){
        return munheca;
    }else

    desencriptadorDes();
    textEncrypter.innerHTML = `<textarea class="encrypterdecryptor" > ${localtext} </textarea><input class='botton botton-copie' type='submit' value='copie'>` ;    
}

bottonEncrypter.onclick = emptyAndAddEn;
bottonDencrypter.onclick = emptyAndAddSDes; 
