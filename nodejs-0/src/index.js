'use strict'

const fibonacci = () => {
  const serie = [];
  serie.push(0);
  serie.push(1);

  let nextNumber = 1;

  while(nextNumber <= 350) {
      const penultimo = serie[serie.length - 2];
      const ultimo = serie[serie.length - 1];

      nextNumber = penultimo + ultimo;

      if (nextNumber <= 350) serie.push(nextNumber);
  }

  return serie;
}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
