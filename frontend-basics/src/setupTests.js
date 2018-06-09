import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import createChaiEnzyme from "chai-enzyme";
import chai from "chai";
import dirtyChai from "dirty-chai";
import createChaiJestDiff from "chai-jest-diff";

chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(createChaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });
