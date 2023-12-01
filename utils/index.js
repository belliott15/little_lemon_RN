export const validateEmail = (email) => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the provided email against the regular expression
  return emailRegex.test(email);
};
