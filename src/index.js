import './style.css';

const container = document.querySelector('.container');

const getMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood', {
  });
  const responseData = await response.json();
  const allOptions = responseData.meals;

  const displayMenuOptions = allOptions.map(
    (item) => `
            <div class="card" id="${item.idMeal}" data-id="${item.idMeal}">
          <img src="${item.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.strMeal}</h5>
            <button class="likeButton" >🤍</button>
            
            <span class="displayLikes">0</span>

            <button type="button" class="commentBtn">Comments
      </button>
            
          </div>
        </div>`,
  );

  container.innerHTML = displayMenuOptions.join(' ');
};
getMeals();