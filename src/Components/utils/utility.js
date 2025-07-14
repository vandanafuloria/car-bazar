export function validateEmail(email) {
  console.log("hi");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validateMobile(mobile) {
  const regex = /^[6-9]\d{9}$/; // For Indian numbers: starts with 6-9 and 10 digits
  return regex.test(mobile);
}

export function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}
