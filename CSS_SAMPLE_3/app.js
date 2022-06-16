function animation() {
    let els = document.querySelectorAll(".container .card");
    els.forEach(function(el, index) {
        el.style.transitionDelay = `${index * 2 * 317}ms`;
        el.classList.remove('folderPanelClosed');

    });
};