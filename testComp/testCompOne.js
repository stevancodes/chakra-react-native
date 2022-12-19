import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Input, InputProps, InputStyleProps } from "@chakra-ui/core";
import { css } from "@emotion/core";

const CustomInput: React.FC<InputProps> = ({ placeholder, isDisabled, ...props }) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={css(styles.input, {
          placeholderColor: isDisabled ? "gray" : "black",
        })}
        value={value}
        placeholder={placeholder}
        editable={!isDisabled}
        onChangeText={(text) => setValue(text)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add your styles here
  },
  input: {
    // Add your styles here
  },
});

export default CustomInput;
