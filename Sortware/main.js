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

// !sublime
let obj_sublimeSelector = document.querySelectorAll('.sublime-modal-activator');
let obj_sublime = document.querySelector('.sublime');

// !fxsound
let obj_fxsoundSelector = document.querySelectorAll('.fxsound-modal-activator');
let obj_fxsound = document.querySelector('.fxsound');

// !cleaner
let obj_cleanerSelector = document.querySelectorAll('.cleaner-modal-activator');
let obj_cleaner = document.querySelector('.cleaner');

// !proteus
let obj_proteusSelector = document.querySelectorAll('.proteus-modal-activator');
let obj_proteus = document.querySelector('.proteus');

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
showModal(obj_sublimeSelector, obj_sublime);
showModal(obj_fxsoundSelector, obj_fxsound);
showModal(obj_cleanerSelector, obj_cleaner);
showModal(obj_proteusSelector, obj_proteus);

obj_closeModal.forEach(function (element) {
    element.addEventListener('click', hideModal);
})






