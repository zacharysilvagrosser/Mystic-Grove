function createAttraction(img, title, color, land, ages, type) {
    document.getElementById("attractions-container").innerHTML += `
    <div class="attraction row">
        <img class="col-3" src="../imgs/${img}.jpeg">
        <div class="col-8">
            <h1>${title}</h1>
            <h3 class="${color}">${land}</h3>
            <h5>${ages}</h5>
            <p>${type}</p>
        </div>
        <div class="col-1">
            <i class="fa fa-chevron-right"></i>
        </div>
    </div>`
}
createAttraction("moon-landing", "Moon Landing", "future-world", "Future World", "Teens, Adults", "Thrill Ride");
createAttraction("lightcycle-race", "Lightcycle Race", "future-world", "Future World", "Teens, Adults", "Thrill Ride");
createAttraction("blast-from-the-past", "Blast From the Past", "future-world", "Future World", "All Ages", "Thrill Ride");
createAttraction("space-race", "Space Race", "future-world", "Future World", "Teens, Adults", "Thrill Ride");
createAttraction("alien-encounter", "Alien Encounter", "future-world", "Future World", "All Ages", "Gentle Ride");
createAttraction("star-academy-training", "Star Academy Training", "future-world", "Future World", "All Ages", "Gentle Ride");
createAttraction("aliens", "Aliens", "future-world", "Future World", "All Ages", "Character");
createAttraction("cyborg", "Cyborg", "future-world", "Future World", "All Ages", "Character");
createAttraction("light-the-night", "Light the Night", "future-world", "Future World", "All Ages", "Show");
createAttraction("rocket-launch", "Rocket Launch", "future-world", "Future World", "All Ages", "Show");
createAttraction("unicorn-carousel", "Unicorn Carousel", "fae-forest", "Fae Forest", "All Ages", "Gentle Ride");
createAttraction("creatures-of-the-forest", "Creatures of the Forest", "fae-forest", "Fae Forest", "All Ages", "Gentle Ride");
createAttraction("fae-river-journey", "Fae River Journey", "fae-forest", "Fae Forest", "All Ages", "Gentle Ride");
createAttraction("timberfall-slides", "Timberfall Slides", "fae-forest", "Fae Forest", "Kids", "Gentle Ride");
createAttraction("tree-trunk-swings", "Tree Trunk Swings", "fae-forest", "Fae Forest", "All Ages", "Gentle Ride");
createAttraction("sidewinder-spin", "Sidewinder Spin", "fae-forest", "Fae Forest", "All Ages", "Thrill Ride");
createAttraction("dragon", "Dragon", "fae-forest", "Fae Forest", "All Ages", "Character");
createAttraction("knight", "Knight", "fae-forest", "Fae Forest", "All Ages", "Character");
createAttraction("ceremony-of-the-fairies", "Ceremony of the Fairies", "fae-forest", "Fae Forest", "Kids", "Show");
createAttraction("enchant-the-night", "Enchant The Night", "fae-forest", "Fae Forest", "All Ages", "Show");
createAttraction("princess-celeste", "Princess Celeste", "pirate-island", "Pirate Island", "Kids", "Character");
createAttraction("pirates-journey", "Pirate's Journey", "pirate-island", "Pirate Island", "All Ages", "Gentle Ride");
createAttraction("skull-rock-wave-pool", "Skull Rock Wave Pool", "pirate-island", "Pirate Island", "All Ages", "Gentle Ride");
createAttraction("captain-cooks-climbing-course", "Captain Cook's Climbing Course", "pirate-island", "Pirate Island", "Kids", "Gentle Ride");
createAttraction("pirate-plunge", "Pirate Plunge", "pirate-island", "Pirate Island", "All Ages", "Thrill Ride");
createAttraction("siren-falls", "Siren Falls", "pirate-island", "Pirate Island", "All Ages", "Thrill Ride");
createAttraction("electric-eel", "Electric Eel Water Coaster", "pirate-island", "Pirate Island", "All Ages", "Thrill Ride");
createAttraction("captain-brown-beard", "Captain Brown Beard", "pirate-island", "Pirate Island", "Kids", "Character");
createAttraction("mermaid", "Mermaid", "pirate-island", "Pirate Island", "Kids", "Character");
createAttraction("aqua-world", "Aqua World", "pirate-island", "Pirate Island", "All Ages", "Show");
createAttraction("western-expedition", "Western Expedition", "the-old-frontier", "The Old Frontier", "All Ages", "Gentle Ride");
createAttraction("western-whirl", "Western Whirl", "the-old-frontier", "The Old Frontier", "All Ages", "Gentle Ride");
createAttraction("runaway-railway", "Runaway Railway", "the-old-frontier", "The Old Frontier", "All Ages", "Thrill Ride");
createAttraction("dynamite-mineshaft-plunge", "Dynamite Mineshaft Plunge", "the-old-frontier", "The Old Frontier", "Teens, Adults", "Thrill Ride");
createAttraction("horse-drawn-carriage", "Horse Drawn Carriage", "the-old-frontier", "The Old Frontier", "All Ages", "Gentle Ride");
createAttraction("park-ranger", "Park Ranger", "the-old-frontier", "The Old Frontier", "Kids", "Character");
createAttraction("cowboy", "Cowboy", "the-old-frontier", "The Old Frontier", "All Ages", "Character");
createAttraction("cowboy-stunt-show", "Cowboy Stunt Show", "the-old-frontier", "The Old Frontier", "All Ages", "Show");
createAttraction("spider-spin", "Spider Spin", "hallowwood", "Hallowwood", "All Ages", "Gentle Ride");
createAttraction("spooky-mansion", "Spooky Mansion", "hallowwood", "Hallowwood", "All Ages", "Gentle Ride");
createAttraction("descend-to-hell", "Descend to Hell", "hallowwood", "Hallowwood", "Adults", "Thrill Ride");
createAttraction("hallowwood-pumpkin-patch", "Hallowwood Pumpkin Patch", "hallowwood", "Hallowwood", "Kids", "Gentle Ride");
createAttraction("witches-broom-ride", "Witch's Broom Ride", "hallowwood", "Hallowwood", "All Ages", "Thrill Ride");
createAttraction("pumpkinhead", "Pumpkin Head", "hallowwood", "Hallowwood", "All Ages", "Character");
createAttraction("grim-ghoul", "Grim Ghoul", "hallowwood", "Hallowwood", "All Ages", "Character");
createAttraction("skelly", "Skelly", "hallowwood", "Hallowwood", "All Ages", "Character");
createAttraction("king-spookly", "King Spookly", "hallowwood", "Hallowwood", "Kids", "Character");
createAttraction("the-monster-mash", "The Monster Mash", "hallowwood", "Hallowwood", "All Ages", "Show");
// SORT ATTRACTIONS INTO ARRAYS BY ATTRACTION TYPE
let [thrillRides, gentleRides, characters, shows, kids, teens, adults, allAges] = [[], [], [], [], [], [], [], []];
let [thrillRidesActive, gentleRidesActive, charactersActive, showsActive, kidsActive, teensActive, adultsActive, allAgesActive] = [false, false, false, false, false, false, false, false];
let attractionTypes = [thrillRides, gentleRides, characters, shows];
let ageTypes = [kids, teens, adults, allAges];
let activeAttractions = [thrillRidesActive, gentleRidesActive, charactersActive, showsActive];
let activeAges = [kidsActive, teensActive, adultsActive, allAgesActive]
let attractionButtons = ["#thrill-rides-button", "#gentle-rides-button", "#characters-button", "#shows-button", "#kids-button", "#teens-button", "#adults-button", "#all-ages-button"];
let ageButtons = ["#kids-button", "#teens-button", "#adults-button", "#all-ages-button"];
function sortAttractions(attractionType, array) {
    $('.attraction').each (function() {
        if (this.innerHTML.includes(`${attractionType}`)) {
            array.push(this);
        }
    });
}
sortAttractions("Thrill Ride", thrillRides);
sortAttractions("Gentle Ride", gentleRides);
sortAttractions("Character", characters);
sortAttractions("Show", shows);
sortAttractions("Kids", kids);
sortAttractions("Teens", teens);
sortAttractions("Adults", adults);
sortAttractions("All Ages", allAges);
// UPDATE VISIBILITY OF ATTRACTIONS IF THEY ARE ACTIVELY CLICKED ON OR NOT
function changeAttractionVisibility(trigger, attraction) {
    if (trigger === "Thrill Rides") {
        if (activeAttractions[0]) {
            activeAttractions[0] = false;
        } else {
            activeAttractions[0] = true;
        }
    } else if (trigger === "Gentle Rides") {
        if (activeAttractions[1]) {
            activeAttractions[1] = false;
        } else {
            activeAttractions[1] = true;
        }
    } else if (trigger === "Characters") {
        if (activeAttractions[2]) {
            activeAttractions[2] = false;
        } else {
            activeAttractions[2] = true;
        }
    } else if (trigger === "Shows") {
        if (activeAttractions[3]) {
            activeAttractions[3] = false;
        } else {
            activeAttractions[3] = true;
        }
    } else if (trigger === "Kids") {
        if (activeAges[0]) {
            activeAges[0] = false;
        } else {
            activeAges[0] = true;
        }
    } else if (trigger === "Teens") {
        if (activeAges[1]) {
            activeAges[1] = false;
        } else {
            activeAges[1] = true;
        }
    } else if (trigger === "Adults") {
        if (activeAges[2]) {
            activeAges[2] = false;
        } else {
            activeAges[2] = true;
        }
    } else if (trigger === "All Ages") {
        if (activeAges[3]) {
            activeAges[3] = false;
        } else {
            activeAges[3] = true;
        }
    }
    if (attraction) {
        for (let i = 0; i < attractionTypes.length; i++) {
            if (activeAttractions[i]) {
                $(attractionTypes[i]).show();
                $(attractionButtons[i]).css('background-color','var(--future-color)');
                $(attractionButtons[i]).css('color', 'white');
            } else {
                $(attractionTypes[i]).hide();
                $(attractionButtons[i]).css('background-color','white');
                $(attractionButtons[i]).css('color', 'black');
            }
        }
    } else {
        for (let i = 0; i < ageTypes.length; i++) {
            if (activeAges[i]) {
                $(ageTypes[i]).show();
                $(ageButtons[i]).css('background-color','var(--future-color)');
                $(ageButtons[i]).css('color', 'white');
            } else {
                $(ageTypes[i]).hide();
                $(ageButtons[i]).css('background-color','white');
                $(ageButtons[i]).css('color', 'black');
            }
        }
    }
}
$("#thrill-rides-button").click(function() {
    changeAttractionVisibility("Thrill Rides", true);
});
$("#gentle-rides-button").click(function() {
    changeAttractionVisibility("Gentle Rides", true);
});
$("#characters-button").click(function() {
    changeAttractionVisibility("Characters", true);
});
$("#shows-button").click(function() {
    changeAttractionVisibility("Shows", true);
});
$("#kids-button").click(function() {
    changeAttractionVisibility("Kids", false);
});
$("#teens-button").click(function() {
    changeAttractionVisibility("Teens", false);
});
$("#adults-button").click(function() {
    changeAttractionVisibility("Adults", false);
});
$("#all-ages-button").click(function() {
    changeAttractionVisibility("All Ages", false);
});
