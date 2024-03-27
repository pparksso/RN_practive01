import {useState} from "react";
import {View, TextInput, Button, StyleSheet, Modal} from "react-native";

const GoalItem = props => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const inputHandler = text => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    props.hiddenModal();
    setEnteredGoalText("");
  };
  return (
    <Modal visible={props.show} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={enteredGoalText}
            å
            onChangeText={inputHandler}
            style={styles.textInput}
            placeholder="Your course goal!"
          />
        </View>
        <View style={styles.btns}>
          <Button title="Cancle" onPress={props.hiddenModal} />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
