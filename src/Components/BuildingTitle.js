import { Text, StyleSheet, View } from "react-native";

const BuildingTitle = ({ title, subtitle = "", icon = null }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 10,
        padding: 10,
        borderColor: "#ddd",
        borderRadius: 10,
        borderWidth: 1,
      }}
    >
      <View
        style={{
          marginRight: 10,
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          aspectRatio: 1,
          backgroundColor: "red",
          borderRadius: 9999,
        }}
      >
        {icon}
      </View>
      <View>
        <Text style={styles.buildingTitle}>{title}</Text>
        <Text style={styles.buildingSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buildingTitle: { fontSize: 18 },
  buildingSubtitle: { fontSize: 12 },
});

export default BuildingTitle;
