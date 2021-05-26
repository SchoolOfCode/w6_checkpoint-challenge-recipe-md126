let foodToSearch = null;
const YOUR_APP_ID = "b479a854";
const YOUR_APP_KEY = "3c479096c85ad3bcbd127e27d5e14ef2";

function handleRecipeClick() {
  fetchRecipe(foodToSearch).then(getData);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  const requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  console.log(data);
  return data;
}

function getData(data) {
  const recipeResults = document.getElementById("recipe-button");
  recipeResults.innerHTML = data.count;
  document.getElementById("recipe-button").style.visibility = "hidden";
}
