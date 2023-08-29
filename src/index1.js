try {
  const inputValue = prompt('Введіть число:');
  const parsedValue = Number(inputValue);

  if (Number.isNaN(parsedValue)) {
    throw 'Введено некоректне число!';
  }

  if (parsedValue % 3 === 0 && parsedValue % 5 === 0) {
    console.log('FizzBuzz');
  } else if (parsedValue % 3 === 0) {
    console.log('Fizz');
  } else if (parsedValue % 5 === 0) {
    console.log('Buzz');
  }

} catch (e) {
  console.error(e);
}