import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';
      snowflake.style.left = `${Math.random() * 100}vw`;
      document.body.appendChild(snowflake);
      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    };

    setInterval(createSnowflake, 270);
    function typeWriter(textElement, words, delay) {
        const element = document.getElementById(textElement);
        let currentWordIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let currentWord = '';
      
    function type() {
          const word = words[currentWordIndex];
      
          if (isDeleting) {
            element.innerHTML = word.substring(0, currentCharIndex) + '<span class="pipe-character">|</span>';
            currentCharIndex--;
          } else {
            element.innerHTML = word.substring(0, currentCharIndex) + '<span class="pipe-character">|</span>';
            currentCharIndex++;
          }
      
          if (currentCharIndex === -1) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            currentWord = words[currentWordIndex];
          }
      
          if (!isDeleting && currentCharIndex === word.length) {
            isDeleting = true;
            setTimeout(type, delay * 2);
          } else {
            setTimeout(type, delay);
          }
        }
      
        type();
      }
      initScrollReveal(targetElements, defaultProps);
      initTiltEffect();
      const words = [
          "an Engineer",
          "a Web Developer",
          "a Badminton Player",
          "a Gamer"
        ];
        const delay = 100;
        typeWriter("typewriter", words, delay);
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".fa-bars");
    const menuList = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function () {
      menuList.classList.toggle("active");
    });
  });

  