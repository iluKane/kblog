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


const turnIcons = document.getElementsByClassName("turn-icon");
const turnResults = document.getElementsByClassName("turn-result");

for (let i = 0; i < turnIcons.length; i++) {
    turnIcons[i].addEventListener('click', function () {
        // 判断当前的 turn-result 是否已经是显示状态
        const isCurrentOpen = turnResults[i].style.display === 'block';

        // 先关闭所有的 turn-result
        for (let j = 0; j < turnResults.length; j++) {
            turnResults[j].style.display = 'none';
            turnIcons[j].style.transform = 'rotate(0deg)';
        }

        // 如果当前的 turn-result 是关闭状态，则打开它
        if (!isCurrentOpen) {
            turnResults[i].style.display = 'block';
            turnIcons[i].style.transform = 'rotate(90deg)';
        }
    });
}
