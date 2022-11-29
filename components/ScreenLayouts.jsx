import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";

export const DefaultScreenLayout = ({ title, buttons = [], content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {content}
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.label}
          style={styles.button}
          onPress={button.onPress}
        >
          <Text style={styles.buttonText}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const TimelineScreenLayout = ({
  title,
  content,
  list,
  onPressListItem,
}) => {
  console.warn(list);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        style={{ flex: 1, borderTopWidth: 1 }}
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={String(item.id)}
            style={styles.listItem}
            onPress={() => onPressListItem(item)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export const ProfileDetailsScreenLayout = ({ user, buttons }) => {
  return (
    <DefaultScreenLayout
      title={`${user.name}'s Profile Details`}
      content={
        <>
          <Text style={styles.detailsItem}>Followers: {user.followers}</Text>
        </>
      }
      buttons={buttons}
    />
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
  detailsItem: {
    marginBottom: 10,
  },
});
