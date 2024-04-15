const textarea = document.querySelector('textarea');
const clearButton = document.querySelector('button');
const textareaValue = localStorage.getItem('textarea');
if (textareaValue != null) {
    textarea.value = textareaValue;
}

clearButton.addEventListener('click', () => {
    textarea.value = '';
    localStorage.clear()
})

textarea.addEventListener('input', () => {
    localStorage.setItem('textarea', textarea.value);

})
