let obj_closeModal = document.querySelectorAll('.close-modal');
let obj_modal = document.querySelectorAll('.modal');

// !endnote
let obj_endnoteSelector = document.querySelectorAll('.endnote-modal-activator');
let obj_endnote = document.querySelector('.endnote');

// !bandicam
let obj_bandicamSelector = document.querySelectorAll('.bandicam-modal-activator');
let obj_bandicam = document.querySelector('.bandicam');

// !affinity
let obj_affinitySelector = document.querySelectorAll('.affinity-modal-activator');
let obj_affinity = document.querySelector('.affinity');

// !edraw
let obj_edrawSelector = document.querySelectorAll('.edraw-modal-activator');
let obj_edraw = document.querySelector('.edraw');

function showModal(obj_selector, obj_shown) {
    for (element of obj_selector) {
        element.addEventListener('click', function () {
            obj_shown.classList.add('shown');
        });
    }
}

function hideModal() {
    obj_modal.forEach(function (elemnent) {
        elemnent.classList.remove('shown');
    });
};


showModal(obj_endnoteSelector, obj_endnote);
showModal(obj_bandicamSelector, obj_bandicam);
showModal(obj_affinitySelector, obj_affinity);
showModal(obj_edrawSelector, obj_edraw);

obj_closeModal.forEach(function (element) {
    element.addEventListener('click', hideModal);
})






