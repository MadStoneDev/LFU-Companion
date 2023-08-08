import { action, makeObservable, observable } from "mobx";
import FortressAccount from "./FortressAccount";

class FortressStore {
  @observable fortressAccounts = [];
  @observable activeFortressAccount = null;
  @observable accountsUsed = 0;
  @observable accountsAllowable = 1;

  @action addFortressAccount(username) {
    if (this.accountsUsed < this.accountsAllowable) {
      const fortressAccount = new FortressAccount(username);
      this.fortressAccounts.push(fortressAccount);
      this.updateAccountsUsed();
      this.setActiveFortressAccount(this.fortressAccounts.length - 1);
    } else {
      console.log("Fortress account limit reached");
      return null;
    }
  }

  @action updateAccountsUsed() {
    this.accountsUsed = this.fortressAccounts.length;
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

  @action resetFortressStore() {
    this.fortressAccounts = [];
    this.activeFortressAccount = null;
    this.accountsUsed = 0;
    this.accountsAllowable = 1;
  }
}

const fortressStore = new FortressStore();
export default fortressStore;
