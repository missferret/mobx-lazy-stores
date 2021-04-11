import RootStore from "./root";
import Base from "./baseStore";

const createStore = () => {
  return new RootStore({
    base: new Base(),
  });
};

export default createStore;
