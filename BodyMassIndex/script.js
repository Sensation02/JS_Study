alert('Ласкаво просимо до калькулятора ІМТ');
const weight = prompt('Яка ваша вага');
const height = prompt('Який ваш зріст? Вкажіть у метрах');

const bodyMassIndex = weight / Math.pow(height, 2);

if (bodyMassIndex < 18.5) {
  alert('Недостатня маса тіла!');
}
if (bodyMassIndex > 18.5 && bodyMassIndex < 24.9) {
  alert('Норма!');
}
if (bodyMassIndex > 25.0 && bodyMassIndex < 29.9) {
  alert('Передожиріння!');
}
if (bodyMassIndex > 30.0 && bodyMassIndex < 34.9) {
  alert('Ожиріння 1 ступеню');
}
if (bodyMassIndex > 35.0 && bodyMassIndex < 39.9) {
  alert('Ожиріння 2 ступеню');
}
if (bodyMassIndex > 40.0) {
  alert('Ожиріння 3 ступеню');
}
