document.getElementById("inputText").oninput = function(){
    const step = 1; //add step to cod position of characters
    let str = this.value; //accesses  to input
    let out = "";
    for (let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);//returns the Unicode of the character at the specified index in a string.
        code = code + step; //character "coding"
        out += String.fromCharCode(code);//get string from a new Unicode
    }
    document.getElementById("outputCod").innerHTML = out;
};
document.getElementById("inputCode").oninput = function(){
    const step = 1; //add step to cod position of characters
    let str = this.value; //accesses  to input
    let out = "";
    for (let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i); //returns the Unicode of the character at the specified index in a string.
        code = code - step; //character "decoding"
        out += String.fromCharCode(code);//get string from a new Unicode
    }
    document.getElementById("outputText").innerHTML = out;
};