import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Profile() {
  const { selectedTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: selectedTheme === "DARK" ? "#000" : "#fff" },
      ]}
    >
      <Text>Tela de perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
