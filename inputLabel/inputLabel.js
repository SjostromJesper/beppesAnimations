const input = document.querySelector("#input");
const label = document.querySelector('.label');

input.addEventListener('input', () => {
    if(!input.value.length > 0) {
        label.style.top = "-20px";
    }
});

input.addEventListener('focus', () => {
    label.style.animation = "anim .2s ease-out forwards";
});

input.addEventListener('focusout', () => {
    if(!input.value.length > 0) {
        label.style.removeProperty('animation');
        label.style.top = "0";
    }
});
