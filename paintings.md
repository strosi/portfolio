<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Grid</title>
    <link rel="stylesheet" href="portfolio-grid-gallery4.css">
</head>

<body>
    <div class="header-wrapper">
        <div class="header">
            <div id="title">
                <p class="name">Rositsa Stoeva</p>
                <p class="occupation">graphic designer</p>
            </div>

            <ul id="menu">
                <li><a href="index.md">PRINT DESIGN</a></li>
                <li class="active-btn">PAINTINGS</li>
                <li>ABOUT</li>
            </ul>
        </div>
        <div class="decoration">
            <div class="red-line"></div>
            <div class="white-line"></div>
        </div>
    </div>
    <div class="gallery">
        <div class="masonry">
            <div class="masonry-item"><img src="images/image03.jpg" alt="image03" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image04.jpg" alt="image04" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image05.jpg" alt="image05" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image06.jpg" alt="image06" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image07.jpg" alt="image07" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image08.jpg" alt="image08" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image09.jpg" alt="image09" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image10.jpg" alt="image10" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image01.jpg" alt="image01" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image02.jpg" alt="image02" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image03.jpg" alt="image03" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image04.jpg" alt="image04" class="masonry-content"></div>
            <div class="masonry-item"><img src="images/image05.jpg" alt="image05" class="masonry-content"></div>
        </div>
    </div>
    <div id="clicked-img-holder" class="gallery">
        <div id="img-nav">
            <div id="prev-img" class="nav-icon"><img src="nav_icons/prev-icon.svg" alt="prev"></div>
            <div id="next-img" class="nav-icon"><img src="nav_icons/next-icon.svg" alt="next"></div>
        </div>
        <div id="clicked-img"></div>
    </div>

    <script src="portfolio-grid-gallery4.js"></script>

</body>

</html>
