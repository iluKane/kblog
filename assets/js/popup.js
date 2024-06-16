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


const turnIcon = document.getElementById('turnIcon');
const turnResult = document.getElementById('turnResult');

turnIcon.addEventListener('click', function () {
    if (turnResult.style.display === 'none' || turnResult.style.display === '') {
        turnResult.style.display = 'block';
        turnIcon.style.transform = 'rotate(90deg)';
    } else {
        turnResult.style.display = 'none';
        turnIcon.style.transform = 'rotate(0deg)';
    }
});