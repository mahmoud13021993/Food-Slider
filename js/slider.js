let img = Array.from(document.querySelectorAll('.item img'));
let leftBtn = document.getElementById('leftBtn');
let closeBtn = document.getElementById('closeBtn');
let rightBtn = document.getElementById('rightBtn');
let fixedBox = document.getElementById('fixedBox');
let boxShow = document.getElementById('boxShow');

// get elemnts 
// click show slider 
// click close hide slider
// the same img clicked
let currentIndex;
for(let i=0; i<img.length;i++) {
    img[i].addEventListener('click',(e) => {
 fixedBox.classList.remove('d-none');
 let imgCliked = e.target;
 currentIndex = img.indexOf(imgCliked);
 console.log(currentIndex)
 console.log(imgCliked)
 let imgSrc= imgCliked.getAttribute("src");
 boxShow.style.backgroundImage = `url(${imgSrc})`
 console.log(imgSrc)
    })
}
function closeIcon() {
    fixedBox.classList.add('d-none')
}

closeBtn.addEventListener('click', function() {
    closeIcon()
})

// function nextImg() {
//     currentIndex++
//     console.log(currentIndex)
//     if(currentIndex === img.length) {
//         currentIndex = 0;
//         console.log(currentIndex)
//     }
//     let nextImg = img[currentIndex];
//     let imgSrc = nextImg.getAttribute('src');
//     boxShow.style.backgroundImage = `url(${imgSrc})`

// }
// function prevImg() {
//     currentIndex--
//     console.log(currentIndex)
//     if(currentIndex === 0) {
//         currentIndex = img.length-1;
//         console.log(currentIndex)
//     }
//     let nextImg = img[currentIndex];
//     let imgSrc = nextImg.getAttribute('src');
//     boxShow.style.backgroundImage = `url(${imgSrc})`

// }



function slide(step) {
    currentIndex = currentIndex + step;
    if(currentIndex == img.length) {
        currentIndex = 0;
        console.log(currentIndex)
    }
    if(currentIndex < 0) {
        currentIndex = img.length-1;
    }
    let nextImg = img[currentIndex];
    let imgSrc = nextImg.getAttribute('src');
    boxShow.style.backgroundImage = `url(${imgSrc})`
    console.log(currentIndex)
}
rightBtn.addEventListener('click',function(){ slide(1)})
leftBtn.addEventListener('click', function(){ slide(-1)})

document.addEventListener('keyup', function(e){
    if(e.key == 'Escape') {
        closeIcon()
    }else if(e.key == 'ArrowRight'){
        slide(1)

    }else if(e.key == 'ArrowLeft') {
        slide(-1)
    }
})