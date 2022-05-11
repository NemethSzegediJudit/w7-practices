const menuButtonComponent = function () {
    return `<button id="menu-btn"></button>`
}

const beerSectionComponent = function (title, sub, text, id) {
    return `
    <section id="${id}">
        <h1 class="beerName">${title}</h1>
        <h2 class="beerCompany">${sub}</h2>
        <h3 class="beerType">${text}</h3>
    </section>
    `
}

const beerAnchorComponent = function (title, id) {
    return `
        <a href="#${id}">${title}</a>
        `
}

//A target ahhoz kell, ha új ablakban
//Olyan elemekre tudunk linkelni, aminek van ID-ja. Az ID elé kell kettőskereszt, hogy oldalon belül odanavigáljon.

//Ha egy függvényt úgy adunk át egy másik függvénynek, hogy ki van téve mögé a zárójel, akkor nem a függvényt adjuk át, hanem az eredményét, a return értékét. Tehát ha van zárójel, az nem callback function. Ha nincs zárójel, az callbackfunction. Ha van zárójel, akkor az abban a pillanatban le fog futni. 

//Attól, hogy létrehoztunk egy függvényt, még nem hívtuk meg.

const beerNavComponent = function (inner) {
    return `
    <nav>${inner}</nav>
    `
}

const menuButtonCklickEvent = function (event) {
    event.currentTarget.closest("#root").classList.toggle("menu-opened");
}

const loadEvent = function () {
    /*console.log(typeof beerSectionComponent);
    console.log(typeof beerSectionComponent());

    (function () {
        console.log("blablabla");
    })()*/

    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());

    const menuButtonEelement = document.getElementById("menu-btn");

    menuButtonEelement.addEventListener("click", menuButtonCklickEvent);

    let beerSections = "";
    for (const beer of beers.cards) {
        beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
    }

    rootElement.insertAdjacentHTML("beforeend", beerSections);

    let beerAnchors = "";
    for (const beer of beers.cards) {
        beerAnchors += beerAnchorComponent(beer.title);
    }

    rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors));
}

window.addEventListener("load", loadEvent)