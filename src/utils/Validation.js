export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  if (!isEmailValid) return "Email ID is not valid";

  const isPasswordValid = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/.test(password);
  if (!isPasswordValid) return "Password must be at least 8 characters and include uppercase, lowercase, and numbers.";

  if (name != null) {
    const isNameValid = /^[a-zA-Z\s'-]{2,50}$/.test(name.trim());
    if (!isNameValid) return "Name is not valid (only letters, spaces, hyphens allowed)";
  }

  return null;
};
