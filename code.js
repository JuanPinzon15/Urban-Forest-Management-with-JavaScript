let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }
];

// 1. Change the name of "Riverside Park" to "Riverside Greenspace"
parks.find(park => park.name === "Riverside Park").name = "Riverside Greenspace";

// 2. Change the name of the tree species "Maple" to "Sugar Maple"
parks[0].trees.find(tree => tree.species === "Maple").species = "Sugar Maple";

// 3. Add a new tree to "Central Park"
parks[0].trees.push({ species: "Birch", age: 7, health: "Good", height: 18 });

// 4. Retrieve a list of all tree species located in "Central Park"
let centralParkTrees = parks[0].trees.map(tree => tree.species);

// 5. Calculate the average age of all the trees in the parks array
let totalAge = parks.reduce((sum, park) => sum + park.trees.reduce((sum, tree) => sum + tree.age, 0), 0);
let totalTrees = parks.reduce((sum, park) => sum + park.trees.length, 0);
let averageTreeAge = totalAge / totalTrees;

// 6. Determine which tree is the tallest among all the trees in the parks array
let tallestTree = parks.flatMap(park => park.trees).reduce((tallest, tree) => tree.height > tallest.height ? tree : tallest);

// 7. Remove the facility "playground" from "Central Park"
parks[0].facilities = parks[0].facilities.filter(facility => facility !== "playground");

// 8. Convert the parks array into a JSON Object
let parksJSON = JSON.stringify(parks);

// 9. Display the name and facilities of the first item in the parks array
console.log(parks[0].name, parks[0].facilities);

// 10. Display the species of the third item in the parks array
console.log(parks[2].trees[0].species);
