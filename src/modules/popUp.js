import { postComment, getComments } from './commentsAPI.js';

const mealInfo = async (idMeal) => {
  const information = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );
  const infoJSON = await information.json();
  return infoJSON;
};

const popUpSection = document.querySelector('.popup-section');
const parser = new DOMParser();

const displayModal = async (idMeal) => {
  popUpSection.innerHTML = '<div class="backdrop"></div>';

  const commentsList = await getComments(idMeal);

  mealInfo(idMeal).then((meal) => {
    const string = `
    <div class="popup-container">
      <div class="modal-popup">
        <i class="fa-solid fa-xmark close"></i>
        <div class="modal-info">
          <img src=${meal.meals[0].strMealThumb
      } alt="Thumbnail" class="modal-popup-img">  
          <h3 class="meal-title">${meal.meals[0].strMeal}</h3>
          <div class="more-info-links">
            <button> <a href="${meal.meals[0].strSource
      }" target="_blank"> Source</a></button>
            
          </div>
          <div class="meal-description">    
            <p><b> Food Ingredients </b></p>
            <ul>
              <li>${meal.meals[0].strIngredient1}: 
              ${meal.meals[0].strMeasure1}</li>
              <li>${meal.meals[0].strIngredient2}: 
              ${meal.meals[0].strMeasure2}</li>
              <li>${meal.meals[0].strIngredient3}: 
              ${meal.meals[0].strMeasure3}</li>
              <li>${meal.meals[0].strIngredient4}: 
              ${meal.meals[0].strMeasure4}</li>
              <li>${meal.meals[0].strIngredient5}: 
              ${meal.meals[0].strMeasure5}</li>
            </ul>
            <p><b>Recipe</b></p>
            <p>${meal.meals[0].strInstructions}</p>  
            <div class="tags"> <b>Tags:</b> 
            ${(meal.meals[0].strTags || '')
        .split(',')
        .map((el) => `<code class='tag'>${el}</code>`)}
              </div>
          </div>
        </div>
  
        <h3 class="counter">Comments(<b class="total-comments">0</b>)</h3> 
        <div class='user-comments'> 
        ${commentsList
        ? commentsList
          .map(
            (comment) => `
          <div class="comment-holder">
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
    popUpSection.append(stringItem);

    const closeBtn = stringItem.querySelector('.close');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpSection.classList.add('hidden');
    });

    const form = stringItem.querySelector('form');
    const commentsContainer = document.querySelector('.meal-comments');

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
      today = `${mm}/${dd}/${yyyy}`;

      const commentsString = `
        <div class="comment-holder">
          <div class="commented">
            <div class="username"><b>${user}:</b></div>
            <div class="message">${message}</div>
          </div>
        <div class="date">${today}</div>
      </div>`;

      const commentItem = parser.parseFromString(commentsString, 'text/html')
        .body.firstChild;
      commentsContainer.append(commentItem);
      form.reset();
    });
  });
};

export default displayModal;
