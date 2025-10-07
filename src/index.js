import Validator from './validator.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#username-form');
  const input = document.querySelector('#username');
  const message = document.querySelector('#message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = input.value.trim();
    const valid = Validator.validateUsername(username);

    message.textContent = valid ? 'Имя пользователя корректно ✅' : 'Имя пользователя не прошло проверку ❌';
    message.style.color = valid ? 'green' : 'red';
  });
});
