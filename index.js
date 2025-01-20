// Make hamster face "bounce" when clicked
const hamsterFace = document.getElementById('hamster-face');
hamsterFace.addEventListener('click', () => {
  hamsterFace.style.animation = 'face-pop 0.5s ease-in-out';
  setTimeout(() => {
    hamsterFace.style.animation = ''; // Reset animation
  }, 500);
});

// Add hover effect to carrots
const carrots = document.querySelectorAll('.carrot');
carrots.forEach(carrot => {
  carrot.addEventListener('mouseenter', () => {
    carrot.style.transform = 'translateY(-10px) scale(1.1)';
    carrot.style.transition = 'transform 0.3s ease';
  });
  carrot.addEventListener('mouseleave', () => {
    carrot.style.transform = 'translateY(0) scale(1)';
  });
  carrot.addEventListener('click', () => {
    carrot.style.transform = 'scale(1.3)';
    setTimeout(() => {
      carrot.style.transform = 'scale(1)';
    }, 300);
  });
});

// Add text animation on scroll
const text = document.getElementById('text');
window.addEventListener('scroll', () => {
  const textPosition = text.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (textPosition < windowHeight - 100) {
    text.style.animation = 'text-bounce 1s ease-in-out forwards';
  }
});

// Keyframe animations
document.head.insertAdjacentHTML(
  'beforeend',
  `<style>
  @keyframes face-pop {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  @keyframes text-bounce {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>`
);
