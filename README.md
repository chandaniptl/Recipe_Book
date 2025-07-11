https://recipe-book-seven-beta.vercel.app/

Form:
<img width="1828" height="934" alt="formdata" src="https://github.com/user-attachments/assets/07b1e519-f00f-4906-b6d4-6d90f302609e" />

Filter Data:
<img width="1732" height="926" alt="filterdata" src="https://github.com/user-attachments/assets/0a4b5e49-b4c8-4196-916f-86af70da8abf" />

Edit Food:
<img width="1763" height="921" alt="editfood" src="https://github.com/user-attachments/assets/034cf59a-69a4-41a7-89cc-017ddf04724c" />

Delete Food:
<img width="1757" height="929" alt="deletefood" src="https://github.com/user-attachments/assets/ef23782a-ae74-4598-b300-993cec1503c3" />

📘 Recipe Book Web Application

A dynamic web-based application to manage, search, and filter your favorite recipes using local storage. This app allows users to add, edit, delete, and search recipes with a user-friendly interface.
🚀 Features

    ✅ Add, edit, and delete recipes with title, ingredients, instructions, and cuisine type.

    🔍 Real-time search by title or ingredients.

    🗂️ Filter recipes by cuisine type.

    💾 Data persistence using Local Storage.

    🎨 Stylish and responsive UI using custom CSS.

    🛠️ Intuitive layout for easy interaction.

📁 Project Structure

recipe-book-app/
│
├── index.html         # Main HTML file with structure and form
├── style.css          # All UI styling
├── script.js          # JavaScript logic for app functionality

🧱 Technologies Used

    HTML5 for layout

    CSS3 for styling and responsiveness

    JavaScript (ES6) for dynamic interaction and logic

    LocalStorage for data persistence

🔧 Functionality Overview
✅ 1. HTML Form

The form contains the following fields:

    Recipe Title

    Ingredients

    Instructions

    Cuisine dropdown

    Add Recipe button

✅ 2. JavaScript Logic

Key Functions:

    addRecipe(e): Adds or updates a recipe to the list.

    displayRecipes(filteredRecipes): Displays recipes in styled cards.

    editRecipe(index): Loads recipe data into form for editing.

    deleteRecipe(index): Removes a recipe from the list.

    saveRecipes(): Saves recipe list to LocalStorage.

    searchAndFilter(): Filters recipes by title, ingredients, and cuisine type in real-time.

✅ 3. Local Storage

Recipes are stored in localStorage as a JSON string under the key "recipes". They persist even after reloading the page.
✅ 4. Advanced Search & Filter

    Search bar filters recipes by matching title or ingredients.

    Cuisine filter displays only recipes from the selected cuisine.

    Combined search & filter is supported for refined results.

💻 UI Screens
✏️ Add/Edit Recipe

    Clean form with labels and placeholders

    Validates required fields (title and ingredients)

    Auto-resets after submit

📋 Display Recipes

    Responsive grid layout using CSS Grid

    Each recipe is shown in a card format:

        Title

        Ingredients

        Instructions

        Cuisine type

        Edit and Delete buttons

🔍 Search & Filter

    Responsive search input

    Dropdown to select cuisine

    Both work together seamlessly

🧪 Example Usage

    Open the app in a browser.

    Fill out the form and click "Add Recipe".

    The recipe is saved and displayed immediately.

    Use the Edit button to update any recipe.

    Use Delete to remove unwanted recipes.

    Use the search input or cuisine dropdown to filter the list.
    

🌐 Deployment

This project can be deployed using:

    GitHub Pages : https://github.com/chandaniptl/Recipe_Book

    Vercel : https://recipe-book-seven-beta.vercel.app/

