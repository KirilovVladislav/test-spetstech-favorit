export const pattern =
  /(\+7|8|7)[\s ]?[\s(]?(\d{3})[\s)]?[\s ]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;

export const loginValidation = (email: string) => {
  if (pattern.test(email)) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required.';
  }
  return 'Please enter a valid phone number.';
};

export const passwordValidation = (value: string) => {
  if (value.trim() === '') {
    return 'Password is required.';
  }
  if (value.length < 6) {
    return 'Password shorter than 6 characters.';
  }
  return null;
};
