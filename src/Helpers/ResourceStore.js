import { makeObservable, observable, action, computed } from "mobx";

class ResourceStore {
  username = "";

  stone = {
    warehouse: 0,
    chests: {
      5000: 0,
      1000: 0,
      500: 0,
      150: 0,
      50: 0,
      10: 0,
      5: 0,
      2: 0,
    },
  };

  iron = {
    warehouse: 0,
    chests: {
      6000: 0,
      3000: 0,
      600: 0,
      300: 0,
      100: 0,
      30: 0,
      6: 0,
      3: 0,
      2: 0,
    },
  };

  zCoins = {
    warehouse: 0,
    chests: {
      1000: 0,
      500: 0,
      100: 0,
      50: 0,
      15: 0,
      5: 0,
      1: 0,
    },
  };

  diamonds = {
    warehouse: 0,
    chests: {
      1000: 0,
      50: 0,
      20: 0,
      10: 0,
    },
  };

  constructor() {
    makeObservable(this, {
      stone: observable,
      iron: observable,
      zCoins: observable,
      diamonds: observable,
      username: observable,
      updateUsername: action,
      updateWarehouseQuantity: action,
      updateChestQuantity: action,
      totalStone: computed,
      totalIron: computed,
      totalZCoins: computed,
      totalDiamonds: computed,
    });
  }

  updateUsername(username) {
    this.username = username;
  }

  updateWarehouseQuantity(resourceType, amount) {
    this[resourceType].warehouse = parseInt(amount, 10);
  }

  updateChestQuantity(resourceType, quantity, amount) {
    this[resourceType].chests[quantity] = parseInt(amount, 10);
  }

  get totalStone() {
    let total = this.stone.warehouse;
    Object.keys(this.stone.chests).forEach((key) => {
      total +=
        key * (isNaN(this.stone.chests[key]) ? 0 : this.stone.chests[key]);
    });

    return total;
  }

  get totalIron() {
    let total = this.iron.warehouse;
    Object.keys(this.iron.chests).forEach((key) => {
      total += key * (isNaN(this.iron.chests[key]) ? 0 : this.iron.chests[key]);
    });

    return total;
  }

  get totalZCoins() {
    let total = this.zCoins.warehouse;
    Object.keys(this.zCoins.chests).forEach((key) => {
      total +=
        key * (isNaN(this.zCoins.chests[key]) ? 0 : this.zCoins.chests[key]);
    });

    return total;
  }

  get totalDiamonds() {
    let total = this.diamonds.warehouse;
    Object.keys(this.diamonds.chests).forEach((key) => {
      total +=
        key *
        (isNaN(this.diamonds.chests[key]) ? 0 : this.diamonds.chests[key]);
    });

    return total;
  }
}

const resourceStore = new ResourceStore();

export default resourceStore;
