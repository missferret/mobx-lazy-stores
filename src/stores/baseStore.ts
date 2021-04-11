import RootStore from "./root";

interface BaseStore {

}

export default class Base implements BaseStore{
  private rootStore: RootStore = {};

  init (rootStore: RootStore) {
    this.rootStore = rootStore;
    return this;
  }
}
