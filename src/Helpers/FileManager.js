import * as FileSystem from "expo-file-system";

class FileManager {
  constructor(data = {}) {
    this.data = data;
  }

  getTotalStone() {
    return (
      parseInt(this.data.stone) +
      parseInt(this.data.stone5000) * 5000 +
      parseInt(this.data.stone1000) * 1000 +
      parseInt(this.data.stone500) * 500 +
      parseInt(this.data.stone150) * 150 +
      parseInt(this.data.stone50) * 50 +
      parseInt(this.data.stone10) * 10 +
      parseInt(this.data.stone5) * 5 +
      parseInt(this.data.stone2) * 2
    );
  }

  getTotalIron() {
    return (
      parseInt(this.data.iron) +
      parseInt(this.data.iron300) * 300 +
      parseInt(this.data.iron100) * 100 +
      parseInt(this.data.iron30) * 30 +
      parseInt(this.data.iron6) * 6 +
      parseInt(this.data.iron3) * 3 +
      parseInt(this.data.iron2) * 2
    );
  }

  getTotalZCoins() {
    return (
      parseInt(this.data.zCoins) +
      parseInt(this.data.zCoins500) * 500 +
      parseInt(this.data.zCoins100) * 100 +
      parseInt(this.data.zCoins50) * 50 +
      parseInt(this.data.zCoins15) * 15 +
      parseInt(this.data.zCoins5) * 5 +
      parseInt(this.data.zCoins1)
    );
  }

  getTotalDiamonds() {
    return (
      parseInt(this.data.diamonds) +
      parseInt(this.data.diamonds50) * 50 +
      parseInt(this.data.diamonds20) * 20 +
      parseInt(this.data.diamonds10) * 10
    );
  }

  async createDirectory(fileDirectory = FileSystem.cacheDirectory + "saved/") {
    try {
      await FileSystem.makeDirectoryAsync(fileDirectory);
    } catch (err) {
      console.log("Directory already exists");
    }
  }

  async createSaveFile(fileDirectory = FileSystem.cacheDirectory + "saved/") {
    const data = {
      stone: 0,
      iron: 0,
      zCoins: 0,
      diamonds: 0,
      stone5000: 0,
      stone1000: 0,
      stone500: 0,
      stone150: 0,
      stone50: 0,
      stone10: 0,
      stone5: 0,
      stone2: 0,
      iron600: 0,
      iron300: 0,
      iron100: 0,
      iron30: 0,
      iron6: 0,
      iron3: 0,
      iron2: 0,
      zCoins500: 0,
      zCoins100: 0,
      zCoins50: 0,
      zCoins15: 0,
      zCoins5: 0,
      zCoins1: 0,
      diamonds50: 0,
      diamonds20: 0,
      diamonds10: 0,
    };
    try {
      const checkFile = await FileSystem.getInfoAsync(
        fileDirectory + "stats.json"
      );

      if (checkFile.exists) {
        console.log("File already exists");
      } else {
        await FileSystem.writeAsStringAsync(
          fileDirectory + "stats.json",
          JSON.stringify(data)
        );
      }
    } catch (err) {
      console.log("File already exists");
    }
  }

  async deleteFile(fileDirectory = FileSystem.cacheDirectory + "saved/") {
    try {
      await FileSystem.deleteAsync(fileDirectory + "stats.json");
    } catch (err) {
      console.log("File does not exist");
    }
  }

  async loadData(fileDirectory = FileSystem.cacheDirectory + "saved/") {
    const file = await FileSystem.readAsStringAsync(
      fileDirectory + "stats.json"
    )
      .then((res) => {
        this.data = JSON.parse(res);
      })
      .catch((err) => {
        console.log(err);
      });

    return this.data;
  }

  async saveData(data, fileDirectory = FileSystem.cacheDirectory + "saved/") {
    await FileSystem.writeAsStringAsync(
      fileDirectory + "stats.json",
      JSON.stringify(data)
    );
  }
}

const fileManager = new FileManager();
export default fileManager;
