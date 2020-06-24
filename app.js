const globalState = {
    menu: false,
    tab: undefined
};

const navShopButton = document.querySelector(".nav-shop-button");
const navBlogButton = document.querySelector(".nav-blog-button")
const navOpen = document.querySelector(".nav-open");
const navButtons = document.querySelectorAll(".nav-button")
const tl = new TimelineLite({ paused: true, reversed: true });


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
    }
}
);

function handleClick(state, tab){
    console.log(globalState);
    if (state.menu === true){
        if (state.tab === tab){
            state.menu = false;
            toggleMenu(tl, false);
        } else {
            state.menu = true;
        }
    } else {
        state.menu = true;
        toggleMenu(tl, true);
    } 
    state.tab = tab;
}

navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const tab = e.target.dataset.tab;
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return true;
    }
    handleClick(globalState, tab)
    });
})
function toggleMenu(tween, open = true){
    open ? tween.play() : tween.reverse();
};

function toggleTab(tabName){
getElementById("kontakt").css('display:block');
};