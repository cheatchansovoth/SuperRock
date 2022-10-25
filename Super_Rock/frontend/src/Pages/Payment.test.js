import { render } from "@testing-library/react";
import Payment from "./Payment";

describe(Payment, ()=>{
    it("Payment details addded", () => {
        const {getAllByTestId} = render(<Payment /> );
        const testValue = getAllByTestId("name").textContent;
        expect(testValue).toEqual();
    });

})