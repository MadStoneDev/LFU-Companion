import * as FileSystem from "expo-file-system";
import resourceStore from "./MobX/ResourceStore";

const filePath = `${FileSystem.documentDirectory}/resourcesData.json`;

const checkAndCreateFile = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(filePath);

    if (!fileInfo.exists) {
      await FileSystem.writeAsStringAsync(filePath, "{}");

      await saveDataToFile(resourceStore);
      console.log("File created successfully");
    }
  } catch (err) {
    console.error("Error checking and creating file:", err);
  }
};

const loadDataFromFile = async () => {
  try {
    const fileContent = await FileSystem.readAsStringAsync(filePath);
    return JSON.parse(fileContent);
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
};

const saveDataToFile = async (data) => {
  const jsonString = JSON.stringify(data);
  try {
    await FileSystem.writeAsStringAsync(filePath, jsonString);
    console.log("Data saved successfully");
  } catch (err) {
    console.error("Error saving data:", err);
  }
};

const deleteDataFromFile = async () => {
  try {
    await FileSystem.deleteAsync(filePath);
    console.log("Data deleted successfully");
  } catch (err) {
    console.error("Error deleting data:", err);
  }
};

export {
  checkAndCreateFile,
  loadDataFromFile,
  saveDataToFile,
  deleteDataFromFile,
};
