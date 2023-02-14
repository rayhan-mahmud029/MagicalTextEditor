let textContents = getElement('textarea-content');

// Text Bold
const boldElement = getElement('text-bold')
boldElement.addEventListener('click', function () {
    boldElement.classList.toggle('bg-sky-600');
    textContents.classList.toggle('font-bold');

})

// Text Italic
const italicElement = getElement('text-italic')
italicElement.addEventListener('click', function () {
    italicElement.classList.toggle('bg-sky-600');
    textContents.classList.toggle('italic');
})

// Text Underline
const underlineElement = getElement('text-underline')
underlineElement.addEventListener('click', function () {
    underlineElement.classList.toggle('bg-sky-600');
    textContents.classList.toggle('underline');
})

// Text Align vars
const alignLeftElement = getElement('text-align-left')
const alignCenterElement = getElement('text-align-center')
const alignRightElement = getElement('text-align-right')
const alignJustifyElement = getElement('text-align-justify')

// Text Align Left
alignLeftElement.addEventListener('click', function () {
    alignLeftElement.classList.toggle('bg-sky-600');
    textContents.classList.toggle('text-left');

    alignCenterElement.classList.remove('bg-sky-600');
    alignRightElement.classList.remove('bg-sky-600');
    alignJustifyElement.classList.remove('bg-sky-600');
    textContents.classList.remove('text-center');
    textContents.classList.remove('text-right');
    textContents.classList.remove('text-justify');


})
// Text align Center
alignCenterElement.addEventListener('click', function () {
    alignCenterElement.classList.toggle('bg-sky-600');
    textContents.classList.toggle('text-center');

    alignLeftElement.classList.remove('bg-sky-600');
    alignRightElement.classList.remove('bg-sky-600');
    alignJustifyElement.classList.remove('bg-sky-600');
    textContents.classList.remove('text-left');
    textContents.classList.remove('text-right');
    textContents.classList.remove('text-justify');
})
// Text Right
alignRightElement.addEventListener('click', function () {
    alignRightElement.classList.toggle('bg-sky-600');
    textContents.classList.toggle('text-right');

    alignCenterElement.classList.remove('bg-sky-600');
    alignLeftElement.classList.remove('bg-sky-600');
    alignJustifyElement.classList.remove('bg-sky-600');
    textContents.classList.remove('text-center');
    textContents.classList.remove('text-left');
    textContents.classList.remove('text-justify');
})
// Text Align Justify
alignJustifyElement.addEventListener('click', function () {
    alignJustifyElement.classList.toggle('bg-sky-600');
    textContents.classList.toggle('text-justify');

    alignCenterElement.classList.remove('bg-sky-600');
    alignRightElement.classList.remove('bg-sky-600');
    alignLeftElement.classList.remove('bg-sky-600');
    textContents.classList.remove('text-center');
    textContents.classList.remove('text-right');
    textContents.classList.remove('text-left');
})


// Font Size
const fontSizeElement = getElement('font-size');
fontSizeElement.addEventListener('keyup', function () {
    const fontSizeInt = fontSizeElement.value;
    textContents.style.fontSize = fontSizeInt + 'px';
    console.log(textContents);
})


// Case
const caseElement = getElement('case');
caseElement.addEventListener('click', function () {
    if (caseElement.classList.contains('bg-sky-600')) {
        caseElement.classList.remove('bg-sky-600');
        caseElement.classList.add('bg-sky-900');
        textContents.classList.remove('capitalize');
        textContents.classList.add('uppercase');

    }
    else if(caseElement.classList.contains('bg-sky-900')){
        caseElement.classList.remove('bg-sky-900');
        textContents.classList.remove('uppercase');
    }
    else{
        caseElement.classList.add('bg-sky-600');
        textContents.classList.add('capitalize');
    }
})


// Color
const colorPicker = getElement('color-picker');
colorPicker.addEventListener('input', function(){
    const hexCode = colorPicker.value;
    textContents.style.color = hexCode;
})