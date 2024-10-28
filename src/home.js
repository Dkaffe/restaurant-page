export function loadHome() {
  const content = document.querySelector("#content");
  const elements = [];

  // h1 element
  const h1 = document.createElement("h1");
  h1.innerText = "Welcome to Odin's Restaurant!";
  elements.push(h1);

  // Image element
  const img = document.createElement("img");
  img.src =
    "https://www.norsegarde.com/cdn/shop/articles/img-1711680971160_65b0be6f-9364-44a4-9179-3976bf6e417f.png?v=1711689418&width=2048";
  img.alt = "The god Odin";
  img.width = "200";
  elements.push(img);

  // p element
  const p = document.createElement("p");
  p.innerText =
    "Welcome to Valhalla's Feast, where Odin himself curates an unforgettable dining experience worthy of the gods! Indulge in legendary dishes prepared with ancient Norse flavors, served by the warmth of roaring hearths under star-lit skies. Here, every meal is a celebration, and each drink is a toast to honor and bravery. Join us, and let the All-Father guide you through a feast that echoes through eternity!";
  elements.push(p);

  // Append items
  elements.forEach((element) => content.appendChild(element));
}
