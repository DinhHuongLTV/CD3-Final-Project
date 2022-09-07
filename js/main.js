let obj_dropdownBTN = document.querySelector('#dropdown-btn');
obj_dropdownBTN.addEventListener('click', function () {
    let obj_dropdownMenu = document.querySelector('.dropdown-list');
    if (obj_dropdownMenu.classList.contains('shown-block')) {
        obj_dropdownMenu.classList.remove('shown-block');
    } else {
        obj_dropdownMenu.classList.add('shown-block');
    }
});
