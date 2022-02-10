const result = prompt('Факториал числа')

function* func(n = 10) {
  let y = 1;
  for (let i = 1; i < n; i++) {
    y = y * (i + 1);
    yield y;
  }
}

alert([...func(result)].pop())