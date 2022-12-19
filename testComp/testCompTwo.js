import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  input: {
    height: 40,
    fontSize: 16,
    color: "#333",
  },
});

export default CustomInput;
