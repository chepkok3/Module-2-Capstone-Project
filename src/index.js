import './style.css';
import displayModal from './modules/popUp.js';
import getMeals from './modules/getMeals.js';
import { getLikes, postLike } from './modules/getLikes.js';
import ItemsCounter from './modules/counter/itemsCounter.js';

const mealsContainer = document.querySelector('.meals-container');
const popUpWindow = document.querySelector('.popup-window');
const parser = new DOMParser();

const initAll = async () => {
  const likesArray = await getLikes();
  const mealsArray = await getMeals();

  const allArrays = mealsArray.meals.map((meal) => {
    const likeForThisMeal = likesArray.filter(
      (likeObj) => likeObj.item_id === meal.idMeal,
    );
    return {
      strMealThumb: meal.strMealThumb,
      strMeal: meal.strMeal,
      idMeal: meal.idMeal,
      likes: likeForThisMeal.length === 0 ? 0 : likeForThisMeal[0].likes,
    };
  });

  allArrays.forEach((mealWithLike) => {
    const string = `
      <div class="Loaded-content">
        <img src="${mealWithLike.strMealThumb}" alt="meal" class="meal-img">
        <div class="meal-details">
          <div class="meal-desc">
            <p class="title">${mealWithLike.strMeal}</p>
            <div class="like m-0" id="${mealWithLike.idMeal}">
              <p class='likes m-0'>${mealWithLike.likes}</p>
              <i class="far fa-heart like-btn"></i>
            </div>
          </div>
          <button type="button" class="comment-btn">Comments</button>
        </div>
      </div>`;

    const stringItem = parser.parseFromString(string, 'text/html').body
      .firstChild;

    const likeBtn = stringItem.querySelector('.like-btn');
    const likeEl = stringItem.querySelector('.likes');

    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      postLike(mealWithLike.idMeal);
      mealWithLike.likes += 1;
      likeEl.innerHTML = `${mealWithLike.likes}`;
      e.target.classList.remove('far');
      e.target.classList.add('fas');
      likeEl.style.color = '#e1362c';
    });

    mealsContainer.append(stringItem);

    const commentbtn = stringItem.querySelector('.comment-btn');
    commentbtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpWindow.classList.remove('hidden');
      displayModal(mealWithLike.idMeal);
    });
  });
  const totalItems = ItemsCounter();
  const itemsCounterEl = document.querySelector('.items-counter');
  itemsCounterEl.innerHTML = `(${totalItems})`;
};

initAll();
