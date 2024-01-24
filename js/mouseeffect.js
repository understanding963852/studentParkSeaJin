var ripple6 = new RippleEffect({
    parent: document.querySelector('.showmain'),
    texture: 'img/showmainimg.webp',
    intensity: 1.2, //1.2
    strength:0.1,//5
    waveSpeed: 0.008,//0.008
    hover: false
});
document.querySelector('.start').addEventListener('click', ripple6.start);
document.querySelector('.start').click();
document.querySelector('.stop').addEventListener('click', ripple6.stop);
document.querySelector('.showmain').addEventListener('mouseenter', ripple6.stop);
document.querySelector('.showmain').addEventListener('mouseleave', ripple6.start);