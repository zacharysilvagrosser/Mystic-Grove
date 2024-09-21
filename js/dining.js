function createDining(title, land, color, img, type, money) {
    document.getElementById("attractions-container").innerHTML += `
    <a href="../pages/attraction-descriptions/${img}.html" style="color: black" class="row">
        <div class="attraction">
            <img class="col-lg-3 col-12 mb-3" src="../imgs/${img}.jpg">
            <div class="col-lg-8 col-sm-11 col-10">
                <h1 class="attraction-title">${title}</h1>
                <h3 class="${color}">${land}</h3>
                <h5>${type}</h5>
                <p>${money}</p>
            </div>
            <div class="col-1">
                <i class="fa fa-chevron-right"></i>
            </div>
        </div>
    </a>`
}
const attractionInformation = [
    {
        title: "Neptune's Landing",
        land: "Future World",
        color: "future-world",
        img: "neptunes-landing",
        type: "Table Service",
        money: "$$$",
    },
    {
        title: "Pumpkin Place",
        land: "Hallowwood",
        color: "hallowwood",
        img: "pumpkin-place",
        type: "Quick Service",
        money: "$"
    },
    {
        title: "Chemical Reaction",
        land: "Future World",
        color: "future-world",
        img: "chemical-reaction",
        type: "Bar",
        money: "$$"
    },
    {
        title: "Mermaid Lagoon",
        land: "Pirate Island",
        color: "pirate-island",
        img: "mermaid-lagoon",
        type: "Table Service",
        money: "$$$"
    },
    {
        title: "Deep Sea Dive",
        land: "Pirate Island",
        color: "pirate-island",
        img: "deep-sea-dive",
        type: "Fine Dining",
        money: "$$$"
    },
    {
        title: "Fairy Dust",
        land: "Fae Forest",
        color: "fae-forest",
        img: "fairy-dust",
        type: "Character Dining",
        money: "$$"
    },
    {
        title: "Forest Grill",
        land: "Fae Forest",
        color: "fae-forest",
        img: "forest-grill",
        type: "Fine Dining",
        money: "$$$$"
    },
    {
        title: "Angus Grill",
        land: "Wild West",
        color: "wild-west",
        img: "angus-grill",
        type: "Quick Service",
        money: "$$"
    },
    {
        title: "Bandit Express",
        land: "Wild West",
        color: "wild-west",
        img: "bandit-express",
        type: "Character Dining",
        money: "$$$$"
    },
    {
        title: "Robo-Restaurant",
        land: "Future World",
        color: "future-world",
        img: "robo-restaurant",
        type: "Character Dining",
        money: "$$"
    },
    {
        title: "Space 221",
        land: "Future World",
        color: "future-world",
        img: "space-221",
        type: "Fine Dining",
        money: "$$$"
    },
    {
        title: "Whimsical Witch",
        land: "Hallowwood",
        color: "hallowwood",
        img: "whimsical-witch",
        type: "Character Dining",
        money: "$$"
    },
    {
        title: "Kingdom Come",
        land: "Fae Forest",
        color: "fae-forest",
        img: "kingdom-come",
        type: "Table Service",
        money: "$$$"
    },
    {
        title: "Sarsaparilla Saloon",
        land: "Wild West",
        color: "wild-west",
        img: "sarsaparilla-saloon",
        type: "Bar",
        money: "$"
    },
    {
        title: "Pirate's Cove",
        land: "Pirate Island",
        color: "pirate-island",
        img: "pirates-cove",
        type: "Bar",
        money: "$$$"
    },
    {
        title: "Dragon BBQ Pit",
        land: "Fae Forest",
        color: "fae-forest",
        img: "dragon-bbq-pit",
        type: "Quick Service",
        money: "$"
    },
    {
        title: "Meat and Mead",
        land: "Fae Forest",
        color: "fae-forest",
        img: "meat-and-mead",
        type: "Bar",
        money: "$"
    },
    {
        title: "Potion Brewing Company",
        land: "Hallowwood",
        color: "hallowwood",
        img: "potion-brewing-company",
        type: "Bar",
        money: "$$$"
    },
    {
        title: "Steer Clear Steakhouse",
        land: "Wild West",
        color: "wild-west",
        img: "steer-clear-steakhouse",
        type: "Reservations",
        money: "$$$"
    },
    {
        title: "Turkey Leg Tavern",
        land: "Fae Forest",
        color: "fae-forest",
        img: "turkey-leg-tavern",
        type: "Quick Service",
        money: "$$"
    },
    {
        title: "Space Port",
        land: "Future World",
        color: "future-world",
        img: "space-port",
        type: "Quick Service",
        money: "$"
    },
    {
        title: "Treasure Trove Cove",
        land: "Pirate Island",
        color: "pirate-island",
        img: "treasure-trove-cove",
        type: "Quick Service",
        money: "$$$$"
    },
];
for (let i = 0; i < attractionInformation.length; i++) {
    createDining(attractionInformation[i].title, attractionInformation[i].land, attractionInformation[i].color, attractionInformation[i].img, attractionInformation[i].type, attractionInformation[i].money)
}
// SORT ATTRACTIONS INTO ARRAYS BY ATTRACTION TYPE
let [quickService, tableService, characterDining, fineDining, bar, reservations, moneyOne, moneyTwo, moneyThree, moneyFour] = [[], [], [], [], [], [], [], [], [], []];
let [quickServiceActive, tableServiceActive, characterDiningActive, fineDiningActive, barActive, reservationsActive, moneyOneActive, moneyTwoActive, moneyThreeActive, moneyFourActive] = [false, false, false, false, false, false, false, false, false, false];
let diningTypeArrays = [quickService, tableService, characterDining, fineDining, bar, reservations, moneyOne, moneyTwo, moneyThree, moneyFour];
let activeDining = [quickServiceActive, tableServiceActive, characterDiningActive, fineDiningActive, barActive, reservationsActive, moneyOneActive, moneyTwoActive, moneyThreeActive, moneyFourActive];
let diningButtons = ["#quick-service-button", "#table-service-button", "#character-dining-button", "#fine-dining-button", "#bar-button", "#reservations-button",
    "#money-one-button", "#money-two-button", "#money-three-button", "#money-four-button"];
let diningTypeStrings = ["Quick Service", "Table Service", "Character Dining", "Fine Dining", "Bar", "Reservations", "$", "$$", "$$$", "$$$$"];;
function sortDining(diningType, array) {
    $('.attraction').each (function() {
        if (this.innerHTML.includes(`${diningType}`)) {
            array.push(this);
        }
    });
}
sortDining("Quick Service", quickService);
sortDining("Table Service", tableService);
sortDining("Character Dining", characterDining);
sortDining("Fine Dining", fineDining);
sortDining("Bar", bar);
sortDining("Reservations", reservations);
sortDining("$", moneyOne);
sortDining("$$", moneyTwo);
sortDining("$$$", moneyThree);
sortDining("$$$$", moneyFour);
console.log(diningTypeArrays);
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
        for (let i = 0; i < diningTypeArrays.length; i++) {
            for (let j = 0; j < diningTypeArrays[i].length; j++) {
                if (!diningTypeArrays[i][j].innerHTML.includes(`${land}`)) {
                    $(diningTypeArrays[i][j]).hide();
                } else if (diningTypeArrays[i][j].innerHTML.includes(`${land}`)) {
                    activeDiningOptions.push(diningTypeArrays[i][j]);
                    if (!activeDining[0] && !activeDining[1] && !activeDining[2] && !activeDining[3] && !activeDining[4] && !activeDining[5] && !activeDining[6] && !activeDining[7] && !activeDining[8] && !activeDining[9]) {
                        $(diningTypeArrays[i][j]).show();
                    } else {
                        updateActiveDiningOptions();
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
            for (let i = 0; i < diningTypeArrays.length; i++) {
                for (let j = 0; j < diningTypeArrays[i].length; j++) {
                    activeDiningOptions.push(diningTypeArrays[i][j]);
                    if (!activeDining[0] && !activeDining[1] && !activeDining[2] && !activeDining[3] && !activeDining[4] && !activeDining[5] && !activeDining[6] && !activeDining[7] && !activeDining[8] && !activeDining[9]) {
                        $(diningTypeArrays[i][j]).show();
                    }
                }
            }
            break;
    }
}
let activeDiningOptions = [];
// SHOW ONLY ATTRACTIONS THAT MATCH THE FILTER CRITERIA
function updateActiveDiningOptions() {
    diningTypeArrays.forEach(i => {
        $(i).hide();
    });
    activeDiningOptions = [];
    // ADD ALL ATTRACTIONS WITH BUTTONS THAT ARE PRESSED
    for (let i = 0; i < activeDining.length; i++) {
        if (activeDining[i] || !activeDining[0] && !activeDining[1] && !activeDining[2] && !activeDining[3] && !activeDining[4] && !activeDining[5] && !activeDining[6] && !activeDining[7]) {
            for (let j = 0; j < diningTypeArrays[i].length; j++) {
                if (diningTypeArrays[i][j].innerHTML.includes(activeLand.join(" ")) || activeLand.join(" ") === "All Lands") {
                    diningTypeArrays[i].forEach(j => {
                        activeDiningOptions.push(j);
                    });
                }
            }
        }
    }
    $(activeDiningOptions).show();
    // HIDE ANY LAND THAT DOESN'T MATCH WHICH BUTTONS ARE SELECTED
    switch (document.getElementById("attraction-land-sorter").value) {
        case "fae-forest":
            activeDiningOptions.forEach(i => {
                if (!i.innerHTML.includes(`Fae Forest`)) {
                    $(i).hide();
                }
            });
            break;
        case "future-world":
            activeDiningOptions.forEach(i => {
                if (!i.innerHTML.includes(`Future World`)) {
                    $(i).hide();
                }
            });
            break;
        case "hallowwood":
            activeDiningOptions.forEach(i => {
                if (!i.innerHTML.includes(`Hallowwood`)) {
                    $(i).hide();
                }
            });
            break;
        case "pirate-island":
            activeDiningOptions.forEach(i => {
                if (!i.innerHTML.includes(`Pirate Island`)) {
                    $(i).hide();
                }
            });
        break;
        case "wild-west":
            activeDiningOptions.forEach(i => {
                if (!i.innerHTML.includes(`Wild West`)) {
                    $(i).hide();
                }
            });
            break;
        default:
            activeDiningOptions.forEach(i => {
                    $(i).show();
            });
            break;
    }
    // HIDE ANY ATTRACTIONS THAT DON'T MATCH WHICH BUTTONS ARE SELECTED
    if (activeDining[6] || activeDining[7] || activeDining[8] || activeDining[9]) {
        if (!activeDining[6]) {
            activeDiningOptions.forEach(k => {
                if (k.innerHTML.includes("$") && !k.innerHTML.includes("$$") && !k.innerHTML.includes("$$$") && !k.innerHTML.includes("$$$$")) {
                    $(k).hide();
                }
            });
        }
        if (!activeDining[7]) {
            activeDiningOptions.forEach(k => {
                if (k.innerHTML.includes("$$") && !k.innerHTML.includes("$$$") && !k.innerHTML.includes("$$$$")) {
                    $(k).hide();
                }
            });
        }
        if (!activeDining[8]) {
            activeDiningOptions.forEach(k => {
                if (k.innerHTML.includes("$$$") && !k.innerHTML.includes("$$$$")) {
                    $(k).hide();
                }
                
            });
        }
        if (!activeDining[9]) {
            activeDiningOptions.forEach(k => {
                if (k.innerHTML.includes("$$$$")) {
                    $(k).hide();
                }
            });
        }
    }
    if (activeDining[0] || activeDining[1] || activeDining[2] || activeDining[3] || activeDining[4] || activeDining[5]) {
        for (let i = 0; i < 6; i++) {
            if (!activeDining[i]) {
                activeDiningOptions.forEach(k => {
                    if (k.innerHTML.includes(`${diningTypeStrings[i]}`)) {
                        $(k).hide();
                    }
                });
            }
        }
    }
}
// UPDATE VISIBILITY OF ATTRACTIONS IF THEY ARE ACTIVELY CLICKED ON OR NOT
function changeActiveDiningButton(trigger) {
    for (let i = 0; i < diningTypeStrings.length; i++) {
        if (trigger === diningTypeStrings[i]) {
            if (activeDining[i]) {
                activeDining[i] = false;
                $(diningButtons[i]).css('background-color','white');
                $(diningButtons[i]).css('color', 'black');
            } else {
                activeDining[i] = true;
                $(diningButtons[i]).css('background-color','var(--future-color)');
                $(diningButtons[i]).css('color', 'white');
            }
        }
    }
    updateActiveDiningOptions();
}
$("#quick-service-button").click(function() {
    changeActiveDiningButton("Quick Service");
});
$("#table-service-button").click(function() {
    changeActiveDiningButton("Table Service");
});
$("#character-dining-button").click(function() {
    changeActiveDiningButton("Character Dining");
});
$("#fine-dining-button").click(function() {
    changeActiveDiningButton("Fine Dining");
});
$("#bar-button").click(function() {
    changeActiveDiningButton("Bar");
});
$("#reservations-button").click(function() {
    changeActiveDiningButton("Reservations");
});
$("#money-one-button").click(function() {
    changeActiveDiningButton("$");
});
$("#money-two-button").click(function() {
    changeActiveDiningButton("$$");
});
$("#money-three-button").click(function() {
    changeActiveDiningButton("$$$");
});
$("#money-four-button").click(function() {
    changeActiveDiningButton("$$$$");
});