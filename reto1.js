function findFirstRepeated(giftIds) {
  let repeated = {};

  for (gift of giftIds) {
    if (repeated[gift]) return gift;
    repeated[gift] = true;
  }
  return -1;
}

const giftIds = [2, 1, 2, 3, 4, 5, 1, 2, 4, 3, 5, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez
