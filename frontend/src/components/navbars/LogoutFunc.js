export function logout() {
  localStorage.removeItem("email")
  localStorage.removeItem("user_type")
  localStorage.setItem("isLoggedIn", false);
}
