// main.js
import './src/scss/style.scss'; // 確保名稱是 style.scss 而非 all.scss
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true,
});