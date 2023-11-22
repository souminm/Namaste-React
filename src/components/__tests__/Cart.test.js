import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
}); //mock function

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Bakery (20)");

  fireEvent.click(accordianHeader);

  const itemList = screen.getAllByTestId("menuItem");

  expect(itemList.length).toBe(20);

  const addbtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addbtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addbtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("menuItem").length).toBe(22);

  const cartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(cartBtn);

  expect(screen.getAllByTestId("menuItem").length).toBe(20);

  expect(
    screen.getByText("Cart is Empty, Please add items to Cart!!")
  ).toBeInTheDocument();
});
