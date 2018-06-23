import chai from "chai";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import createChaiEnzyme from "chai-enzyme";
import dirtyChai from "dirty-chai";
import createChaiJestDiff from "chai-jest-diff";

global.jestExpect = global.expect;
global.expect = chai.expect;

chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(createChaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });
