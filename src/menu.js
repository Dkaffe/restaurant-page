export function loadMenu() {
  const content = document.querySelector("#content");
  const elements = [];

  // h1 element
  const h1 = document.createElement("h1");
  h1.innerText = "Odin's Menu";
  elements.push(h1);

  // list element
  const list = document.createElement("ul");
  const listItems = [
    {
      name: "Pizza",
      price: "$4,50",
    },
    {
      name: "Pasta",
      price: "$3,50",
    },
    {
      name: "Hamburger with Fries",
      price: "$7,50",
    },
  ];
  listItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.name} ${item.price}`;
    list.appendChild(li);
  });

  elements.push(list);

  // Append items
  elements.forEach((element) => content.appendChild(element));
}
