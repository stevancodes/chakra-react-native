import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [focusInput, setFocusInput] = useState(false);

  function borderColor() {
    if (!focusInput) return { borderColor: "transparent" };
    return { borderColor: "blue" };
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={[styles.inputWrap, borderColor()]}>
        <View style={{ padding: 2, backgroundColor: "red", width: 30, margin: 2 }}>
          <Text>Hel</Text>
        </View>
        <TextInput
          onFocus={() => setFocusInput(true)}
          onBlur={() => setFocusInput(false)}
          stype={styles.input}
          secureTextEntry={true}
          placeholder="helloooo"
          placeholderTextColor="red"
        ></TextInput>
      </View>
      <StatusBar style="auto" />
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
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    width: 20,
  },
  inputWrap: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
  },
});
