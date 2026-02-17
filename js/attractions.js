function createAttraction(title, land, color, img, ages, type) {
    document.getElementById("attractions-container").innerHTML += `
        <div class="attraction row" data-land="${land}" data-type="${type}" data-ages="${ages}">
            <img class="col-lg-3 col-12" src="../imgs/${img}.jpeg" alt="attraction-picture" loading="lazy">
            <div class="col-lg-8 col-sm-11 col-10">
                <h1 class="attraction-title mt-lg-0 mt-3">${title}</h1>
                <h3 class="${color}">${land}</h3>
                <h5>${ages}</h5>
                <p>${type}</p>
            </div>
            <div class="col-1">
                <i class="fa fa-chevron-right"></i>
            </div>
        </div>`
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
        img: "space-race",
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

// Create all attractions
for (let i = 0; i < attractionInformation.length; i++) {
    createAttraction(
        attractionInformation[i].title, 
        attractionInformation[i].land, 
        attractionInformation[i].color, 
        attractionInformation[i].img, 
        attractionInformation[i].ages, 
        attractionInformation[i].type
    );
}

// ============================================
// MODERN FILTERING SYSTEM
// ============================================

// State management - single selections only
const filterState = {
    selectedLand: 'All Lands',
    selectedType: null,      // Only one: 'Thrill Ride', 'Gentle Ride', 'Character', 'Show'
    selectedAges: null       // Only one: 'Kids', 'Teens', 'Adults', 'All Ages'
};

// Land mapping
const landMap = {
    'all-lands': 'All Lands',
    'fae-forest': 'Fae Forest',
    'future-world': 'Future World',
    'hallowwood': 'Hallowwood',
    'pirate-island': 'Pirate Island',
    'wild-west': 'Wild West'
};

// Button configuration
const buttonConfig = {
    'thrill-rides-button': { category: 'type', value: 'Thrill Ride' },
    'gentle-rides-button': { category: 'type', value: 'Gentle Ride' },
    'characters-button': { category: 'type', value: 'Character' },
    'shows-button': { category: 'type', value: 'Show' },
    'kids-button': { category: 'ages', value: 'Kids' },
    'teens-button': { category: 'ages', value: 'Teens' },
    'adults-button': { category: 'ages', value: 'Adults' },
    'all-ages-button': { category: 'ages', value: 'All Ages' }
};

// Get all buttons in a category
const typeButtons = ['thrill-rides-button', 'gentle-rides-button', 'characters-button', 'shows-button'];
const ageButtons = ['kids-button', 'teens-button', 'adults-button', 'all-ages-button'];

// Main filter function
function filterAttractions() {
    const attractions = document.querySelectorAll('.attraction');
    
    attractions.forEach(attraction => {
        const land = attraction.dataset.land;
        const type = attraction.dataset.type;
        const ages = attraction.dataset.ages;
        
        // Check land match
        const matchesLand = filterState.selectedLand === 'All Lands' || land === filterState.selectedLand;
        
        // Check type match (show all if none selected)
        const matchesType = !filterState.selectedType || type === filterState.selectedType;
        
        // Check ages match (show all if none selected, or if ages field includes the selected age)
        const matchesAges = !filterState.selectedAges || ages.includes(filterState.selectedAges);
        
        // Show/hide based on all criteria
        if (matchesLand && matchesType && matchesAges) {
            $(attraction).show();
        } else {
            $(attraction).hide();
        }
    });
}

// Handle land selection change
function changeActiveLand() {
    const selectedValue = document.getElementById("attraction-land-sorter").value;
    filterState.selectedLand = landMap[selectedValue] || 'All Lands';
    filterAttractions();
}

// Deselect all buttons in a category
function deselectAllButtons(buttonIds) {
    buttonIds.forEach(id => {
        const button = $('#' + id);
        if (button.length) {
            button.css('background-color', 'white');
            button.css('color', 'black');
        }
    });
}

// Handle filter button clicks (single-select behavior)
function toggleFilterButton(buttonId) {
    const config = buttonConfig[buttonId];
    if (!config) return;
    
    const button = $('#' + buttonId);
    const category = config.category;
    
    // Determine which buttons group this belongs to
    const relatedButtons = category === 'type' ? typeButtons : ageButtons;
    
    // Check if this button is already selected
    const currentValue = category === 'type' ? filterState.selectedType : filterState.selectedAges;
    const isCurrentlySelected = currentValue === config.value;
    
    if (isCurrentlySelected) {
        // Deselect - clear the filter
        if (category === 'type') {
            filterState.selectedType = null;
        } else {
            filterState.selectedAges = null;
        }
        button.css('background-color', 'white');
        button.css('color', 'black');
    } else {
        // Select this one, deselect others in the category
        deselectAllButtons(relatedButtons);
        
        if (category === 'type') {
            filterState.selectedType = config.value;
        } else {
            filterState.selectedAges = config.value;
        }
        button.css('background-color', 'var(--future-color)');
        button.css('color', 'white');
    }
    
    filterAttractions();
}

// Attach event listeners to all filter buttons
document.addEventListener('DOMContentLoaded', () => {
    // Type and age filter buttons
    Object.keys(buttonConfig).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => toggleFilterButton(buttonId));
        }
    });
    
    // Show all attractions initially
    filterAttractions();
});