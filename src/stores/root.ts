class RootStore {
  constructor (stores: {[k: string]: any}) {
    const storesWithRef = Object.keys(stores).reduce((acc, key) => {
        return ({
          ...acc,
          [key]: stores[key].init(this),
        });
      }, {},
    );
    Object.assign(this, storesWithRef);
  }
}

export default RootStore;
