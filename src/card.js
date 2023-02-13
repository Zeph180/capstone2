export default function createCard(product) {
  const card = document.createElement('div');
  card.className = 'card';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = `${product.name} Image`;
  productImage.classList.add('card__img');

  imageContainer.appendChild(productImage);

  const productName = document.createElement('h3');
  productName.textContent = product.name;

  const likeIcon = document.createElement('i');
  likeIcon.className = 'fa fa-heart';

  const likeCounter = document.createElement('span');
  likeCounter.textContent = product.likes;

  const likeContainer = document.createElement('div');
  likeContainer.className = 'like-container';
  likeContainer.appendChild(likeIcon);
  likeContainer.appendChild(likeCounter);

  card.appendChild(imageContainer);
  card.appendChild(productName);
  card.appendChild(likeContainer);

  likeContainer.addEventListener('click', () => {
    product.likes += 1;
    likeCounter.textContent = product.likes;
  });

  return card;
}
