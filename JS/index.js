//keeping this old version so i can see how far ive come
/*
function navbardropdown(){
    let updateddropdown = "";
    for (let i = 0; i < dropdowncontent.length; i++){
        updateddropdown += `<a class="${cssLink}" href="${dropdowncontent[i]}.html">${dropdowncontent[i]}</a>`
    }
    navDropDownContent.innerHTML = updateddropdown;
}
navbardropdown();
*/

const navDropDownEl = document.querySelector(".dropdown-content");
const linkStyleClass = "link-el";
const dropDownContent = [
        "mypokedex",
        "todonotes",
        "quiz","drumkit",
        "gridmode",
        "bouncingballs",
        "fancylines",
        "mycalculator",
        "collision",
        "oppgaver",
        "animations",
        "games"];

function navBarDropDownMaker(targetEl, linkArray){
    linkArray.forEach(string => {
        let link = document.createElement("a")
        link.href = string + ".html"
        link.textContent = string
        link.className = linkStyleClass
        targetEl.append(link) 
    });
}

navBarDropDownMaker(navDropDownEl, dropDownContent)

const footerEL = document.querySelector("footer");

function footerMaker(){
    const link = document.createElement("a")
    link.href = "https://github.com/emilkodehode"
    link.textContent = "My Github"
    footerEL.append(link)
}

footerMaker()

const headerEL = document.querySelector("header");


function navMaker(){

}

// <nav>
//     <div class="nav-el">
//         <a class="link-el" href="contact.html">Contact</a>
//     </div>
//     <div class="nav-el dropdown-menu">
//         <span class="dropdown-label link-el">Projects</span>
//         <div class="dropdown-content">
//         </div>
//     </div>
//     <div class="nav-el">
//         <a class="link-el" href="index.html">Main</a>
//     </div>
//     <div class="nav-el">
//         <a class="link-el" href="aboutme.html">About</a>
//     </div>
// </nav>