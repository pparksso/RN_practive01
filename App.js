import {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [list, setList] = useState([]);

  const inputHandler = text => {
    setEnteredGoalText(text);
  };
  const btnHandler = () => {
    setList(current => [...current, enteredGoalText]);
    setEnteredGoalText("");
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          onChangeText={inputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <Button title="Add Goal" onPress={btnHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {list.map((item, i) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText} key={i}>
                {item}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
