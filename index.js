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
let attractionTypeArrays = [thrillRides, gentleRides, characters, shows, kids, teens, adults, allAges];
let activeAttractions = [thrillRidesActive, gentleRidesActive, charactersActive, showsActive, kidsActive, teensActive, adultsActive, allAgesActive];
let attractionButtons = ["#thrill-rides-button", "#gentle-rides-button", "#characters-button", "#shows-button", "#kids-button", "#teens-button", "#adults-button", "#all-ages-button"];
let attractionTypeStrings = ["Thrill Rides", "Gentle Rides", "Characters", "Shows", "Kids", "Teens", "Adults", "All Ages"];;
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
function updateActiveRides() {
    attractionTypeArrays.forEach(i => {
        $(i).hide();
    });
    let activeRides = [];
    if (activeAttractions[0]) {
        thrillRides.forEach(i => {
            activeRides.push(i);
        });
    }
    if (activeAttractions[1]) {
        gentleRides.forEach(i => {
            activeRides.push(i);
        });
    }
    if (activeAttractions[2]) {
        characters.forEach(i => {
            activeRides.push(i);
        });
    }
    if (activeAttractions[3]) {
        shows.forEach(i => {
            activeRides.push(i);
        });
    }
    console.log(activeAttractions[4]);// active triggers not triggering
    $(activeRides).show();
    if (activeAttractions[4] || activeAttractions[5] || activeAttractions[6] || activeAttractions[7]) {
            //if(!activeAttractions[0] && !activeAttractions[1] && !activeAttractions[2] && !activeAttractions[3]) 
        if (!activeAttractions[4]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Kids`)) {
                    $(k).hide();
                }
            });
        } else {
            
        }
        if (!activeAttractions[5]) {
            console.log("YES")
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Teens`)) {
                    $(k).hide();
                }
            });
        }
        if (!activeAttractions[6]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Adults`)) {
                    $(k).hide();
                }
                if (teensActive && k.innerHTML.includes(`Teens`)) {
                    $(k).show();
                }
            });
        }
        if (!activeAttractions[7]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`All Ages`)) {
                    $(k).hide();
                }
            });
        }
    }
    console.log(activeRides);
}
// UPDATE VISIBILITY OF ATTRACTIONS IF THEY ARE ACTIVELY CLICKED ON OR NOT
function changeActiveAttractionButton(trigger) {
    for (let i = 0; i < attractionTypeStrings.length; i++) {
        if (trigger === attractionTypeStrings[i]) {
            if (activeAttractions[i]) {
                activeAttractions[i] = false;
                $(attractionButtons[i]).css('background-color','white');
                $(attractionButtons[i]).css('color', 'black');
            } else {
                activeAttractions[i] = true;
                console.log(attractionTypeStrings[i], activeAttractions[i]);
                $(attractionButtons[i]).css('background-color','var(--future-color)');
                $(attractionButtons[i]).css('color', 'white');
            }
        }
    }
    updateActiveRides();
}
$("#thrill-rides-button").click(function() {
    changeActiveAttractionButton("Thrill Rides", true);
});
$("#gentle-rides-button").click(function() {
    changeActiveAttractionButton("Gentle Rides", true);
});
$("#characters-button").click(function() {
    changeActiveAttractionButton("Characters", true);
});
$("#shows-button").click(function() {
    changeActiveAttractionButton("Shows", true);
});
$("#kids-button").click(function() {
    changeActiveAttractionButton("Kids", false);
});
$("#teens-button").click(function() {
    changeActiveAttractionButton("Teens", false);
});
$("#adults-button").click(function() {
    changeActiveAttractionButton("Adults", false);
});
$("#all-ages-button").click(function() {
    changeActiveAttractionButton("All Ages", false);
});
