try {
  const inputValue = prompt('Введіть число:');
  const parsedValue = Number(inputValue);
  let word ;

  if (Number.isNaN(parsedValue)) {
    throw 'Введено некоректне число!';
  }

  const lastCharacter = inputValue.charAt(inputValue.length-1);
  const beforeLastCharacter = inputValue.charAt(inputValue.length-2);

  switch (lastCharacter) {
    case '1':
      if (beforeLastCharacter !== '1') {
        word = 'рік';
        break;
      }
    case '2':
    case '3':
    case '4':
      if (beforeLastCharacter !== '1') {
        word = 'роки';
        break;
      }
    default:
      word = 'років';
  }

  console.log(`Вам ${inputValue} ${word}`);   

} catch (e) {
  console.error(e);
}