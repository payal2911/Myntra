import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import App from "./Myntra";
import { MaterialIcons } from '@expo/vector-icons';
import Button from "../components/Button";

const Home = (props) => {
const [input, setInput] = useState("");
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<App/>
	{/* <TouchableOpacity
		title="Go to Profile"
		color="#006600"
		onPress={() =>
		props.navigation.navigate("NextScreen", { username: input })
		}>
      <Text>
     hello
      </Text>
    </TouchableOpacity> */}
	
	<Button press={() =>
		props.navigation.navigate("NextScreen", { username: input })}/>
		
	</View>
);
};

export default Home;

const styles = StyleSheet.create({
	button: {
		marginTop: 5,
		padding: 10,
		marginHorizontal: 50,
		borderWidth: 2,
		borderColor: '#fd2e53',
		flexDirection: 'row',
		borderRadius: 30,

	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
		color: '#fd2e53',
	},
	signUpText: {
		flex: 0.95
	},
});