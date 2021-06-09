import { logout } from '../components/navbars/LogoutFunc';


describe("Logout Function", () => {

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        removeItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });

  it("removes user data from local storage", () => {
    logout();

    expect(localStorage.removeItem).toHaveBeenNthCalledWith(1, "email");
    expect(localStorage.removeItem).toHaveBeenNthCalledWith(2, "_id");
    expect(localStorage.removeItem).toHaveBeenNthCalledWith(3, "user_type");
    expect(localStorage.removeItem).toHaveBeenCalledTimes(3);

  })

  it("sets isLoggedIn to false", () => {
    logout();

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  })

})