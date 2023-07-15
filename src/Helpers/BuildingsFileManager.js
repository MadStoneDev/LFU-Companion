import * as FileSystem from "expo-file-system";
import buildingStore from "./BuildingStore";

const filePath = `${FileSystem.documentDirectory}/buildingsData.json`;

const checkAndCreateBuildingFile = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(filePath);

    if (!fileInfo.exists) {
      await FileSystem.writeAsStringAsync(filePath, "{}");

      await saveDataToBuildingFile(buildingStore);
      console.log("File created successfully");
    }
  } catch (err) {
    console.error("Error checking and creating file:", err);
  }
};

const loadDataFromBuildingFile = async () => {
  try {
    const fileContent = await FileSystem.readAsStringAsync(filePath);
    return JSON.parse(fileContent);
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
};

const saveDataToBuildingFile = async (data) => {
  const jsonString = JSON.stringify(data);
  try {
    await FileSystem.writeAsStringAsync(filePath, jsonString);
    console.log("Data saved successfully");
  } catch (err) {
    console.error("Error saving data:", err);
  }
};

const deleteDataFromBuildingFile = async () => {
  try {
    await FileSystem.deleteAsync(filePath);
    console.log("Data deleted successfully");
  } catch (err) {
    console.error("Error deleting data:", err);
  }
};

export {
  checkAndCreateBuildingFile,
  loadDataFromBuildingFile,
  saveDataToBuildingFile,
  deleteDataFromBuildingFile,
};
