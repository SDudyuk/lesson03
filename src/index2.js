try {
  const inputValue = prompt('Введіть рік:');
  const parsedValue = Number(inputValue);

  if (Number.isNaN(parsedValue)) {
    throw 'Введено некоректний рік!';
  }

  /*
  - рік, номер якого є кратним 400, — високосний;
  - решту років, номер яких є кратним 100, — невисокосні;
  - інші роки, номер яких є кратним 4, — високосні.
  */
 
  if (parsedValue % 400 === 0 || (parsedValue % 4 === 0 && parsedValue % 100 !== 0)) {
    console.log(`Рік ${inputValue} є високосним`);
  } else {
    console.log(`Рік ${inputValue} не є високосним`);
  }

} catch (e) {
  console.error(e);
}