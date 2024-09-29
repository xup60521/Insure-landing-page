import gsap from "gsap";
import CloseIcon from "/images/icon-close.svg";
import HamburgerIcon from "/images/icon-hamburger.svg";

const menuBtn = document.getElementById("menu-btn")! as HTMLImageElement;
const menu = document.getElementById("menu")!;
const body = document.getElementById("body")!;

let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!isMenuOpen) {
        menuBtn.src = CloseIcon;
        menuBtn.alt = "close menu button";
        body.style.overflow = "hidden"
        gsap.to(menu, {
            height: "100vh",
            ease: "power2.out",
            duration: 0.5,
            onComplete: () => {
                isMenuOpen = true;
            },
        });
    } else {
        menuBtn.src = HamburgerIcon;
        menuBtn.alt = "menu button";
        body.style.overflow = ""
        gsap.to(menu, {
            height: "0",
            ease: "power2.out",
            duration: 0.5,
            onComplete: () => {
                isMenuOpen = false;
            },
        });
    }
});
