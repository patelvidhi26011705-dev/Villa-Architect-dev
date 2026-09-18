// Sidebar menu
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
    });
}

if (sidebarCloseBtn && sidebar) {
    sidebarCloseBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
}
const slider = document.querySelector(".product-slider");
const cards = document.querySelectorAll(".product-card");

let index = 0;
const visibleCards = 3;

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if(next && prev && slider){

    next.addEventListener("click", () => {

        if(index < cards.length - visibleCards){
            index++;

            slider.style.transform =
            `translateX(-${index * (100 / visibleCards)}%)`;
        }
    });

    prev.addEventListener("click", () => {

        if(index > 0){
            index--;

            slider.style.transform =
            `translateX(-${index * (100 / visibleCards)}%)`;
        }
    });
}
//villa's pop page
const modal= document.querySelector(".model");
const button=document.querySelectorAll(".book-btn");

//add click event
button.forEach(buttons=>{
    buttons.addEventListener("click",()=>{
        modal.style.display="flex";
        document.body.style.overflow= "hidden";

    });
});

//close btn popup
const closebtn= document.querySelectorAll(".close");
    closebtn.forEach(btn=>{
        btn.addEventListener("click",()=>{
        modal.style.display= "none";
});

});

const payment=document.querySelector(".payment-box");
const paymentbtn=document.querySelectorAll(".paybtn");

paymentbtn.forEach(paybutton=>{
    paybutton.addEventListener("click",()=>{
        payment.style.display="block";
    
    });
});
const confirmpayment=document.querySelector(".payment");
confirmpayment.addEventListener("click",()=>{
    payment.style.display="none";
});

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
