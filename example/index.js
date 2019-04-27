// Get color Console Libary
require('pretty-console-colors');

// Include list emojis and axios dependences
const emojis = require('emojis-list');
const axios = require('axios');

// Set logs type
const typeLogs = ['log', 'info', 'warn', 'error'];

async function getCommet() {
  try {
    const result = await axios('http://whatthecommit.com/index.txt');
    return result;
  }catch(err){
    return err;
  }
}

function rand(){
  return Math.floor(Math.random() * 2000);
}

async function showCommet() {
  const commet = await getCommet();
  typeLogs.map(x => {
    console[x](emojis[rand()] + " " + commet.data);
  });
}

showCommet();