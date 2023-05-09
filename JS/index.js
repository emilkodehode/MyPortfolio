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

const headerEL = document.querySelector("header");


const dropDownContent = [
    "mypokedex",
    "todonotes",
        "quiz","drumkit",
        "gridmode",
        "bouncingballs",
        "fancylines",
        "mycalculator",
        "oppgaver",
        "animations",
        "games"];
        
navMaker()
        
function navBarDropDownMaker(targetEl, linkArray){
    linkArray.forEach(string => {
        let link = document.createElement("a")
        link.href = string + ".html"
        link.textContent = string
        link.className = "link-el link-drop"
        targetEl.append(link) 
    });
}
 

const footerEL = document.querySelector("footer");

function footerMaker(){
    const link = document.createElement("a")
    link.href = "https://github.com/emilkodehode"
    link.textContent = "My Github"
    footerEL.append(link)
}

footerMaker()
        
        
        
function navMaker(){
    const navEl = document.createElement("nav")
    const aboutEl = document.createElement("a")
    const dropdownElContainer = document.createElement("div")
    const mainEl = document.createElement("a")
    const contactEl = document.createElement("a")
    
    mainEl.classList = "nav-el link-el"
    mainEl.href = "index.html"
    mainEl.textContent = "Home"

    dropdownElContainer.className = "nav-el link-el dropdown-menu"

    const dropdownListEl = document.createElement("div")
    dropdownListEl.classList = "dropdown-content"
    
    const paraDropDown = document.createElement("p")
    paraDropDown.textContent = "Projects"
    paraDropDown.classList = "link-el"

    const symbol = document.createElement("img")
    symbol.src = "./Images/symbols/expand_more_FILL0_wght400_GRAD0_opsz48.svg"
    
    contactEl.classList = "nav-el link-el"
    contactEl.href = "contact.html"
    contactEl.textContent = "Contact"
    
    aboutEl.classList = "nav-el link-el"
    aboutEl.href = "aboutme.html"
    aboutEl.textContent = "About"
    
    dropdownElContainer.append(paraDropDown, symbol, dropdownListEl)
    navEl.append(mainEl, dropdownElContainer, contactEl, aboutEl)
    headerEL.append(navEl)
    navBarDropDownMaker(dropdownListEl, dropDownContent)
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