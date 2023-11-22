import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard,{ withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

it("should render Restaurant card Component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name =screen.getByText("Andhra Gunpowder");
    expect(name).toBeInTheDocument();
})

it("should render restaurant card component with promoted label",()=>{
    //test HOC with promoted label()
    const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);
    render(<RestaurantPromotedCard resData={MOCK_DATA} />)
    const label = screen.getByText("Promoted");
    expect(label).toBeInTheDocument();
})