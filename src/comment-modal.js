export default function createCommentModal(product) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
      <div class="product-info">
        <img src="${product.image}" alt="${product.name}">
        <button class="close-btn">
  <i class="fas fa-times"></i>
</button>
        <h2>${product.name}</h2>
        <p>Description of the image</p>
      </div>
      <div class="comments-section">
        <h2>Comments (0)</h2>
        <div class="comments">
          <!-- Here you can loop through comments and display each comment -->
        </div>
        <form>
          <label><input type="text" placeholder="Add your name"></label>
          <label>  <input type="text" placeholder="Your insights"></label>
          <label> <input type="text" placeholder="Write a comment..."></label>
        <button>Comment</button>
      </form>
      

      </div>
    `;
  overlay.appendChild(popup);

  const closeBtn = popup.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
}
