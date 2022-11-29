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
            // TODO Implement navigation logic
          },
        },
      ]}
    />
  );
};

export const TimelineScreen = () => {
  return <TimelineScreenLayout title="Timeline" list={users} />;
};

export const ProfileScreen = () => {
  // TODO: remove mock, get user from somewhere else
  const user = { name: "Name" };

  return (
    <DefaultScreenLayout
      title={`${user.name}'s Profile`}
      buttons={[
        {
          label: "Open Profile Details",
          onPress: () => {
            // TODO: implement navigation
          },
        },
      ]}
    />
  );
};

export const ProfileDetailsScreen = () => {
  // TODO: remove mock, get name user from Profile screen
  const user = { name: "Name", id: 0, followers: 0 };
  return (
    <ProfileDetailsScreenLayout
      title="Profile Details"
      user={user}
      buttons={[
        {
          label: "Dismiss",
          onPress: () => {
            // TODO: implement go back action
          },
        },
      ]}
    />
  );
};
