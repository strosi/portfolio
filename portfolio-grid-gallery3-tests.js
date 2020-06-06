// Global variables. Initial values

let activePage = document.getElementsByClassName('portfolio-page')[0];
let activeMenuButton = document.getElementById('prints-btn');
const subGalleryHolder = document.getElementById('clicked-img-holder');
const subGallery = document.getElementById('clicked-img');
const prevImg = document.getElementById('prev-img');
const nextImg = document.getElementById('next-img');
let pageContainer = activePage.firstElementChild;


// Hides unactive galleries

function hidePage(page) {
    page.classList.add('hidden');
}


function changeActiveBtnColor(btn) {
    btn.classList.add('active-btn');
}



// Sets images order in the grid gallery (masonry gallery)

function resizeMasonryItem(item) {
    let gridRowHeight = parseInt(window.getComputedStyle(pageContainer).getPropertyValue('grid-auto-rows'));
    let gridRowGap = parseInt(window.getComputedStyle(pageContainer).getPropertyValue('grid-row-gap'));

    let itemSpan = Math.ceil(
        (item.querySelector('.masonry-content').getBoundingClientRect().height) /
        (gridRowHeight + gridRowGap)
    );

    item.style.gridRowEnd = 'span ' + itemSpan;
}

function resizeAllMasonryItems() {
    let allItems = pageContainer.children;

    for (let i = 0; i < allItems.length; i++) {
        resizeMasonryItem(allItems[i]);
    }
}

let events = ['load', 'resize'];
let galleries = document.getElementsByClassName('portfolio-page');

events.forEach(
    function (event) {
        window.addEventListener(event, resizeAllMasonryItems);

        for (let i = 0; i < galleries.length; i++) {
            if (galleries[i].id !== 'prints') {
                hidePage(galleries[i]);
            }
        }

        changeActiveBtnColor(activeMenuButton);
    }
);


// Main menu buttons handling

function openNewPage(e) {
    if (e.target.classList[0] === 'btn') {
        if (subGalleryHolder.style.display !== 'none') {
            clearSubGallery();
            hidePage(subGalleryHolder);
        }

        if (e.target.id !== activeMenuButton || (e.target.id === activeMenuButton
            && e.target.style.display === 'none')) {
            activeMenuButton.classList.remove('active-btn');
            activeMenuButton = e.target;
            changeActiveBtnColor(activeMenuButton);
            let btnId = activeMenuButton.id;
            let galleryId = btnId.substr(0, btnId.length - 4);
            hidePage(activePage);
            activePage = document.getElementById(galleryId);
            activePage.classList.remove('hidden');

            if (galleryId !== 'about') {
                pageContainer = activePage.firstElementChild;
                resizeAllMasonryItems();
            }

            window.scrollTo(0, 0);
        }
    }
}

document.getElementById('menu').onclick = e => openNewPage(e);


// Show the clicked image in subgallery. Sets 'clicked-img-holder' div display: block 
// and 'gallery' div to display: none

let targetImg;

function createSubGallery() {
    let clickedImgSrc = targetImg.getAttribute('src');
    let clickedImgName = clickedImgSrc.substr(clickedImgSrc.lastIndexOf('/') + 1);
    let projImgsCount = parseInt(clickedImgName.charAt(0));

    for (let i = 0; i < projImgsCount; i++) {
        let newImgName = clickedImgName.substring(2, clickedImgName.length - 4) + '-' + (i + 1) + '.jpg';

        let newImg = document.createElement('img');
        newImg.setAttribute('src', clickedImgSrc.replace(clickedImgName, newImgName));
        document.getElementById('clicked-img').appendChild(newImg);
    }

    window.scrollTo(0, 0);
}

function clearSubGallery() {
    subGallery.innerHTML = '';
}

function showImgDetailes(e) {
    if (e.target.className === 'masonry-content') {
        targetImg = e.target;
        activePage.classList.add('hidden');
        subGalleryHolder.classList.remove('hidden');
        createSubGallery(targetImg);
    }
}

function hideImgDetails() {
    activePage.classList.remove('hidden');
    clearSubGallery();
    hidePage(subGalleryHolder);
}


pageContainer.onclick = e => showImgDetailes(e);
document.getElementById('paintings').firstElementChild.onclick = e => showImgDetailes(e);

nextImg.onclick = function () {
    if (targetImg.parentElement.nextElementSibling) {
        targetImg = targetImg.parentElement.nextElementSibling.firstElementChild;
        clearSubGallery();
        createSubGallery();
    }
}

prevImg.onclick = function () {
    if (targetImg.parentElement.previousElementSibling) {
        targetImg = targetImg.parentElement.previousElementSibling.firstElementChild;
        clearSubGallery();
        createSubGallery();
    }
}

// closeImgDetails.onclick = function () {
//     hideImgDetails();
// }