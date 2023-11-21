import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");  
  expect(heading).toBeInTheDocument();
});

test("should load button inside contact us component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");  
    const button = screen.getByText("Submit"); 
    expect(button).toBeInTheDocument();
  });

  test("should load input name inside contact us component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");  
    const inputName = screen.getByPlaceholderText("name"); 
    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input boxes inside contact us component", ()=>{
    render(<Contact/>)
    //Querying
    //for multiple items - getAllBy
    const inputBoxes = screen.getAllByRole("textbox"); //react element or JSX  Array
    console.log(inputBoxes.length);
    //Assertion
   expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(2);
  })