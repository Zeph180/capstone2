import './style.css';
import { postComment, getData, getComments } from './modules/api.js';

const cardsCont = document.getElementById('cards-container');
const popup = document.getElementById('popup');

const popData = async () => {
  const userData = await getData();
  console.log('ororor:', userData);

  userData.forEach((element) => {
    const card = document.createElement('article');

    card.innerHTML = `
    <img src=${element.picture.large} alt="">
    <article id="desc">
      <div id="name-like">
        <h3 id="name">${element.name.first}</h3>
        <div>
          <iconify-icon class="like-btn" icon="mdi:cards-heart-outline"></iconify-icon>
          <small>5 likes</small>
        </div>
      </div>
      <button class="comment-btn">Comments</button>
    </article>
    `;
    cardsCont.appendChild(card);
  });

  const commentBtns = Array.from(document.querySelectorAll('.comment-btn'));
  console.log(commentBtns);

  commentBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      popup.classList.add('visible');
      popup.classList.remove('not-visible');
      popup.innerHTML = `
      <img src=${userData[i].picture.large} alt="dee">
      <iconify-icon id="close-btn" icon="ic:outline-close"></iconify-icon>
      <section id="desc-sec">
        <h3>${userData[i].name.first} ${userData[i].name.last}</h3>
        <div id="pop-desc">
          <p>Gender: ${userData[i].gender}</p>
          <p>Email: ${userData[i].email}</p>
          <p>Phone: ${userData[i].phone}</p>
          <p>Power: ${userData[i].location.city}</p>
        </div>
      </section>

      <section id="comment-sec">
        <h3>Comments (2)</h3>
      </section>

      <section>
        <h3>Add a comment</h3>
        <form action="">
          <input type="text" name="usrName" id="usr-name" placeholder="Your name" required>
          <textarea name="usrComment" id="usr-comment" cols="30" rows="10" placeholder="Your insights" required></textarea>
          <button id="add-comment" type="submit">Add comment</button>
        </form>
      </section>
      `;
      console.log(userData[i]);

      const usrNameIn = document.getElementById('usr-name');
      const commentSec = document.getElementById('comment-sec');
      const ustName = usrNameIn.value;
      console.log(ustName);

      const renderComment = async () => {
        const comments = await getComments(i);
        console.log('cooo:', comments);
        comments.forEach((comment) => {
          commentSec.innerHTML += `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;
        });
      };

      const closeBtn = document.getElementById('close-btn');
      closeBtn.addEventListener('click', () => {
        popup.classList.add('not-visible');
        popup.classList.remove('visible');
      });

      const addCommentBtn = document.getElementById('add-comment');
      const comment = document.getElementById('usr-comment');
      addCommentBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const usrNameIn = document.getElementById('usr-name');

        const userInput = {
          id: i,
          userName: usrNameIn.value,
          comment: comment.value,
        };

        postComment(userInput);
        commentSec.innerHTML = '';
        renderComment();
      });

      renderComment();
    });
  });
};

// const addComment = () => {

// };

popData();
// addComment();