import { shallow } from "enzyme";
import SearchBox from "./SearchBox";


it("expect to render SearchBox component", () =>{
  const mockFn = {
    onSearchChange: jest.fn()
  };
  expect(shallow(<SearchBox {...mockFn}></SearchBox>)).toMatchSnapshot();
})

