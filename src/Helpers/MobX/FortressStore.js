import { action, makeObservable, observable } from "mobx";

class FortressStore {
  fortressAccounts = [];

  constructor() {
    makeObservable(this, {
      fortressAccounts: observable,
      addFortressAccount: action,
      getFortressAccounts: action,
    });
  }

  addFortressAccount(fortressAccount) {
    this.fortressAccounts.push(fortressAccount);
  }

  getFortressAccounts(index) {
    return this.fortressAccounts[index];
  }
}

const fortressStore = new FortressStore();
export default fortressStore;
