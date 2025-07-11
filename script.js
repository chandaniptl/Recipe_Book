let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

function saveRecipes() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function displayRecipes(filteredRecipes = recipes) {
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  filteredRecipes.forEach((recipe, index) => {
    list.innerHTML += `
      <div class="recipe-card">
        <h3>${recipe.title}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        <button onclick="editRecipe(${index})">Edit</button>
        <button onclick="deleteRecipe(${index})">Delete</button>
      </div>
    `;
  });
}

function addRecipe(e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  const instructions = document.getElementById("instructions").value.trim();
  const cuisine = document.getElementById("cuisine").value;

  if (!title || !ingredients) return alert("Please fill the required fields.");

  const newRecipe = { title, ingredients, instructions, cuisine };
  
  const editingIndex = document.getElementById("recipeForm").dataset.editing;
  if (editingIndex !== undefined && editingIndex !== "") {
    recipes[editingIndex] = newRecipe;
    delete document.getElementById("recipeForm").dataset.editing;
  } else {
    recipes.push(newRecipe);
  }

  saveRecipes();
  displayRecipes();
  document.getElementById("recipeForm").reset();
}

function editRecipe(index) {
  const recipe = recipes[index];
  document.getElementById("title").value = recipe.title;
  document.getElementById("ingredients").value = recipe.ingredients;
  document.getElementById("instructions").value = recipe.instructions;
  document.getElementById("cuisine").value = recipe.cuisine;

  document.getElementById("recipeForm").dataset.editing = index;
}

function deleteRecipe(index) {
  if (confirm("Are You Sure Delete this recipe?")) {
    recipes.splice(index, 1);
    saveRecipes();
    displayRecipes();
  }
}

function searchAndFilter() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const selectedCuisine = document.getElementById("filterCuisine").value;

  const filtered = recipes.filter(recipe => {
    const matchesTitleOrIngredients =
      recipe.title.toLowerCase().includes(searchText) ||
      recipe.ingredients.toLowerCase().includes(searchText);
    const matchesCuisine = selectedCuisine === "" || recipe.cuisine === selectedCuisine;

    return matchesTitleOrIngredients && matchesCuisine;
  });

  displayRecipes(filtered);
}

document.getElementById("recipeForm").addEventListener("submit", addRecipe);
document.getElementById("searchInput").addEventListener("input", searchAndFilter);
document.getElementById("filterCuisine").addEventListener("change", searchAndFilter);

window.onload = displayRecipes;
