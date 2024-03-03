import { dessertsList, mealsList, drinksList, allProductList } from "./data.js";
/* Home Page Js */
const viewLinkEl = document.querySelectorAll(".branch .view-link");
console.log(viewLinkEl);

viewLinkEl.forEach((el) => {
  el.addEventListener("click", () => {
    alert("This feature is under construction..");
  });
});

const pathName = window.location.pathname;

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
      .map((item) => `<li  class="product-item" id="${item.id}">${item.name}</li>`)
      .join("")}
    `;
  } else if (pathName == "/meals") {
    dessertsListEl.innerHTML = `
    ${mealsList
      .map((item) => `<li  class="product-item" id="${item.id}">${item.name}</li>`)
      .join("")}
    `;
  } else if (pathName == "/drinks") {
    dessertsListEl.innerHTML = `
    ${drinksList
      .map((item) => `<li  class="product-item" id="${item.id}">${item.name}</li>`)
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
const produceItem = document.querySelectorAll(".product-item");
produceItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    getDessert(event);

    //Deleting the "active" class of items other than the clicked element
    produceItem.forEach((item) => item.classList.remove("active"));

    const clickedProduce = document.getElementById(item.id);
    clickedProduce.classList.add("active");
  });
});

function getDessert(event) {
  const targetProduct = allProductList.find((item) => item.id == event.target.id);

  allProductList.forEach((item) => {
    item.isActive = item === targetProduct;
  });
  mainContent.innerHTML = `
  <div class="img-infos">
    <img class="" src="images/${targetProduct.image}" alt="" />
    <div class="infos">
      <p><b>Meal Name</b> : ${targetProduct.name}</p>
      <p>
      <b>Info</b>: ${targetProduct.info.slice(0, 100)}...
      </p>
    </div>
    <div>
    ${createViewDetailLink(targetProduct)}
    </div>
  </div>
  <div>
  ${createRecipeslLink(targetProduct)}

  </div>
  `;
}

const createViewDetailLink = (pProduct) => {
  if (pProduct.group == "desserts") {
    return `<a href="http://localhost:3002/desserts/dessert-product?productId=${pProduct.id}" class="view-detail"> View Detail </a>`;
  } else if (pProduct.group == "drinks") {
    return `<a href="http://localhost:3002/drinks/drink-product?productId=${pProduct.id}" class="view-detail"> View Detail </a>`;
  } else if (pProduct.group == "meals") {
    return `<a href="http://localhost:3002/meals/meal-product?productId=${pProduct.id}" class="view-detail"> View Detail </a>`;
  }
};

const createRecipeslLink = (pProduct) => {
  if (pProduct.group == "desserts") {
    return `<a href="http://localhost:3002/desserts/recipe?group=${pProduct.group}" class="view-all-recipe"> View All Recipes </a>`;
  } else if (pProduct.group == "drinks") {
    return `<a href="http://localhost:3002/drinks/recipe?group=${pProduct.group}" class="view-all-recipe"> View All Recipes  </a>`;
  } else if (pProduct.group == "meals") {
    return `<a href="http://localhost:3002/meals/recipe?group=${pProduct.group}" class="view-all-recipe"> View All Recipes  </a>`;
  }
};
