export function logout() {
  localStorage.removeItem("user_email");
  localStorage.removeItem("password");
  localStorage.removeItem("user_type");
}
