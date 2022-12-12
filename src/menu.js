const foods = [
  ["New Year Soba","I am the bonito of my soup."],
  ["Salmon with Mushrooms and Butter in Foil", "Binging with Bolg’s"],
  ["Spring Chirashi Sushi", "Spend your Girls’ Day with the Best Girls!"],
  ["Spring Greens and Bacon Sandwich", "That was close. You were almost a Gil Sandwich!"],
  ["Bamboo Shoot Gratin", "Heaven’s Meal I. presage flour"],
  ["First Hamburg Steak", `They call certain methods of cooking good and others evil, acting as if there were some nobility to the kitchen.
  Such illusions, perpetrated by chefs throughout history, have led countless young men to their bloody hamburg steaks,
  all for the sake of this valor and glory.`],
  ["Refreshing and Easy to Eat Chilled Ochazuke", "If you tell me to rule such a summer, I already rule it."],
  ["Tohsaka’s Gomoku Fried Rice", "Cooking rice on a spiritual level for those willing and able to be the king of the table."],
  ["Taste of Autumn: Caster`s Mackerel Pike and Stewed Taro", "Medea’s Family Reunion"],
  ["Fried Chicken: Yummy Even When It`s Cold", "For a second, I thought we were going to have an episode with lobsters, shrimp, raw oysters, and grilled sazae."],
  ["Special Fluffy Gooey Omelet Rice", "The unstoppable duo of Gae Bolg and Rho Aias"],
  ["One-Pan Roast Beef", "He brought everything back, all the food for the feast. And he, he himself, Emiya-san, carved the Riesbyfe"],
  ["Hot, Hot Hot Pot", "Sheathed in the breath of stars. A torrent of shining life. Hail! The Chopsticks of Promised Victory!! Ex-CALIBURRRRRRR!!!"]
];

function createMenu() {
    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menuGrid");
    
    for (let i = 0; i < foods.length; i++) {
        const menuGridElement = document.createElement("div");
        menuGridElement.classList.add("menuGridElement");
        
        const foodTitle = document.createElement("p");
        const foodDescription = document.createElement("p");
        const foodImage = document.createElement("img");
        foodTitle.classList.add("foodTitle");
        foodDescription.classList.add("foodDescription");
        foodImage.classList.add("foodImage");
        foodTitle.textContent = foods[i][0];
        foodDescription.textContent = foods[i][1];
        foodImage.src = `images/${i}.jpg`;

        menuGridElement.appendChild(foodTitle);
        menuGridElement.appendChild(foodImage);
        menuGridElement.appendChild(foodDescription);
        menuGrid.appendChild(menuGridElement);
    }
    
    return menuGrid;
}

function loadMenu() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;