import * as FileSystem from "expo-file-system";

const filePath = `${FileSystem.documentDirectory}/resourcesData.json`;

const checkAndCreateFile = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(filePath);

    if (!fileInfo.exists) {
      await FileSystem.writeAsStringAsync(filePath, "{}");
      console.log("File created successfully");
    }
  } catch (err) {
    console.error("Error checking and creating file:", err);
  }
};

const loadDataFromFile = async () => {
  try {
    const fileContent = await FileSystem.readAsStringAsync(filePath);
    const data = JSON.parse(fileContent);
    return data;
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

export { checkAndCreateFile, loadDataFromFile, saveDataToFile };
