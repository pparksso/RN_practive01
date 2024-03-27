import {useState} from "react";
import {StyleSheet, Text, View, FlatList, Pressable} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);

  const btnHandler = enteredGoalText => {
    setList(current => [
      ...current,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  const deleteGoalHandler = id => {
    setList(current => current.filter(goal => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={btnHandler}
        show={showModal}
        hiddenModal={() => setShowModal(false)}
      />
      <Pressable onPress={() => setShowModal(true)}>
        <View style={styles.addBtn}>
          <Text style={styles.addBtnText}>ADD NEW GOAL</Text>
        </View>
      </Pressable>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          data={list}
          renderItem={item => {
            return (
              <GoalItem
                id={item.item.id}
                text={item.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
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
  goalsContainer: {
    flex: 5,
  },
  addBtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  addBtnText: {
    textAlign: "center",
    borderWidth: 1,
    width: "50%",
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    overflow: "hidden",
  },
});
