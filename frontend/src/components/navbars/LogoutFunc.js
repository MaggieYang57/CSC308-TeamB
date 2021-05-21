export function logout() {
  localStorage.removeItem("email");
  localStorage.removeItem("_id");
  localStorage.removeItem("user_type");
  localStorage.setItem("isLoggedIn", false);
}
