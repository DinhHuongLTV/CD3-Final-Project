let obj_dropdownBTN = document.querySelector('#dropdown-btn');
obj_dropdownBTN.addEventListener('click', function () {
    let obj_dropdownMenu = document.querySelector('.dropdown-list');
    if (obj_dropdownMenu.classList.contains('shown')) {
        obj_dropdownMenu.classList.remove('shown');
    } else {
        obj_dropdownMenu.classList.add('shown');
    }
});
