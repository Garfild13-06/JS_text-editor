const textarea = document.querySelector('textarea');
const clearButton = document.querySelector('button');
const textareaValue = localStorage.getItem('textarea');
textarea.value = textareaValue;

clearButton.addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem('textarea');
})

textarea.addEventListener('input', () => {
    localStorage.setItem('textarea', textarea.value);

})
