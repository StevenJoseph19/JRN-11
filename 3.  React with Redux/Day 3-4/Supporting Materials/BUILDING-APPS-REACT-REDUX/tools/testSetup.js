import { configure } from "enzyme";
// Use below import with versions of React > 17
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
