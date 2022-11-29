import { users, currentUserId } from "../mocks";
import {
  DefaultScreenLayout,
  ProfileDetailsScreenLayout,
  TimelineScreenLayout,
} from "./ScreenLayouts";

export const HomeScreen = ({ navigation }) => {
  return (
    <DefaultScreenLayout
      title="Home"
      buttons={[
        {
          label: "Go to Current User Profile",
          onPress: () => {
            const currentUser = users.find((user) => user.id === currentUserId);
            navigation.navigate("Profile", {
              user: currentUser,
            });
          },
        },
        {
          label: "Go to Timeline",
          onPress: () => {
            navigation.navigate("Timeline");
          },
        },
      ]}
    />
  );
};

export const ProfileScreen = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <DefaultScreenLayout
      title={`${user.name}'s Profile`}
      buttons={[
        {
          label: "Open Profile Details",
          onPress: () => {
            navigation.navigate("ProfileDetails", {
              user,
            });
          },
        },
      ]}
    />
  );
};

export const ProfileDetailsScreen = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <ProfileDetailsScreenLayout
      title="Profile Details"
      user={user}
      buttons={[
        {
          label: "Dismiss",
          onPress: () => {
            navigation.goBack();
          },
        },
      ]}
    />
  );
};

export const TimelineScreen = ({ navigation }) => {
  return (
    <TimelineScreenLayout
      title="Timeline"
      list={users}
      onPressListItem={(user) => {
        navigation.navigate("Profile", { user });
      }}
    />
  );
};
