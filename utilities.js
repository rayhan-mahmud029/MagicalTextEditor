function getElement(input){
    const element = document.getElementById(input);
    return element;
}
function getElementString(input){
    const element = getElement(input);
    const elementString = element.innerText;
    return elementString;
}