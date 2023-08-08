import { action, makeObservable, observable } from "mobx";
import FortressAccount from "./FortressAccount";

class FortressStore {
  fortressAccounts = [];
  activeFortressAccount = null;
  accountsUsed = 0;
  accountsAllowable = 1;

  constructor() {
    makeObservable(this, {
      fortressAccounts: observable,
      activeFortressAccount: observable,
      accountsUsed: observable,
      accountsAllowable: observable,
      addFortressAccount: action,
      updateAccountsUsed: action,
      setActiveFortressAccount: action,
      getActiveFortressAccount: action,
      getFortressAccounts: action,
      resetFortressStore: action,
    });
  }

  addFortressAccount(username) {
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

  updateAccountsUsed() {
    this.accountsUsed = this.fortressAccounts.length;
  }

  setActiveFortressAccount(fortressAccount) {
    this.activeFortressAccount = fortressAccount;
  }

  getActiveFortressAccount() {
    return this.activeFortressAccount;
  }

  getFortressAccounts(index) {
    return this.fortressAccounts[index];
  }

  resetFortressStore() {
    this.fortressAccounts = [];
    this.activeFortressAccount = null;
    this.accountsUsed = 0;
    this.accountsAllowable = 1;
  }
}

const fortressStore = new FortressStore();
export default fortressStore;
