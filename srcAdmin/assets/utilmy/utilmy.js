const colorC = require('ansi-colors');

// enleve les caracteres bizares du string
cleen = (string) => string.replace(/[^a-z0-9-\s@.'"]/gi, '');

// enleve les caracteres bizzares d'un array des string
cleanArray = (array) => {
  const results = array.map((value) => `${cleen(value)}`);
  return results;
};

// enleve les caracteres bizzares d'un Json avec des string
cleanObj = (data) => {
  Object.keys(data).map((key, index) => {
    data[key] = cleen(data[key]);
  });
};

// return true si un Json est vide
isVide = (obj) => Object.keys(obj).length === 0;

// transforme un Json en string, utile pour imprimer en console
jsonToString = (obj) => (Object.keys(obj).map((k) => obj[k])).toString();

// imprimer un message d'alerte dans la console
printY = (consoleMsg, msgConsole) => {
  console.log(colorC.yellow(consoleMsg), msgConsole);
};

// imprimer un message de succes en couleur magenta dans la console
printC = (consoleMsg, msgConsole) => {
  console.log(colorC.magenta(consoleMsg), msgConsole);
};

// imprime un message d'information dans la console
printB = (consoleMsg, msgConsole) => {
  console.log(colorC.blue(consoleMsg), msgConsole);
};

// imprime un message de succes de couleur vert dans la console
printG = (consoleMsg, msgConsole) => {
  console.log(colorC.green(consoleMsg), msgConsole);
};

// imprime un message d'error dans la console
printR = (consoleMsg, msgConsole) => {
  console.log(colorC.red(consoleMsg), msgConsole);
};

module.exports = {
  cleen,
  cleanArray,
  cleanObj,
  isVide,
  jsonToString,
  printY,
  printB,
  printG,
  printR
};
