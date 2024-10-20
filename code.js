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

// 1. Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant park in the parks array.
parks.find(park => park.name === "Riverside Park").name = "Riverside Greenspace";

// 2. Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
parks[0].trees.find(tree => tree.species === "Maple").species = "Sugar Maple";

// 3. Use array and object manipulation to add a new tree to the "Central Park" object within the parks array and this new tree should have these attributes: species: "Birch", age: 7, health: "Good", and height: 18. 
parks[0].trees.push({ species: "Birch", age: 7, health: "Good", height: 18 });

// 4. Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list (as an array) in a variable named centralParkTrees.
let centralParkTrees = parks[0].trees.map(tree => tree.species);

// 5. Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
let totalAge = parks.reduce((sum, park) => sum + park.trees.reduce((sum, tree) => sum + tree.age, 0), 0);
let totalTrees = parks.reduce((sum, park) => sum + park.trees.length, 0);
let averageTreeAge = totalAge / totalTrees;

// 6. Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
let tallestTree = parks.flatMap(park => park.trees).reduce((tallest, tree) => tree.height > tallest.height ? tree : tallest);

// 7. Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array.
parks[0].facilities = parks[0].facilities.filter(facility => facility !== "playground");

// 8. Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
let parksJSON = JSON.stringify(parks);

// 9. Using console.log, display the name and facilities of the first item in the parks array.
console.log(parks[0].name, parks[0].facilities);

// 10. Using console.log, display the species of the third item in the parks array.
console.log(parks[2].trees[0].species);
