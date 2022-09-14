
//JavaScript for Toggle Menu

function showMenu(){
    document.getElementById("navLinks").style.transform = "scaleY(1)";
}
function hideMenu(){
    document.getElementById("navLinks").style.transform = "scaleY(0)";
}

//JavaScript for Mission & Vision

function showMissionVision(){
    document.getElementById("mission").style.transform = "translate(-50%, -50%) scaleX(1)";
}
function hideMissionVision(){
    document.getElementById("mission").style.transform = "translate(-50%, -50%) scaleX(0)";
}

//Footer Section Social Media Icons

const buttons = document.querySelectorAll('.social-buttons button');

buttons.forEach(button => {

    button.addEventListener('mousemove', e => {
        const x = e.layerX - 60;
        const y = e.layerY - 60;
        const i = e.target.querySelector('i');
        const bg = e.target.querySelector('.bg');
        i.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
        bg.style.transform = `translate(${x / 8}px, ${y / 8}px)`;
    });

    button.addEventListener('mouseenter', e => {
        const i = e.target.querySelector('i');
        const bg = e.target.querySelector('.bg');
        i.style.transition = 'all .15s ease';
        bg.style.transition = 'all .15s ease';
        setTimeout(() => {
            i.style.transition = '';
            bg.style.transition = '';    
        }, 150);
    });

    button.addEventListener('mouseleave', e => {
        const i = e.target.querySelector('i');
        const bg = e.target.querySelector('.bg');
        i.style.transition = 'all .25s ease';
        bg.style.transition = 'all .25s ease';
        i.style.transform = `translate(${0}px, ${0}px)`;
        bg.style.transform = `translate(${0}px, ${0}px)`;
        setTimeout(() => {
            i.style.transition = '';
            bg.style.transition = '';    
        }, 250);
    });

});

// Go to top -- onscroll function

window.onscroll = function () {myFunction()};

function myFunction(){
    if(document.documentElement.scrollTop > 300) {
        document.getElementById("scrollArrow").style.display = "inline";
    } else {
        document.getElementById("scrollArrow").style.display = "none";
    }
}