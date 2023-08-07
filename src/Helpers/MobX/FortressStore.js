import { action, makeObservable, observable } from "mobx";
import FortressAccount from "./FortressAccount";

class FortressStore {
  @observable fortressAccounts = [];
  @observable activeFortressAccount = null;

  @action addFortressAccount(username) {
    const fortressAccount = new FortressAccount(username);
    this.fortressAccounts.push(fortressAccount);
    this.setActiveFortressAccount(this.fortressAccounts.length - 1);
  }

  @action setActiveFortressAccount(fortressAccount) {
    this.activeFortressAccount = fortressAccount;
  }

  @action getActiveFortressAccount() {
    return this.activeFortressAccount;
  }

  @action getFortressAccounts(index) {
    return this.fortressAccounts[index];
  }
}

const fortressStore = new FortressStore();
export default fortressStore;
