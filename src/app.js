import createCard from './card.js';
import products from './products.js';
import createCommentModal from './comment-modal.js';

const cardContainer = document.querySelector('.card-container');

export default function init() {
  products.forEach((product) => {
    const card = createCard(product);

    const commentBtn = document.createElement('button');
    commentBtn.innerHTML = 'Comment';
    card.appendChild(commentBtn);

    commentBtn.addEventListener('click', () => {
      createCommentModal(product);
    });

    const reservationBtn = document.createElement('button');
    reservationBtn.innerHTML = 'Reserve';
    card.appendChild(reservationBtn);

    cardContainer.appendChild(card);
  });
}
