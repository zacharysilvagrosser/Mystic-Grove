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
createAttraction("alien-encounter", "Alien Encounter", "future-world", "Future World", "All Ages", "Gentle Ride");
createAttraction("aqua-world", "Aqua World", "pirate-island", "Pirate Island", "All Ages", "Show");
createAttraction("blast-from-the-past", "Blast From the Past", "future-world", "Future World", "All Ages", "Thrill Ride");
createAttraction("captain-brown-beard", "Captain Brown Beard", "pirate-island", "Pirate Island", "Kids", "Character");
createAttraction("captain-cooks-climbing-course", "Captain Cook's Climbing Course", "pirate-island", "Pirate Island", "Kids", "Gentle Ride");
createAttraction("ceremony-of-the-fairies", "Ceremony of the Fairies", "fae-forest", "Fae Forest", "Kids", "Show");
createAttraction("creatures-of-the-forest", "Creatures of the Forest", "fae-forest", "Fae Forest", "All Ages", "Gentle Ride");
createAttraction("cowboy", "Cowboy", "wild-west", "Wild West", "All Ages", "Character");
createAttraction("cowboy-stunt-show", "Cowboy Stunt Show", "wild-west", "Wild West", "All Ages", "Show");
createAttraction("cyborg", "Cyborg", "future-world", "Future World", "All Ages", "Character");
createAttraction("descend-to-hell", "Descend to Hell", "hallowwood", "Hallowwood", "Adults", "Thrill Ride");
createAttraction("dragon", "Dragon", "fae-forest", "Fae Forest", "All Ages", "Character");
createAttraction("dynamite-mineshaft-plunge", "Dynamite Mineshaft Plunge", "wild-west", "Wild West", "Teens, Adults", "Thrill Ride");
createAttraction("electric-eel", "Electric Eel Water Coaster", "pirate-island", "Pirate Island", "All Ages", "Thrill Ride");
createAttraction("enchant-the-night", "Enchant The Night", "fae-forest", "Fae Forest", "All Ages", "Show");
createAttraction("fae-river-journey", "Fae River Journey", "fae-forest", "Fae Forest", "All Ages", "Gentle Ride");
createAttraction("grim-ghoul", "Grim Ghoul", "hallowwood", "Hallowwood", "All Ages", "Character");
createAttraction("hallowwood-pumpkin-patch", "Hallowwood Pumpkin Patch", "hallowwood", "Hallowwood", "Kids", "Gentle Ride");
createAttraction("horse-drawn-carriage", "Horse Drawn Carriage", "wild-west", "Wild West", "All Ages", "Gentle Ride");
createAttraction("king-spookly", "King Spookly", "hallowwood", "Hallowwood", "Kids", "Character");
createAttraction("knight", "Knight", "fae-forest", "Fae Forest", "All Ages", "Character");
createAttraction("lightcycle-race", "Lightcycle Race", "future-world", "Future World", "Teens, Adults", "Thrill Ride");
createAttraction("light-the-night", "Light the Night", "future-world", "Future World", "All Ages", "Show");
createAttraction("martians", "Martians", "future-world", "Future World", "All Ages", "Character");
createAttraction("mermaid", "Mermaid", "pirate-island", "Pirate Island", "Kids", "Character");
createAttraction("moon-landing", "Moon Landing", "future-world", "Future World", "Teens, Adults", "Thrill Ride");
createAttraction("park-ranger", "Park Ranger", "wild-west", "Wild West", "Kids", "Character");
createAttraction("pirate-plunge", "Pirate Plunge", "pirate-island", "Pirate Island", "All Ages", "Thrill Ride");
createAttraction("pirates-journey", "Pirate's Journey", "pirate-island", "Pirate Island", "All Ages", "Gentle Ride");
createAttraction("princess-celeste", "Princess Celeste", "fae-forest", "Fae Forest", "Kids", "Character");
createAttraction("pumpkinhead", "Pumpkin Head", "hallowwood", "Hallowwood", "All Ages", "Character");
createAttraction("rocket-launch", "Rocket Launch", "future-world", "Future World", "All Ages", "Show");
createAttraction("runaway-railway", "Runaway Railway", "wild-west", "Wild West", "All Ages", "Thrill Ride");
createAttraction("space-race", "Space Race", "future-world", "Future World", "Teens, Adults", "Thrill Ride");
createAttraction("sidewinder-spin", "Sidewinder Spin", "fae-forest", "Fae Forest", "All Ages", "Thrill Ride");
createAttraction("siren-falls", "Siren Falls", "pirate-island", "Pirate Island", "All Ages", "Thrill Ride");
createAttraction("spider-spin", "Spider Spin", "hallowwood", "Hallowwood", "All Ages", "Gentle Ride");
createAttraction("spooky-mansion", "Spooky Mansion", "hallowwood", "Hallowwood", "All Ages", "Gentle Ride");
createAttraction("star-academy-training", "Star Academy Training", "future-world", "Future World", "All Ages", "Gentle Ride");
createAttraction("skelly", "Skelly", "hallowwood", "Hallowwood", "All Ages", "Character");
createAttraction("skull-rock-wave-pool", "Skull Rock Wave Pool", "pirate-island", "Pirate Island", "All Ages", "Gentle Ride");
createAttraction("the-monster-mash", "The Monster Mash", "hallowwood", "Hallowwood", "All Ages", "Show");
createAttraction("timberfall-slides", "Timberfall Slides", "fae-forest", "Fae Forest", "Kids", "Gentle Ride");
createAttraction("tree-trunk-swings", "Tree Trunk Swings", "fae-forest", "Fae Forest", "All Ages", "Gentle Ride");
createAttraction("unicorn-carousel", "Unicorn Carousel", "fae-forest", "Fae Forest", "All Ages", "Gentle Ride");
createAttraction("western-expedition", "Western Expedition", "wild-west", "Wild West", "All Ages", "Gentle Ride");
createAttraction("western-whirl", "Western Whirl", "wild-west", "Wild West", "All Ages", "Gentle Ride");
createAttraction("witches-broom-ride", "Witch's Broom Ride", "hallowwood", "Hallowwood", "All Ages", "Thrill Ride");
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

let activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
for (let i = 0; i < activeLand.length; i++) {
    activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
}

function changeActiveLand() {
    switch (document.getElementById("attraction-land-sorter").value) {
        case "fae-forest":
            activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
            for (let i = 0; i < activeLand.length; i++) {
                activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
            }
            activeLand.join(" ");
            for (let i = 0; i < attractionTypeArrays.length; i++) {
                for (let j = 0; j < attractionTypeArrays[i].length; j++) {
                    if (!attractionTypeArrays[i][j].innerHTML.includes(`Fae Forest`)) {
                        $(attractionTypeArrays[i][j]).hide();
                    } else if (attractionTypeArrays[i][j].innerHTML.includes(`Fae Forest`)) {
                        activeRides.push(attractionTypeArrays[i][j]);
                        if (!activeAttractions[0] && !activeAttractions[1] && !activeAttractions[2] && !activeAttractions[3] && !activeAttractions[4] && !activeAttractions[5] && !activeAttractions[6] && !activeAttractions[7]) {
                            $(attractionTypeArrays[i][j]).show();
                        } else {
                            updateActiveRides();
                        }
                    }
                }
            }
            break;
        case "future-world":
            activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
            for (let i = 0; i < activeLand.length; i++) {
                activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
            }
            activeLand.join(" ");
            for (let i = 0; i < attractionTypeArrays.length; i++) {
                for (let j = 0; j < attractionTypeArrays[i].length; j++) {
                    if (!attractionTypeArrays[i][j].innerHTML.includes(`Future World`)) {
                        $(attractionTypeArrays[i][j]).hide();
                    } else if (attractionTypeArrays[i][j].innerHTML.includes(`Future World`)) {
                        activeRides.push(attractionTypeArrays[i][j]);
                        if (!activeAttractions[0] && !activeAttractions[1] && !activeAttractions[2] && !activeAttractions[3] && !activeAttractions[4] && !activeAttractions[5] && !activeAttractions[6] && !activeAttractions[7]) {
                            $(attractionTypeArrays[i][j]).show();
                        } else {
                            updateActiveRides();
                        }
                    }
                }
            }
            break;
        case "hallowwood":
            activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
            for (let i = 0; i < activeLand.length; i++) {
                activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
            }
            activeLand.join(" ");
            for (let i = 0; i < attractionTypeArrays.length; i++) {
                for (let j = 0; j < attractionTypeArrays[i].length; j++) {
                    if (!attractionTypeArrays[i][j].innerHTML.includes(`Hallowwood`)) {
                        $(attractionTypeArrays[i][j]).hide();
                    } else if (attractionTypeArrays[i][j].innerHTML.includes(`Hallowwood`)) {
                        activeRides.push(attractionTypeArrays[i][j]);
                        if (!activeAttractions[0] && !activeAttractions[1] && !activeAttractions[2] && !activeAttractions[3] && !activeAttractions[4] && !activeAttractions[5] && !activeAttractions[6] && !activeAttractions[7]) {
                            $(attractionTypeArrays[i][j]).show();
                        } else {
                            updateActiveRides();
                        }
                    }
                }
            }
            break;
        case "pirate-island":
            activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
            for (let i = 0; i < activeLand.length; i++) {
                activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
            }
            activeLand.join(" ");
            for (let i = 0; i < attractionTypeArrays.length; i++) {
                for (let j = 0; j < attractionTypeArrays[i].length; j++) {
                    if (!attractionTypeArrays[i][j].innerHTML.includes(`Pirate Island`)) {
                        $(attractionTypeArrays[i][j]).hide();
                    } else if (attractionTypeArrays[i][j].innerHTML.includes(`Pirate Island`)) {
                        activeRides.push(attractionTypeArrays[i][j]);
                        if (!activeAttractions[0] && !activeAttractions[1] && !activeAttractions[2] && !activeAttractions[3] && !activeAttractions[4] && !activeAttractions[5] && !activeAttractions[6] && !activeAttractions[7]) {
                            $(attractionTypeArrays[i][j]).show();
                        } else {
                            updateActiveRides();
                        }
                    }
                }
            }
        break;
        case "wild-west":
            activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
            for (let i = 0; i < activeLand.length; i++) {
                activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
            }
            activeLand.join(" ");
            for (let i = 0; i < attractionTypeArrays.length; i++) {
                for (let j = 0; j < attractionTypeArrays[i].length; j++) {
                    if (!attractionTypeArrays[i][j].innerHTML.includes(`Wild West`)) {
                        $(attractionTypeArrays[i][j]).hide();
                    } else if (attractionTypeArrays[i][j].innerHTML.includes(`Wild West`)) {
                        activeRides.push(attractionTypeArrays[i][j]);
                        if (!activeAttractions[0] && !activeAttractions[1] && !activeAttractions[2] && !activeAttractions[3] && !activeAttractions[4] && !activeAttractions[5] && !activeAttractions[6] && !activeAttractions[7]) {
                            $(attractionTypeArrays[i][j]).show();
                        } else {
                            updateActiveRides();
                        }
                    }
                }
            }
            break;
        default:
            activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
            for (let i = 0; i < activeLand.length; i++) {
                activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
            }
            activeLand.join(" ");
            for (let i = 0; i < attractionTypeArrays.length; i++) {
                for (let j = 0; j < attractionTypeArrays[i].length; j++) {
                    activeRides.push(attractionTypeArrays[i][j]);
                    if (!activeAttractions[0] && !activeAttractions[1] && !activeAttractions[2] && !activeAttractions[3] && !activeAttractions[4] && !activeAttractions[5] && !activeAttractions[6] && !activeAttractions[7]) {
                        $(attractionTypeArrays[i][j]).show();
                    }
                }
            }
            break;
    }
}
let activeRides = [];
// SHOW ONLY ATTRACTIONS THAT MATCH THE FILTER CRITERIA
function updateActiveRides() {
    attractionTypeArrays.forEach(i => {
        $(i).hide();
    });
    activeRides = [];
    // ADD ALL ATTRACTIONS WITH BUTTONS THAT ARE PRESSED
    for (let i = 0; i < activeAttractions.length; i++) {
        if (activeAttractions[i] || !activeAttractions[0] && !activeAttractions[1] && !activeAttractions[2] && !activeAttractions[3] && !activeAttractions[4] && !activeAttractions[5] && !activeAttractions[6] && !activeAttractions[7]) {
            for (let j = 0; j < attractionTypeArrays[i].length; j++) {
                if (attractionTypeArrays[i][j].innerHTML.includes(activeLand.join(" ")) || activeLand.join(" ") === "All Lands") {
                    console.log("YAR");
                    attractionTypeArrays[i].forEach(j => {
                        activeRides.push(j);
                    });
                }
            }
        }
    }
    $(activeRides).show();
    console.log(activeRides);
    switch (document.getElementById("attraction-land-sorter").value) {
        case "fae-forest":
            activeRides.forEach(i => {
                if (!i.innerHTML.includes(`Fae Forest`)) {
                    $(i).hide();
                }
            });
            break;
        case "future-world":
            activeRides.forEach(i => {
                if (!i.innerHTML.includes(`Future World`)) {
                    $(i).hide();
                }
            });
            break;
        case "hallowwood":
            activeRides.forEach(i => {
                if (!i.innerHTML.includes(`Hallowwood`)) {
                    $(i).hide();
                }
            });
            break;
        case "pirate-island":
            activeRides.forEach(i => {
                if (!i.innerHTML.includes(`Pirate Island`)) {
                    $(i).hide();
                }
            });
        break;
        case "wild-west":
            activeRides.forEach(i => {
                if (!i.innerHTML.includes(`Wild West`)) {
                    $(i).hide();
                }
            });
            break;
        default:
            activeRides.forEach(i => {
                    $(i).show();
            });
            break;
    }
    // HIDE ALL ATTRACTION TYPES THAT INCLUDE KEYWORDS
    if (activeAttractions[4] || activeAttractions[5] || activeAttractions[6] || activeAttractions[7]) {
        console.log("YEEHAW");
        if (!activeAttractions[4]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Kids`)) {
                    $(k).hide();
                }
            });
        }
        if (!activeAttractions[5]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Teens`)) {
                    $(k).hide();
                }
                if (activeAttractions[6] && k.innerHTML.includes(`Adults`) && k.innerHTML.includes(activeLand.join(" "))) {
                    $(k).show();
                }
            });
        }
        if (!activeAttractions[6]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Adults`)) {
                    $(k).hide();
                }
                if (activeAttractions[5] && k.innerHTML.includes(`Teens`) && k.innerHTML.includes(activeLand.join(" "))) {
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
    if (activeAttractions[0] || activeAttractions[1] || activeAttractions[2] || activeAttractions[3]) {
        console.log("YEEHAW");

        if (!activeAttractions[0]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Thrill Ride`)) {
                    $(k).hide();
                }
            });
        }
        if (!activeAttractions[1]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Gentle Ride`)) {
                    $(k).hide();
                }
            });
        }
        if (!activeAttractions[2]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Character`)) {
                    $(k).hide();
                }
            });
        }
        if (!activeAttractions[3]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Show`)) {
                    $(k).hide();
                }
            });
        }
    }
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