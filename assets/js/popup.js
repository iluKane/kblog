var leftContainer = document.querySelector('.kleft-container');
var rightContainer = document.querySelector('.kright-container');

document.getElementById('openKleft').addEventListener('click', function () {
    if (leftContainer.style.left === '-300px' || leftContainer.style.left === '') {
        leftContainer.style.left = '10px';
        rightContainer.style.right = '-300px';
    } else {
        leftContainer.style.left = '-300px';
    }
});

document.getElementById('openKright').addEventListener('click', function () {
    if (rightContainer.style.right === '-300px' || rightContainer.style.right === '') {
        rightContainer.style.right = '10px';
        leftContainer.style.left = '-300px';
    } else {
        rightContainer.style.right = '-300px';
    }
});


const xygIcon = document.getElementById('xyg-icon');
const xygBox = document.getElementById('xyg-box');

xygIcon.addEventListener('click', function () {
    if (xygBox.style.display === 'none' || xygBox.style.display === '') {
        xygBox.style.display = 'block';
        xygIcon.style.transform = 'rotate(90deg)';
    } else {
        xygBox.style.display = 'none';
        xygIcon.style.transform = 'rotate(0deg)';
    }
});