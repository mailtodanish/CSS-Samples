function animate(el, open, delay) {
    console.error(delay);
    el.style.transitionDelay = `${delay}ms`;
    if (open) {
        el.classList.remove('folderPanelClosed');
    } else {
        el.classList.add('folderPanelClosed');
    }
}
// (function() {
//     let socials = document.querySelectorAll(".container .card");
//     socials.forEach(function(social, index) {
//         animate(social, true, index * 2 * 317);

//     });
// })();

function animation() {
    let socials = document.querySelectorAll(".container .card");
    socials.forEach(function(social, index) {
        animate(social, true, index * 2 * 317);

    });
};