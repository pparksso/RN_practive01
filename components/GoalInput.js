import {useState} from "react";
import {View, TextInput, Button, StyleSheet} from "react-native";

const GoalItem = props => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const inputHandler = text => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        onChangeText={inputHandler}
        style={styles.textInput}
        placeholder="Your course goal!"
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
});
