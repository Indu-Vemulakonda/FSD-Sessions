document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    const paragraph = document.getElementById('my paragraph');

    button.addEventListener('click', () => {
        paragraph.textContent = "The text has been changed!";
        alert("Mobile charged 100%");

    });
    });