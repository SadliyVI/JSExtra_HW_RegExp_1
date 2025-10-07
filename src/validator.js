export default class Validator {
  static validateUsername(username) {
    // Только латиница, цифры, -, _
    if (!/^[a-zA-Z0-9-_]+$/.test(username)) {
      return false;
    }

    // Не начинается с цифры, _ или -
    if (/^[\d_-]/.test(username)) {
      return false;
    }

    // Не заканчивается _ или -
    if (/[_-]$/.test(username)) {
      return false;
    }

    // Не более трёх цифр подряд
    if (/\d{4,}/.test(username)) {
      return false;
    }

    return true;
  }
}
