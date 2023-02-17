import { postComment, getComments } from './commentsAPI.js';
import commentsCounter from './counter/commentCounter.js';

const mealInfo = async (idMeal) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );
  const responseJSON = await response.json();
  return responseJSON;
};

const popUpWindow = document.querySelector('.popup-window');
const parser = new DOMParser();

const displayModal = async (idMeal) => {
  popUpWindow.innerHTML = '<div class="backdrop"></div>';

  const commentsList = await getComments(idMeal);

  mealInfo(idMeal).then((meal) => {
    const string = `
    <div class="popup-container">
      <div class="modal-popup">
        <i class="fa-solid fa-xmark close"></i>
        <div class="modal-info">
          <img src=${
  meal.meals[0].strMealThumb
} alt="Thumbnail" class="modal-popup-img">  
          <h3 class="game-title">${meal.meals[0].strMeal}</h3>
          <div class="more-info-links">
            <button> <a href="${meal.meals[0].strSource}"> Source</a></button>
            <button> <a href="${meal.meals[0].strYoutube}"> Youtube</a></button>
          </div>
          <div class="meal-description">    
            <p><b> Food Ingredients </b></p>
            <ul>
              <li>${meal.meals[0].strIngredient1}: ${
  meal.meals[0].strMeasure1
}</li>
              <li>${meal.meals[0].strIngredient2}: ${
  meal.meals[0].strMeasure2
}</li>
              <li>${meal.meals[0].strIngredient3}: ${
  meal.meals[0].strMeasure3
}</li>
              <li>${meal.meals[0].strIngredient4}: ${
  meal.meals[0].strMeasure4
}</li>
              <li>${meal.meals[0].strIngredient5}: ${
  meal.meals[0].strMeasure5
}</li>
            </ul>
            <p><b>Recipe</b></p>
            <p>${meal.meals[0].strInstructions}</p>  
            <div class="tags"> <b>Tags:</b> ${(meal.meals[0].strTags || '')
    .split(',')
    .map((el) => `<code class='tag'>${el}</code>`)}</div>
          </div>
        </div>

        <h3 class="counter">Comments(<b class="all-comments">0</b>)</h3>  
        <div class='user-comments'> 
        ${
  commentsList
    ? commentsList
      .map(
        (comment) => `
          <div class="comment">
            <div class="commented">
              <div class="username"><b>${comment.username}:</b></div>
              <div class="message">${comment.comment}</div>
            </div>
          <div class="date">${comment.creation_date}</div>
          </div>
        `,
      )
      .join('')
    : ''
}
        
        </div>
          <h3>Input your Comment</h3>
          <form class="comments-posted">
            <input type="text" name="username" class="user-name" placeholder="Your name" required>
            <textarea class="user-comment" name="comment" placeholder="Your insights" required></textarea>
            <button type="submit" class="submit-btn">Submit</button>
          </form>
        </div>
      </div>`;

    const stringItem = parser.parseFromString(string, 'text/html').body
      .firstChild;
    popUpWindow.append(stringItem);

    const closeBtn = stringItem.querySelector('.close');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpWindow.classList.add('hidden');
    });

    const form = stringItem.querySelector('form');
    const commentsContainer = document.querySelector('.user-comments');
    const counterElement = stringItem.querySelector('.all-comments');

    counterElement.innerHTML = `${commentsCounter()}`;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const user = formData.get('username');
      const message = formData.get('comment');
      postComment(idMeal, user, message);
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      today = `${dd}/${mm}/${yyyy}`;

      const commentString = `
        <div class="comment">
          <div class="commented">
            <div class="username"><b>${user}:</b></div>
            <div class="message">${message}</div>
          </div>
        <div class="date">${today}</div>
      </div>`;

      const userComment = parser.parseFromString(commentString, 'text/html')
        .body.firstChild;
      commentsContainer.append(userComment);
      form.reset();
      counterElement.innerHTML = `${commentsCounter()}`;
    });
  });
};

export default displayModal;
