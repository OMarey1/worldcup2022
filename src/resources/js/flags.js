const flagsContainer = document.getElementById("flags");
const FLAGS = ["argentina", "australia", "belgium", "brazil", "cameroon", "canada", "costa-rica", "croatia", "denmark", "ecuador", "england", "france", "germany", "ghana", "iran", "japan", "mexico", "morocco", "netherlands", "poland", "portugal", "qatar", "saudi-arabia", "senegal", "serbia", "south-korea", "spain", "switzerland", "tunisia", "uruguay", "usa", "wales"]

FLAGS.forEach(flag => {
    let flagLink = document.createElement("a");
    flagLink.href = `./src/resources/html/countries/${flag}.html`;
    flagLink.classList.add("flag");
    flagLink.id = `${flag}`;
    flagLink.draggable = false;

    let flagImg = document.createElement("img");
    flagImg.src = `./src/resources/flags/${flag}.png`;
    flagImg.alt = `${flag} flag`;
    flagImg.draggable = false;

    flagLink.appendChild(flagImg);
    flagsContainer.appendChild(flagLink);
});