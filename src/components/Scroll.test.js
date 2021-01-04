import { shallow } from "enzyme";
import Scroll from "./Scroll";

it("expect to render Scroll component", () =>
  expect(shallow(<Scroll></Scroll>)).toMatchSnapshot());
