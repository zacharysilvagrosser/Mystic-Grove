function createDining(title, land, color, img, type, money) {
    document.getElementById("attractions-container").innerHTML += `
        <div class="attraction row" data-land="${land}" data-type="${type}" data-money="${money}">
            <img class="col-lg-3 col-12" src="../imgs/${img}.jpg" alt="dining-picture" loading="lazy">
            <div class="col-lg-8 col-sm-11 col-10">
                <h1 class="attraction-title mt-lg-0 mt-3">${title}</h1>
                <h3 class="${color}">${land}</h3>
                <h5>${type}</h5>
                <p>${money}</p>
            </div>
            <div class="col-1">
                <i class="fa fa-chevron-right"></i>
            </div>
        </div>
    `
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

// FILTERING SYSTEM
const filterState = {
    selectedType: null,
    selectedMoney: null,
    selectedLand: "All Lands"
};

const landMap = {
    "all-lands": "All Lands",
    "fae-forest": "Fae Forest",
    "future-world": "Future World",
    "hallowwood": "Hallowwood",
    "pirate-island": "Pirate Island",
    "wild-west": "Wild West"
};

const buttonConfig = {
    type: {
        "#quick-service-button": "Quick Service",
        "#table-service-button": "Table Service",
        "#character-dining-button": "Character Dining",
        "#fine-dining-button": "Fine Dining",
        "#bar-button": "Bar",
        "#reservations-button": "Reservations"
    },
    money: {
        "#money-one-button": "$",
        "#money-two-button": "$$",
        "#money-three-button": "$$$",
        "#money-four-button": "$$$$"
    }
};

// FILTER DINING BASED ON CURRENT STATE
function filterDining() {
    $('.attraction').each(function() {
        const land = $(this).data('land');
        const type = $(this).data('type');
        const money = $(this).data('money');
        
        let showDining = true;
        
        // Filter by land
        if (filterState.selectedLand !== "All Lands" && land !== filterState.selectedLand) {
            showDining = false;
        }
        
        // Filter by type
        if (filterState.selectedType && type !== filterState.selectedType) {
            showDining = false;
        }
        
        // Filter by money  
        if (filterState.selectedMoney && money !== filterState.selectedMoney) {
            showDining = false;
        }
        
        if (showDining) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

// DESELECT ALL BUTTONS IN A CATEGORY
function deselectAllButtons(category) {
    const buttons = buttonConfig[category];
    for (let buttonId in buttons) {
        $(buttonId).css('background-color', 'white');
        $(buttonId).css('color', 'black');
    }
}

// TOGGLE FILTER BUTTON (SINGLE-SELECT WITHIN CATEGORY)
function toggleFilterButton(buttonId, category, value) {
    const isCurrentlySelected = (category === 'type' && filterState.selectedType === value) ||
                                 (category === 'money' && filterState.selectedMoney === value);
    
    if (isCurrentlySelected) {
        // Deselect
        filterState[`selected${category.charAt(0).toUpperCase() + category.slice(1)}`] = null;
        $(buttonId).css('background-color', 'white');
        $(buttonId).css('color', 'black');
    } else {
        // Deselect all other buttons in this category first
        deselectAllButtons(category);
        
        // Select this button
        filterState[`selected${category.charAt(0).toUpperCase() + category.slice(1)}`] = value;
        $(buttonId).css('background-color', 'var(--future-color)');
        $(buttonId).css('color', 'white');
    }
    
    filterDining();
}

// LAND DROPDOWN CHANGE HANDLER
function changeActiveLand() {
    const landValue = document.getElementById("attraction-land-sorter").value;
    filterState.selectedLand = landMap[landValue] || "All Lands";
    filterDining();
}

// EVENT HANDLERS FOR TYPE BUTTONS
$("#quick-service-button").click(function() {
    toggleFilterButton("#quick-service-button", "type", "Quick Service");
});
$("#table-service-button").click(function() {
    toggleFilterButton("#table-service-button", "type", "Table Service");
});
$("#character-dining-button").click(function() {
    toggleFilterButton("#character-dining-button", "type", "Character Dining");
});
$("#fine-dining-button").click(function() {
    toggleFilterButton("#fine-dining-button", "type", "Fine Dining");
});
$("#bar-button").click(function() {
    toggleFilterButton("#bar-button", "type", "Bar");
});
$("#reservations-button").click(function() {
    toggleFilterButton("#reservations-button", "type", "Reservations");
});

// EVENT HANDLERS FOR MONEY BUTTONS
$("#money-one-button").click(function() {
    toggleFilterButton("#money-one-button", "money", "$");
});
$("#money-two-button").click(function() {
    toggleFilterButton("#money-two-button", "money", "$$");
});
$("#money-three-button").click(function() {
    toggleFilterButton("#money-three-button", "money", "$$$");
});
$("#money-four-button").click(function() {
    toggleFilterButton("#money-four-button", "money", "$$$$");
});