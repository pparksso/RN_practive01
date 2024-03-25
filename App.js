import {useState} from "react";
import {StyleSheet, Text, View, FlatList} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
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
      <GoalInput onAddGoal={btnHandler} />
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
});
