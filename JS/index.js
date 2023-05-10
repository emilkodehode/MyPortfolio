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

const footerEL = document.querySelector("footer");

const dropDownContent = [
    "mypokedex",
    "minesweeper",
    "colorgame",
    "todonotes",
    "quiz",
    "drumkit",
    "bouncingballs",
    "fancylines",
    "mycalculator"
];
    
navMaker()
footerMaker()
        
function navBarDropDownMaker(targetEl, linkArray){
    linkArray.forEach(string => {
        let link = document.createElement("a")
        link.href = string + ".html"
        link.textContent = string
        link.className = "link-el link-drop"
        targetEl.append(link) 
    });
}


//need to make this into a function that takes in the data as objects so it easier to read what it makes. if i sterilize the wording on variables i can just send it in and let it grow.
function navMaker(){
    const navEl = document.createElement("nav")

    const mainEl = document.createElement("p")
    mainEl.textContent = "Hovedside"
    const btnHome = document.createElement("a")
    btnHome.classList = "btnstyling"
    btnHome.href = "index.html"
    const symbolHome = document.createElement("img")
    symbolHome.src = "./Images/symbols/home_FILL0_wght400_GRAD0_opsz48.svg"
    
    btnHome.append(mainEl, symbolHome)
    
    const dropdownElContainer = document.createElement("div")
    dropdownElContainer.className = "nav-el link-el dropdown-menu"

    const dropdownListEl = document.createElement("div")
    dropdownListEl.classList = "dropdown-content"
    
    const paraDropDown = document.createElement("p")
    paraDropDown.textContent = "Prosjekter"
    const btnDrop = document.createElement("div")
    btnDrop.className = "btnstyling"
    const symbolDrop = document.createElement("img")
    symbolDrop.src = "./Images/symbols/expand_more_FILL0_wght400_GRAD0_opsz48.svg"
    
    btnDrop.append(paraDropDown, symbolDrop)

    const contactEl = document.createElement("p")
    contactEl.textContent = "Kontakt Meg"
    const btnContact = document.createElement("a")
    btnContact.className = "btnstyling"
    btnContact.href = "contact.html"
    const symbolContact = document.createElement("img")
    symbolContact.src = "./Images/symbols/mail_FILL0_wght400_GRAD0_opsz48.svg"
    
    btnContact.append(contactEl, symbolContact)
    
    const aboutEl = document.createElement("p")
    aboutEl.textContent = "Mer Om Meg"
    const btnAbout = document.createElement("a")
    btnAbout.classList = "btnstyling"
    btnAbout.href = "aboutme.html"
    const symbolAbout = document.createElement("img")
    symbolAbout.src = "./Images/symbols/favorite_FILL0_wght400_GRAD0_opsz48.svg"

    btnAbout.append(aboutEl, symbolAbout)

    dropdownElContainer.append(btnDrop, dropdownListEl)
    
    navEl.append(btnHome, dropdownElContainer, btnContact, btnAbout)
    
    headerEL.append(navEl)
    
    navBarDropDownMaker(dropdownListEl, dropDownContent)
}

function footerMaker(){
    const link = document.createElement("a")
    link.href = "https://github.com/emilkodehode"
    link.textContent = "My Github"
    footerEL.append(link)
}

function projectCards(){
    /*link thumbnail. div img text link*/
    const card = document.createElement("div")

    const thumbnail = document.createElement("img")

    const description = document.createElement("p")

    const link = document.createElement("a")
    link.href = string + ".html"
    link.textContent = string
    link.className = "link-el link-drop"
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