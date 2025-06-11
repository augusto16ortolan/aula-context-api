import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { Picker } from "@react-native-picker/picker";
import { languages } from "../config/language";

export default function Home() {
  const { selectedTheme, setSelectedTheme } = useTheme();
  const { translate, changeSelectedLanguage, selectedLanguage } = useLanguage();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: selectedTheme === "DARK" ? "#000" : "#fff" },
      ]}
    >
      <Text>{translate("page")}</Text>
      <Text>Tema selecionado: {selectedTheme}</Text>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <TouchableOpacity
          style={{
            borderWidth: 3,
            padding: 10,
            borderRadius: 5,
            borderColor: selectedTheme === "DARK" ? "#000" : "#eb6434",
          }}
          onPress={() => setSelectedTheme("LIGHT")}
        >
          <Text>Claro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 3,
            padding: 10,
            borderRadius: 5,
            borderColor: selectedTheme === "DARK" ? "#eb6434" : "#000",
          }}
          onPress={() => setSelectedTheme("DARK")}
        >
          <Text>Escuro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(value) => changeSelectedLanguage(value)}
          style={styles.picker}
        >
          {Object.keys(languages).map((langCode) => (
            <Picker.Item key={langCode} label={langCode} value={langCode} />
          ))}
        </Picker>
      </View>
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
  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
    marginBottom: 30,
  },
  picker: {
    height: 50,
    width: 200,
  },
});
