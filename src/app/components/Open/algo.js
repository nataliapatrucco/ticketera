const b = [2, 5, 10, 1];

function orden(arr) {
  var ordenado = arr.sort(function(a, b) {
    return a - b;
  });

  const o = ordenado[ordenado.length - 1] - ordenado[0];
  return o;
}

orden(b)