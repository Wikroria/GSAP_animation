const navShopButton = document.querySelector(".nav-shop-button");
const navBlogButton = document.querySelector(".nav-shop-button")
const navOpen = document.querySelector(".nav-open");

/* we wanna click "shop" button and open nav-open

// const tween = TweenLite.to(object, time, {animate})

/*
const tween = TweenLite.to('.cover', 1,{
    width: "40%"
});
*/
/*
but we wanna make multiple animaitons

//const tl = new TimeLineLite();
 so we created timeline, but it automatically animate
add extra property
*/
const tl = new TimelineLite({ paused: true, reversed: true });
//reversed.true make it click just one time not twice to active animation

tl.to(".cover", 1, {
    width: "60%",
    ease: Power2.easeOut
}).to(".cover-text", 1.5, {
    opacity: 0,
    ease: Power1.easeOut
}, "-= 2"
).to("nav", 1, {
    height: "100%",
    ease: Power2.easeOut
}, "-= 0.5"
)
.fromTo(".nav-open", 0.5, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
},{
    opacity: 1,
    x: 0,
    onComplete : function(){
        navOpen.style.pointerEvents = 'auto';
        console.log('done');
    }
}
);
//navOpen is active after animate after adding onComplete
//right now animation is paused, we have to add start

/*navButton.addEventListener("click", () => {
    tl.play();
});
*/

navShopButton.addEventListener("click", (e) => {

    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }

    toggleTween(tl);
});

// is alows animation finished -> only then you can click and active it again
//it don't allow to break the animation

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
};