import { fireEvent,render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header page unit test cases", () => {
  it("Should render header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "LogIn" });
    // const loginButton = screen.getByText("LogIn");
    expect(loginButton).toBeInTheDocument();
  });

  it("Should render header component with a cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const cartItems = screen.getByText("Cart - (0 items)");
    const cartItems = screen.getByText(/Cart/); //Regex - / /
    expect(cartItems).toBeInTheDocument();
  });
  it("should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const loginButton = screen.getByRole("button",{name:"LogIn"});
       fireEvent.click(loginButton);
       const logoutButton = screen.getByRole("button",{name:"LogOut"});
       expect(logoutButton).toBeInTheDocument();
  })
});
