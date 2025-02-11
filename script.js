const shareButton = document.querySelector('.js-share-img-container');
let isButtonCliked = false;

shareButton.addEventListener('click', () => {
  const mediaContainer = document.querySelector('.js-share-media-container');

  if (!isButtonCliked) {
    mediaContainer.style.display = 'flex';
    shareButton.style.zIndex = "1";
    isButtonCliked = true ;
  } else {
    mediaContainer.style.display = 'none';
    shareButton.style.background = 'var(--Light-grayish-blue)';
    isButtonCliked = false;
  }
});



