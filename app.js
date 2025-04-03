
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});







let menuOptions = document.querySelectorAll('.menu-options-link');

menuOptions.forEach(link => {
    let Txt = link.querySelector('.text');
    // let TxtClone = link.querySelector('.textclone');
    let svgIcon = link.querySelectorAll('.icon svg path');

    link.addEventListener('mouseenter',()=>{
        gsap.to(Txt,{
            color:'#fff'
        });
        gsap.to(svgIcon,{
            fill:'#fff'
        });
    });
    link.addEventListener('mouseleave',()=>{
        gsap.to(Txt,{
            color:'#949494'
        });
        gsap.to(svgIcon,{
            fill:'#949494'
        });
    });

});

let termsLinks = document.querySelectorAll('#terms a');

termsLinks.forEach(links => {
    let linksTxt = links.querySelector('.text');
    // console.log(linksTxt);
    

    links.addEventListener('mouseenter',()=>{
        gsap.to(linksTxt,{
            color:'#fff'
        });
    });
    links.addEventListener('mouseleave',()=>{
        gsap.to(linksTxt,{
            color:'#949494'
        });
    });
});

let bonusBtn = document.querySelector('#bonus-btn');
let btnImg = document.querySelector('#bonus-btn a img');

bonusBtn.addEventListener('mouseenter',()=>{
    gsap.to(btnImg,{
        scale:1.1,
        duration:0.4,
        ease:'expo.out'
    })
});
bonusBtn.addEventListener('mouseleave',()=>{
    gsap.to(btnImg,{
        scale:1,
        duration:0.4,
    })
});

// nav-bottom animations 
let navLeftBtns = document.querySelectorAll('#nav-bottom-left a');

navLeftBtns.forEach(btn => {
    let btnTxt = btn.querySelector('.text');
    let btnTxtClone = btn.querySelector('.text-clone');

    btn.addEventListener('mouseenter',()=>{
        gsap.to(btnTxt,{
            opacity:0,
            y:'-100',
            duration:0.4
        });
        gsap.to(btnTxtClone,{
            top:'50%',
            translateY:'-50%',
            opacity:1,
            duration:0.4
        });
    });
    btn.addEventListener('mouseleave',()=>{
        gsap.to(btnTxt,{
            opacity:1,
            y:0,
            duration:0.4
        });
        gsap.to(btnTxtClone,{
            top:'100%',
            translateY:'0%',
            opacity:0,
            duration:0.4
        });
    });
});

let walletBtn = document.querySelector('#walletBtn');
let walletTxt = walletBtn.querySelector('.text');
let walletTxtClone = walletBtn.querySelector('.text-clone');
walletBtn.addEventListener('mouseenter',()=>{
    gsap.to(walletTxt,{
        opacity:0,
        y:'-100',
        duration:0.4
    });
    gsap.to(walletTxtClone,{
        top:'50%',
        translateY:'-50%',
        opacity:1,
        duration:0.4
    });
});

walletBtn.addEventListener('mouseleave',()=>{
    gsap.to(walletTxt,{
        opacity:1,
        y:0,
        duration:0.4
    });
    gsap.to(walletTxtClone,{
        top:'100%',
        translateY:'0%',
        opacity:0,
        duration:0.4
    });
});


function startLoader() {
    gsap.fromTo('#loaderImg',
        {
            y:100,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.4
        }
    );

    gsap.to('#preloader',{
        delay:1,
        top:'-100%' 
    });
}

startLoader();