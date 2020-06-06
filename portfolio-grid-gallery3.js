// Sets images order in the grid gallery (masonry gallery)

function resizeMasonryItem(item) {
    let grid = document.getElementsByClassName('masonry')[0];
    let gridRowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    let gridRowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

    let itemSpan = Math.ceil(
        (item.querySelector('.masonry-content').getBoundingClientRect().height) /
        (gridRowHeight + gridRowGap)
    );

    item.style.gridRowEnd = 'span ' + itemSpan;
}

function resizeAllMasonryItems() {
    let allItems = document.getElementsByClassName('masonry-item');

    for (let i = 0; i < allItems.length; i++) {
        resizeMasonryItem(allItems[i]);
    }
}

let events = ['load', 'resize'];

events.forEach(
    function (event) {
        window.addEventListener(event, resizeAllMasonryItems);
    }
);


// Show the clicked image in detailes. Sets 'clicked-img-holder' div display: block and 'gallery' div to display: none

let gallery = document.getElementsByClassName('gallery')[0];
let imageHolder = document.getElementById('clicked-img-holder');
let prevImg = document.getElementById('prev-img').firstChild;
let nextImg = document.getElementById('next-img').firstChild;
let galleryContainer = document.getElementsByClassName('masonry')[0];
let targetImg;

function currentProjGallery() {
    let clickedImgSrc = targetImg.getAttribute('src');
    let clickedImgName = clickedImgSrc.substr(clickedImgSrc.lastIndexOf('/') + 1);
    let projImgsCount = parseInt(clickedImgName.charAt(0));

    for(let i=0; i<projImgsCount; i++) {
        let newImgName = clickedImgName.substring(2, clickedImgName.length - 4) + '-' + (i+1) + '.jpg';

        let newImg = document.createElement('img');
        newImg.setAttribute('src', clickedImgSrc.replace(clickedImgName, newImgName));
        document.getElementById('clicked-img').appendChild(newImg);
    }

    window.scrollTo(0, 0);
}

function clearProjGallery() {
    document.getElementById("clicked-img").innerHTML = "";
}

function showImgDetailes(e) {
    if (e.target.className === 'masonry-content') {
        targetImg = e.target;
        // gallery.classList.add('hidden');
        gallery.style.display = 'none';
        imageHolder.style.display = 'block';
        
        currentProjGallery(targetImg);
    }
}

function hideImgDetails() {
    gallery.style.display = 'block';
    imageHolder.style.display = 'none';
}

galleryContainer.onclick = e => showImgDetailes(e);

nextImg.onclick = function () {
    if (targetImg.parentElement.nextElementSibling) {
        targetImg = targetImg.parentElement.nextElementSibling.firstElementChild;
        clearProjGallery();
        currentProjGallery();
    }
}

prevImg.onclick = function () {
    if (targetImg.parentElement.previousElementSibling) {
        targetImg = targetImg.parentElement.previousElementSibling.firstElementChild;
        clearProjGallery();
        currentProjGallery();
    }
}

// closeImgDetails.onclick = function () {
//     hideImgDetails();
// }


// Changes main navigation links coloring if they are clicked or not

function changeActiveLinkColor() {
    if(gallery.style.display === 'none') {
        document.getElementById('print-dsgn').style.color = 'black';
    } else {
        document.getElementById('print-dsgn').style.color = '#de3a51';
    }
}

changeActiveLinkColor();


// Hamburger menu animation

let hamburger = document.getElementById('hamburger-menu');
let menuList = document.getElementsByClassName('menu')[0];

function isActive() {
    if(document.getElementsByClassName('active').length !== 0) {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
}

hamburger.onclick = function() {
    this.classList.toggle('active');
    isActive();
}

window.onresize = function() {
    if(window.innerWidth > 650) {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
        this.hamburger.classList.remove('active');
    }
}