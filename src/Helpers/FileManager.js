class FileManager {
  constructor(data = {}) {
    this.data = data;
  }

  getTotalStone() {
    return (
      0 +
      this.data.mainStone +
      this.data.stone500 * 500 +
      this.data.stone150 * 150 +
      this.data.stone50 * 50 +
      this.data.stone10 * 10 +
      this.data.stone5 * 5 +
      this.data.stone2 * 2
    );
  }

  getTotalIron() {
    return (
      0 +
      this.data.mainIron +
      this.data.iron300 * 300 +
      this.data.iron100 * 100 +
      this.data.iron30 * 30 +
      this.data.iron6 * 6 +
      this.data.iron3 * 3 +
      this.data.iron2 * 2
    );
  }

  getTotalZCoins() {
    return (
      0 +
      this.data.mainZCoins +
      this.data.zCoins500 * 500 +
      this.data.zCoins100 * 100 +
      this.data.zCoins50 * 50 +
      this.data.zCoins15 * 15 +
      this.data.zCoins5 * 5 +
      this.data.zCoins1
    );
  }

  getTotalDiamonds() {
    return (
      0 +
      this.data.mainDiamonds +
      this.data.diamonds50 * 50 +
      this.data.diamonds20 * 20 +
      this.data.diamonds10 * 10
    );
  }

  async loadData(fileDirectory = FileSystem.cacheDirectory + "saved") {
    const file = await FileSystem.readAsStringAsync(
      fileDirectory + "stats.json"
    );

    this.data = JSON.parse(file);
    return this.data;
  }

  async saveData(fileDirectory = FileSystem.cacheDirectory + "saved", data) {
    await FileSystem.writeAsStringAsync(
      fileDirectory + "stats.json",
      JSON.stringify(data)
    );
  }
}

const fileManager = new FileManager();
export default fileManager;
