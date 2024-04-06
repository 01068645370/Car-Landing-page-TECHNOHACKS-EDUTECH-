let myItem = Array.from(document.querySelectorAll(".news .item img"));
let lightHouseContainer = document.getElementById("lightHouseContainer");
let lightHouse = document.getElementById("lightHouse");
let lBtn = document.getElementById('left-btn');
let rBtn = document.getElementById('right-btn');
let closeBtn = document.getElementById("close");
let cIndex;
let rWidth;
let toggleMenue = document.getElementById('toggle');

toggleMenue.addEventListener('click', function () {
    if (document.getElementById('links').style.display === 'flex') {
        document.getElementById('links').style.display = 'none'
    }
    else {
        document.getElementById('links').style.display = 'flex'

    }
})


var onresize = function () {
    width = document.body.clientWidth;
    height = document.body.clientHeight;
    rWidth = width;
}
window.addEventListener("resize", onresize);



for (let i = 0; i < myItem.length; i++) {
    myItem[i].addEventListener('click', function (eventInfo) {
        if (Number(rWidth) >= 992) {
            lightHouseContainer.style.display = 'flex';
            let src = eventInfo.target.getAttribute('src')
            cIndex = myItem.indexOf(eventInfo.target);
            lightHouse.style.backgroundImage = `url(${src})`;
        }

    });
}




rBtn.addEventListener('click', function () {

    cIndex++;
    if (cIndex == myItem.length - 1) {
        cIndex = 0;
    }
    let src = myItem[cIndex].getAttribute('src');
    lightHouse.style.backgroundImage = `url(${src})`;


})
lBtn.addEventListener('click', function () {

    cIndex--;
    if (cIndex < 0) {
        cIndex = myItem.length - 1;
    }
    let src = myItem[cIndex].getAttribute('src');
    lightHouse.style.backgroundImage = `url(${src})`;

})
closeBtn.addEventListener('click', function () {
    lightHouseContainer.style.display = 'none';
})