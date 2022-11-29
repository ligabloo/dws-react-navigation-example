import {
  DefaultScreenLayout,
  TimelineScreenLayout,
} from "./components/ScreenLayouts";

const users = [
  {
    id: 1,
    name: "User #1",
  },
  {
    id: 2,
    name: "User #2",
  },
  {
    id: 3,
    name: "User #3",
  },
  {
    id: 4,
    name: "User #4",
  },
  {
    id: 5,
    name: "User #5",
  },
];

const loggedUserId = 1;

export default function App() {
  return <HomeScreen />;
}

const HomeScreen = () => {
  return (
    <DefaultScreenLayout
      title="Home"
      buttons={[
        {
          label: "Go to Current User Profile",
          onPress: () => {
            // TODO: implement navigation
          },
        },
      ]}
    />
  );
};

const TimelineScreen = () => {
  return <TimelineScreenLayout title="Timeline" list={users} />;
};

const ProfileScreen = () => {
  //TODO: Get user info from somewhere
  const user = undefined;

  return (
    <DefaultScreenLayout
      // TODO: Show user's name
      title="Profile"
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

const ProfileDetailsScreen = () => {
  return (
    <DefaultScreenLayout
      title="Profile Details"
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
