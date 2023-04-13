function navBar (balise) {
    let navBar = document.createElement('nav');
    navBar.setAttribute('class', 'nav-bar')
    balise.appendChild(navBar);
    let divNav = document.createElement('div');
    navBar.appendChild(divNav);
    divNav.setAttribute('class', 'div-nav');
    divNav.setAttribute('id', 'div-nav');
    let textNav = ['Home', 'News', 'Contact', 'About'];
    let linkNav = ['home','news','contact','about'];
    for (let nav = 0; nav<textNav.length; nav++){
        let linkNav = document.createElement('a');
        linkNav.setAttribute('href', '#');
        let textLink = document.createTextNode(textNav[nav]);
        linkNav.appendChild(textLink);
        divNav.appendChild(linkNav);
    }  
    let linkIcon = document.createElement('a');
    linkIcon.setAttribute('href', 'javascript:void(0)');
    linkIcon.setAttribute('class', 'icon');
    linkIcon.onclick = function() {
        let x = document.getElementById("div-nav");
        if (x.className === "div-nav") {
            x.className += " responsive";
        } else {
            x.className = "div-nav";
        }
    }
    let i = document.createElement('i');
    i.setAttribute('class', "fa fa-bars");
    linkIcon.appendChild(i);
    divNav.append(linkIcon);
        
    
}
function section (balise) {
    let section = document.createElement('section');
    section.setAttribute('class', 'section');
    section.setAttribute('id', 'section');
    balise.appendChild(section);
    
}

function title (text, balise) {
    let divTitle = document.createElement('div');
    divTitle.setAttribute('class', 'div-title');
    let title = document.createElement('h1');
    let titleText = document.createTextNode(text);
    title.appendChild(titleText);
    divTitle.appendChild(title);
    balise.appendChild(divTitle);
}

function footer (balise) {
    let footer = document.createElement('footer');
    footer.setAttribute('class', 'footer');
    balise.appendChild(footer);
}

export {navBar, section, title, footer};


