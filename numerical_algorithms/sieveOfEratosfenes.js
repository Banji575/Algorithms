const sieveOfEratosfene = (n) => {
  var array = [], limit = Math.sqrt(n), result = [];

  // Создаю массив от 2 до (n - 1)
  for (var i = 2; i < n; i++) {
      array.push(true);
  }

  // Удаляю кратные 2, 3, 5...
  for (var i = 2; i <= limit; i++) {
      if (array[i]) {
          for (var j = i * i; j < n; j += i) {
              array[j] = false;
          }
      }
  }

  // Все значения массива [i] true являются простыми числами
  for (var i = 2; i < n; i++) {
      if(array[i]) {
          result.push(i);
      }
  }

  return result;
};
console.log(sieveOfEratosfene(200))
