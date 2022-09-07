let obj_closeModal = document.querySelectorAll('.close-modal');
let obj_modal = document.querySelectorAll('.modal');

function showModal(obj_selector, obj_shown) {
    obj_selector.forEach(function (element) {
        element.addEventListener('click', function () {
            obj_shown.classList.add('shown');
        });
    });
};

// ! deadcell
let obj_deadcellSelector = document.querySelectorAll('.deadcell-modal-activator');
let obj_deadcellModal = document.querySelector('.deadcell');
showModal(obj_deadcellSelector, obj_deadcellModal);

// ! halo
let obj_haloSelector = document.querySelectorAll('.halo-modal-activator');
let obj_haloModal = document.querySelector('.halo');
showModal(obj_haloSelector, obj_haloModal);

// ! tokyo
let obj_tokyoSelector = document.querySelectorAll('.tokyo-modal-activator');
let obj_tokyoModal = document.querySelector('.tokyo');
showModal(obj_tokyoSelector, obj_tokyoModal);

// ! dyinglight
let obj_dyinglightSelector = document.querySelectorAll('.dyinglight-modal-activator');
let obj_dyinglightModal = document.querySelector('.dyinglight');
showModal(obj_dyinglightSelector, obj_dyinglightModal);

// ! bright
let obj_brightSelector = document.querySelectorAll('.bright-modal-activator');
let obj_brightModal = document.querySelector('.bright');
showModal(obj_brightSelector, obj_brightModal);

// ! vrising
let obj_vrisingSelector = document.querySelectorAll('.vrising-modal-activator');
let obj_vrisingModal = document.querySelector('.vrising');
showModal(obj_vrisingSelector, obj_vrisingModal);
// ! olympic
let obj_olympicSelector = document.querySelectorAll('.olympic-modal-activator');
let obj_olympicModal = document.querySelector('.olympic');
showModal(obj_olympicSelector, obj_olympicModal);
// ! halflife
let obj_halflifeSelector = document.querySelectorAll('.halflife-modal-activator');
let obj_halflifeModal = document.querySelector('.halflife');
showModal(obj_halflifeSelector, obj_halflifeModal);




obj_closeModal.forEach(function (element) {
    element.addEventListener('click', function () {
        obj_modal.forEach(function (element) {
            element.classList.remove('shown');
        });
    });
});
