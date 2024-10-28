export function loadAbout() {
  const content = document.querySelector("#content");
  const elements = [];

  // h1 element
  const h1 = document.createElement("h1");
  h1.innerText = "About us";
  elements.push(h1);

  // p element
  const p = document.createElement("p");
  p.innerText =
    "At Valhalla’s Hearth, we bring the ancient flavors of Asgard to your plate, inspired by the All-Father himself, Odin. Here, dining is more than a meal—it’s a journey through Norse legends and tales of bravery. Each dish is crafted to honor the gods, using timeless recipes, rare ingredients, and the essence of battle-forged feasts. Step into a realm where every bite is a tribute to heroism, and every drink raises a toast to the epic stories that echo through the halls of Valhalla. Join us for a taste of eternity!";
  elements.push(p);

  // Append items
  elements.forEach((element) => content.appendChild(element));
}
