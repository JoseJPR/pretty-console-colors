// Include axios dependences
import axios from 'axios';

// Import color Console Libary
import '../src/index.js';

// Set logs type
const typeLogs = ['log', 'info', 'warn', 'error'];

(() => {
  axios('http://whatthecommit.com/index.txt').then((result) => {
    typeLogs.forEach((x) => console[x](result.data));
  }).catch((err) => {
    console.error(err);
  });
})();
