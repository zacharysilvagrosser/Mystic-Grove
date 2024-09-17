function createAttraction(title, land, color, img, ages, type) {
    document.getElementById("attractions-container").innerHTML += `
    <a href="../pages/attraction-descriptions/${img}.html" style="color: black" class="row">
        <div class="attraction">
            <img class="col-lg-3 col-12 mb-3" src="../imgs/${img}.jpeg">
            <div class="col-lg-8 col-sm-11 col-10">
                <h1 class="attraction-title">${title}</h1>
                <h3 class="${color}">${land}</h3>
                <h5>${ages}</h5>
                <p>${type}</p>
            </div>
            <div class="col-1">
                <i class="fa fa-chevron-right"></i>
            </div>
        </div>
    </a>`
}
const attractionInformation = [
    {
        title: "Alien Encounter",
        land: "Future World",
        color: "future-world",
        img: "alien-encounter",
        ages: "All Ages",
        type: "Gentle Ride",
        height: "36in or taller",
        description: "Aliens are invading Earth and only you can stop them! Shoot the UFO's to score points and save the planet."
    },
    {
        title: "Aqua World",
        land: "Pirate Island",
        color: "pirate-island",
        img: "aqua-world",
        ages: "All Ages",
        type: "Show"
    },
    {
        title: "Blast From the Past",
        land: "Future World",
        color: "future-world",
        img: "blast-from-the-past",
        ages: "All Ages",
        type: "Thrill Ride"
    },
    {
        title: "Captain Brown Beard",
        land: "Pirate Island",
        color: "pirate-island",
        img: "captain-brown-beard",
        ages: "Kids",
        type: "Character"
    },
    {
        title: "Captain Cook's Climbing Course",
        land: "Pirate Island",
        color: "pirate-island",
        img: "captain-cooks-climbing-course",
        ages: "Kids",
        type: "Gentle Ride"
    },
    {
        title: "Ceremony of the Fairies",
        land: "Fae Forest",
        color: "fae-forest",
        img: "ceremony-of-the-fairies",
        ages: "Kids",
        type: "Show"
    },
    {
        title: "Creatures of the Forest",
        land: "Fae Forest",
        color: "fae-forest",
        img: "creatures-of-the-forest",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "Cowboy",
        land: "Wild West",
        color: "wild-west",
        img: "cowboy",
        ages: "All Ages",
        type: "Character"
    },
    {
        title: "Cowboy Stunt Show",
        land: "Wild West",
        color: "wild-west",
        img: "cowboy-stunt-show",
        ages: "All Ages",
        type: "Show"
    },
    {
        title: "Cyborg",
        land: "Future World",
        color: "future-world",
        img: "cyborg",
        ages: "All Ages",
        type: "Character"
    },
    {
        title: "Descend to Hell",
        land: "Hallowwood",
        color: "hallowwood",
        img: "descend-to-hell",
        ages: "Adults",
        type: "Thrill Ride"
    },
    {
        title: "Dragon",
        land: "Fae Forest",
        color: "fae-forest",
        img: "dragon",
        ages: "All Ages",
        type: "Character"
    },
    {
        title: "Dynamite Mineshaft Plunge",
        land: "Wild West",
        color: "wild-west",
        img: "dynamite-mineshaft-plunge",
        ages: "Teens, Adults",
        type: "Thrill Ride"
    },
    {
        title: "Electric Eel Water Coaster",
        land: "Pirate Island",
        color: "pirate-island",
        img: "electric-eel",
        ages: "All Ages",
        type: "Thrill Ride"
    },
    {
        title: "Enchant The Night",
        land: "Fae Forest",
        color: "fae-forest",
        img: "enchant-the-night",
        ages: "All Ages",
        type: "Show"
    },
    {
        title: "Fae River Journey",
        land: "Fae Forest",
        color: "fae-forest",
        img: "fae-river-journey",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "Grim Ghoul",
        land: "Hallowwood",
        color: "hallowwood",
        img: "grim-ghoul",
        ages: "All Ages",
        type: "Character"
    },
    {
        title: "Hallowwood Pumpkin Patch",
        land: "Hallowwood",
        color: "hallowwood",
        img: "hallowwood-pumpkin-patch",
        ages: "Kids",
        type: "Gentle Ride"
    },
    {
        title: "Horse Drawn Carriage",
        land: "Wild West",
        color: "wild-west",
        img: "horse-drawn-carriage",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "King Spookly",
        land: "Hallowwood",
        color: "hallowwood",
        img: "king-spookly",
        ages: "Kids",
        type: "Character"
    },
    {
        title: "Knight",
        land: "Fae Forest",
        color: "fae-forest",
        img: "knight",
        ages: "All Ages",
        type: "Character"
    },
    {
        title: "Lightcycle Race",
        land: "Future World",
        color: "future-world",
        img: "lightcycle-race",
        ages: "Teens, Adults",
        type: "Thrill Ride"
    },
    {
        title: "Light the Night",
        land: "Future World",
        color: "future-world",
        img: "light-the-night",
        ages: "All Ages",
        type: "Show"
    },
    {
        title: "Martians",
        land: "Future World",
        color: "future-world",
        img: "martians",
        ages: "All Ages",
        type: "Character"
    },
    {
        title: "Mermaid",
        land: "Pirate Island",
        color: "pirate-island",
        img: "mermaid",
        ages: "Kids",
        type: "Character"
    },
    {
        title: "Moon Landing",
        land: "Future World",
        color: "moon-landing",
        img: "moon-landing",
        ages: "Teens, Adults",
        type: "Thrill Ride"
    },
    {
        title: "Park Ranger",
        land: "Wild West",
        color: "wild-west",
        img: "park-ranger",
        ages: "Kids",
        type: "Character"
    },
    {
        title: "Pirate Plunge",
        land: "Pirate Island",
        color: "pirate-island",
        img: "pirate-plunge",
        ages: "All Ages",
        type: "Thrill Ride"
    },
    {
        title: "Pirate's Journey",
        land: "Pirate Island",
        color: "pirate-island",
        img: "pirates-journey",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "Princess Celeste",
        land: "Fae Forest",
        color: "fae-forest",
        img: "princess-celeste",
        ages: "Kids",
        type: "Character"
    },
    {
        title: "Pumpkin Head",
        land: "Hallowwood",
        color: "hallowwood",
        img: "pumpkinhead",
        ages: "All Ages",
        type: "Character"
    },
    {
        title: "Rocket Launch",
        land: "Future World",
        color: "future-world",
        img: "rocket-launch",
        ages: "All Ages",
        type: "Show"
    },
    {
        title: "Runaway Railway",
        land: "Wild West",
        color: "wild-west",
        img: "runaway-railway",
        ages: "All Ages",
        type: "Thrill Ride"
    },
    {
        title: "Space Race",
        land: "Future World",
        color: "future-world",
        img: "rocket-launch",
        ages: "Teens, Adults",
        type: "Thrill Ride"
    },
    {
        title: "Sidewinder Spin",
        land: "Fae Forest",
        color: "fae-forest",
        img: "sidewinder-spin",
        ages: "All Ages",
        type: "Thrill Ride"
    },
    {
        title: "Siren Falls",
        land: "Pirate Island",
        color: "pirate-island",
        img: "siren-falls",
        ages: "All Ages",
        type: "Thrill Ride"
    },
    {
        title: "Spider Spin",
        land: "Hallowwood",
        color: "hallowwood",
        img: "spider-spin",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "Spooky Mansion",
        land: "Hallowwood",
        color: "hallowwood",
        img: "spooky-mansion",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "Star Academy Training",
        land: "Future World",
        color: "future-world",
        img: "star-academy-training",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "Skelly",
        land: "Hallowwood",
        color: "hallowwood",
        img: "skelly",
        ages: "Kids",
        type: "Character"
    },
    {
        title: "Skull Rock Wave Pool",
        land: "Pirate Island",
        color: "pirate-island",
        img: "skull-rock-wave-pool",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "The Monster Mash",
        land: "Hallowwood",
        color: "hallowwood",
        img: "the-monster-mash",
        ages: "All Ages",
        type: "Show"
    },
    {
        title: "Timberfall Slides",
        land: "Fae Forest",
        color: "fae-forest",
        img: "timberfall-slides",
        ages: "Kids",
        type: "Gentle Ride"
    },
    {
        title: "Tree Trunk Swings",
        land: "Fae Forest",
        color: "fae-forest",
        img: "tree-trunk-swings",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "Unicorn Carousel",
        land: "Fae Forest",
        color: "fae-forest",
        img: "unicorn-carousel",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "Western Expedition",
        land: "Wild West",
        color: "wild-west",
        img: "western-expedition",
        ages: "All Ages",
        type: "Thrill Ride"
    },
    {
        title: "Western Whirl",
        land: "Wild West",
        color: "wild-west",
        img: "western-whirl",
        ages: "All Ages",
        type: "Gentle Ride"
    },
    {
        title: "Witch's Broom Ride",
        land: "Hallowwood",
        color: "hallowwood",
        img: "witches-broom-ride",
        ages: "All Ages",
        type: "Thrill Ride"
    },
];
for (let i = 0; i < attractionInformation.length; i++) {
    createAttraction(attractionInformation[i].title, attractionInformation[i].land, attractionInformation[i].color, attractionInformation[i].img, attractionInformation[i].ages, attractionInformation[i].type)
}
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
// ACTIVELAND CHANGES SELECT ELEMENT VALUE INTO A SPACED UPPERCASE STRING SO LANDS CAN BE CHANGED FORM THE SELECT ELEMENT
let activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
for (let i = 0; i < activeLand.length; i++) {
    activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
}
// RUNS WHEN LAND SELECT ELEMENT IS CHANGED
function changeActiveLand() {
    // UPDATES WHICH LANDS ARE SHOWN BASED ON THE VALUE OF THE LAND SELECT ELEMENT
    function updateLand(land) {
        activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
        for (let i = 0; i < activeLand.length; i++) {
            activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
        }
        for (let i = 0; i < attractionTypeArrays.length; i++) {
            for (let j = 0; j < attractionTypeArrays[i].length; j++) {
                if (!attractionTypeArrays[i][j].innerHTML.includes(`${land}`)) {
                    $(attractionTypeArrays[i][j]).hide();
                } else if (attractionTypeArrays[i][j].innerHTML.includes(`${land}`)) {
                    activeRides.push(attractionTypeArrays[i][j]);
                    if (!activeAttractions[0] && !activeAttractions[1] && !activeAttractions[2] && !activeAttractions[3] && !activeAttractions[4] && !activeAttractions[5] && !activeAttractions[6] && !activeAttractions[7]) {
                        $(attractionTypeArrays[i][j]).show();
                    } else {
                        updateActiveRides();
                    }
                }
            }
        }
    }
    switch (document.getElementById("attraction-land-sorter").value) {
        case "fae-forest":
            updateLand("Fae Forest");
            break;
        case "future-world":
            updateLand("Future World");
            break;
        case "hallowwood":
            updateLand("Hallowwood");
            break;
        case "pirate-island":
            updateLand("Pirate Island");
        break;
        case "wild-west":
            updateLand("Wild West");
            break;
        default:
            activeLand = document.getElementById("attraction-land-sorter").value.replace("-"," ").split(" ");
            for (let i = 0; i < activeLand.length; i++) {
                activeLand[i] = activeLand[i][0].toUpperCase() + activeLand[i].substr(1);
            }
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
                    attractionTypeArrays[i].forEach(j => {
                        activeRides.push(j);
                    });
                }
            }
        }
    }
    $(activeRides).show();
    // HIDE ANY LAND THAT DOESN'T MATCH WHICH BUTTONS ARE SELECTED
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
    // HIDE ANY ATTRACTIONS THAT DON'T MATCH WHICH BUTTONS ARE SELECTED
    if (activeAttractions[4] || activeAttractions[5] || activeAttractions[6] || activeAttractions[7]) {
        if (!activeAttractions[4]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Kids`)) {
                    $(k).hide();
                }
            });
        }
        if (!activeAttractions[5]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Teens`) && (!k.innerHTML.includes("Adults") && activeAttractions[6])) {
                    $(k).hide();
                }
            });
        }
        if (!activeAttractions[6]) {
            activeRides.forEach(k => {
                if (k.innerHTML.includes(`Adults`) && (!k.innerHTML.includes("Teens") && activeAttractions[5])) {
                    $(k).hide();
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
        for (let i = 0; i < 4; i++) {
            if (!activeAttractions[i]) {
                activeRides.forEach(k => {
                    if (k.innerHTML.includes(`${attractionTypeStrings[i]}`)) {
                        $(k).hide();
                    }
                });
            }
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