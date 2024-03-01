import { dessertsList, mealsList, drinksList, allProduceList } from "./data.js";

const pathName = window.location.pathname;
console.log(pathName);

let pageName;
if (pathName == "/desserts") {
  pageName = "desserts";
} else if (pathName == "/meals") {
  pageName = "meals";
} else if (pathName == "/drinks") {
  pageName = "drinks";
}
const dessertsListEl = document.querySelector(`.${pageName}-list`);
const mainContent = document.querySelector(".main-content");

const renderDessertList = () => {
  if (pathName == "/desserts") {
    dessertsListEl.innerHTML = `
    ${dessertsList
      .map((item) => `<li  class="produce-item" id="${item.id}">${item.name}</li>`)
      .join("")}
    `;
  } else if (pathName == "/meals") {
    dessertsListEl.innerHTML = `
    ${mealsList
      .map((item) => `<li  class="produce-item" id="${item.id}">${item.name}</li>`)
      .join("")}
    `;
  } else if (pathName == "/drinks") {
    dessertsListEl.innerHTML = `
    ${drinksList
      .map((item) => `<li  class="produce-item" id="${item.id}">${item.name}</li>`)
      .join("")}
    `;
  }
};
renderDessertList();

// Render welcome message
const renderWelcomeMess = () => {
  mainContent.innerHTML = `
  <div class="welcome-message">
  <h4>Here is our ${pageName} list</h4>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus modi dolores
    facilis obcaecati dolor facere, cumque pariatur ducimus, tempora, sunt at sit unde
    deleniti odio nisi esse. Labore, molestiae?
  </p>
</div>
  `;
};
renderWelcomeMess();

// Adding click events to products in the sidebar
const produceItem = document.querySelectorAll(".produce-item");
produceItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    getDessert(event);

    //Deleting the "active" class of items other than the clicked element
    produceItem.forEach((item) => item.classList.remove("active"));

    // // const tergetProduce = allProduceList.find((dessert) => dessert.id == item.id);
    const clickedProduce = document.getElementById(item.id);
    clickedProduce.classList.add("active");
  });
});

function getDessert(event) {
  const tergetProduce = allProduceList.find((item) => item.id == event.target.id);

  allProduceList.forEach((item) => {
    item.isActive = item === tergetProduce;
  });
  mainContent.innerHTML = `
  <div class="img-infos">
    <img class="" src="images/${tergetProduce.image}" alt="" />
    <div class="infos">
      <p><b>Meal Name</b> : ${tergetProduce.name}</p>
      <p>
      <b>Info</b> : ${tergetProduce.info}
      </p>
    </div>
  </div>
  `;
}
