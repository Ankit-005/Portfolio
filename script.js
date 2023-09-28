let rootEle = document.querySelector(":root");
let toggleBtn = document.querySelector(".toggleBtn");

rootEle.classList.add("light-mode");
toggleBtn.children[1].classList.add("displayNone");

function modeToggle(){
    rootEle.classList.toggle("dark-mode");
    toggleBtn.children[0].classList.toggle("displayNone");
    toggleBtn.children[1].classList.toggle("displayBlock");
}

let allProjectThumbnails = document.querySelectorAll(".thumbnail");

function setProjectThumbnails(allProjectThumbnail, projectName, color){
    allProjectThumbnail.style = `
        background: url(./Assets/ProjectThumbnails/${projectName}.png) no-repeat center;
        background-size: contain;
        background-color: ${color};
    `;
}

setProjectThumbnails(allProjectThumbnails[0],"project1","#863286");
setProjectThumbnails(allProjectThumbnails[1],"project2","#863286");
setProjectThumbnails(allProjectThumbnails[2],"project3","#863286");

window.addEventListener("scroll",() => {
    let navbar = document.querySelector("nav");

    if(window.scrollY > 0){
        navbar.classList.add("navShadow");
    }
    else{
        navbar.classList.remove("navShadow");
    }
});

let allNavMenuItems = document.querySelectorAll(".navMenuItem");
let navLogo = document.querySelector(".navLogo a");
let hireMe = document.querySelector(".hireMe");

function activeClassFunction(clickEle, addClassEle){
    clickEle.addEventListener("click",() => {
        allNavMenuItems.forEach((e) => {
            e.classList.remove("navActive");
        });
        addClassEle.classList.add("navActive");
    });
};

for(let i = 0; i < allNavMenuItems.length; i++){
    activeClassFunction(allNavMenuItems[i], allNavMenuItems[i]);
};

activeClassFunction(navLogo, allNavMenuItems[0]);
activeClassFunction(hireMe, allNavMenuItems[4]);

let revealAnimationElements = document.querySelectorAll("li, .name, .heading h1, .projectName");
revealAnimationElements.forEach((revealAnimationElement) => {
    revealAnimationElement.style = `
        position: relative;
        overflow: hidden;
    `;
    revealAnimationElement.classList.add("hiddenRevealAnimation");
});

let leftAnimationElements = document.querySelectorAll(".position, #aboutSection .left");
leftAnimationElements.forEach((leftAnimationElement) => {
    leftAnimationElement.classList.add("hiddenLeftAnimation");
});

let rightAnimationElements = document.querySelectorAll(".circle, #aboutSection .right");
rightAnimationElements.forEach((rightAnimationElement) => {
    rightAnimationElement.classList.add("hiddenRightAnimation");
});

let upAnimationElements = document.querySelectorAll(".about, .btns button, .links, .skills h1, .projectDesc, input, textarea");
upAnimationElements.forEach((upAnimationElement) => {
    upAnimationElement.classList.add("hiddenUpAnimation");
});

let progressBarAnimationElements = document.querySelectorAll(".progressBar");
progressBarAnimationElements.forEach((progressBarAnimationElement) => {
    progressBarAnimationElement.classList.add("hiddenProgressBarAnimation");
});

let thumbnailAnimationElements = document.querySelectorAll(".thumbnail");
thumbnailAnimationElements.forEach((thumbnailAnimationElement) => {
    thumbnailAnimationElement.classList.add("hiddenThumbnailAnimation");
});

function observeFunction(elements, className){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add(className);
            }
        });
    });
    elements.forEach((el) => observer.observe(el));
};

observeFunction(revealAnimationElements,"showRevealAnimation");
observeFunction(leftAnimationElements,"showLeftAnimation");
observeFunction(rightAnimationElements,"showRightAnimation");
observeFunction(upAnimationElements,"showUpAnimation");
observeFunction(progressBarAnimationElements,"showProgressBarAnimation");
observeFunction(thumbnailAnimationElements,"showThumbnailAnimation");

let hamburger = document.querySelectorAll(".hamburger, .navMenu, header");
let body = document.querySelector("body");

function hamburgerAnimation(){
    hamburger[2].classList.toggle("hamburgerAnimation");
    hamburger[1].classList.toggle("navMenuAnimation");
    hamburger[0].classList.toggle("navMenuBackgroundAnimation");
    body.classList.toggle("scrollOff");
};

allNavMenuItems.forEach((e) => {
    e.addEventListener("click", () => {
        hamburger[2].classList.toggle("hamburgerAnimation");
        hamburger[1].classList.toggle("navMenuAnimation");
        hamburger[0].classList.toggle("navMenuBackgroundAnimation");
        body.classList.toggle("scrollOff");
    });
});

function openEmailApp() {
    const senderName = document.querySelector('input[name="name"]').value;
    const senderEmail = document.querySelector('input[name="email"]').value;
    const senderPhoneNumber = document.querySelector('input[name="number"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if(senderName !== "" && senderEmail !== "" && senderPhoneNumber !== ""){  
        const mailtoLink = `mailto:ankitghosh1964@gmail.com?subject=Contact from ${senderName}&body=${message}%0A%0ASender Name: ${senderName}%0AEmail: ${senderEmail}%0APhone Number: ${senderPhoneNumber}`;
        
        window.location.href = mailtoLink;
        console.log("Success");
    }  
}