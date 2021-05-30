let foodToSearch = null;
const YOUR_APP_ID = "b479a854";
const YOUR_APP_KEY = "3c479096c85ad3bcbd127e27d5e14ef2";
let myData;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
  // .then(getData);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
  return foodToSearch;
}

async function fetchRecipe() {
  //grab the API
  const requestUrl = `https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  //request API
  const response = await fetch(requestUrl);
  //store the response in a variable
  let data = await response.json();
  console.log(data);
  //storing recipe label in a variable
  myDataLabel = data.hits[0].recipe.label;
  //grabbing aTag from HTML
  let aTag = document.getElementById("recipe-link");
  console.log(aTag);
  //putting text into the aTag
  aTag.innerHTML = myDataLabel;
  //storing recipeURL into a variable
  myRecipeURL = data.hits[0].recipe.url;
  //assigning the URL to href
  aTag.href = myRecipeURL;
  console.log(myRecipeURL);
  //store recipe image in a variable
  myRecipeImage = data.hits[0].recipe.image;
  //target the image element from HTML
  let imageTag = document.getElementById("recipe-image");
  //assinging the scr to the image tag
  imageTag.src = myRecipeImage;
  return data;
}
