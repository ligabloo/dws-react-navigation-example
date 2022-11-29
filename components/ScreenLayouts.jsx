import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";

export const DefaultScreenLayout = ({ title, buttons = [] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {buttons.map((button) => (
        <TouchableOpacity style={styles.button} onPress={button.onPress}>
          <Text style={styles.buttonText}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const TimelineScreenLayout = ({ title, list, onPressListItem }) => {
  console.warn(list);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={{ flex: 1, borderTopWidth: 1 }}
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem} onPress={onPressListItem}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "blue",
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
  },
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
});
