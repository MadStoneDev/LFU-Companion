import { makeObservable, observable, action, computed } from "mobx";

class ResourceStore {
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
      updateWarehouseQuantity: action,
      updateChestQuantity: action,
      getTotalAmount: computed,
    });
  }

  updateWarehouseQuantity(resourceType, amount) {
    this[resourceType].warehouse = parseInt(amount, 10);
  }

  updateChestQuantity(resourceType, quantity, amount) {
    this[resourceType].chests[quantity] = parseInt(amount, 10);
  }

  get getTotalAmount() {
    return (resourceType) => {
      const resource = this[resourceType];
      const { warehouse, chests } = resource;

      const chestKeys = Object.keys(chests);
      const totalFromChests = chestKeys.reduce((total, chest) => {
        const chestAmount = chests[chest];

        return total + chestAmount;
      }, 0);

      return warehouse + totalFromChests;
    };
  }
}

const resourceStore = new ResourceStore();

export default resourceStore;
