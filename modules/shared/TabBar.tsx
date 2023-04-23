import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Link, usePathname } from "expo-router";
import { FiltersIcon } from "./icons/Filters";
import { HomeIcon } from "./icons/HomeIcon";
import { useState } from "react";
import { FiltersSheet } from "../search/FiltersSheet";
import { SearchIcon } from "./icons/SearchIcon";
import { Route } from "./routes";

export const TabBar = ({}: BottomTabBarProps) => {
  const [modal, setModal] = useState(false);

  const pathname = usePathname();

  return (
    <>
      {modal && <FiltersSheet onClose={() => setModal(false)} />}

      <View accessibilityRole="button" style={styles.wrapper}>
        <View style={styles.tabBar}>
          <Link href={Route.Home}>
            <View
              style={[
                styles.link,
                Route.Home === pathname && styles.linkActive,
              ]}
            >
              <HomeIcon size={28} />
            </View>
          </Link>
          <Link href={Route.Search}>
            <View
              style={[
                styles.link,
                Route.Search === pathname && styles.linkActive,
              ]}
            >
              <SearchIcon size={24} />
            </View>
          </Link>
          <View style={styles.userAvatar}></View>
        </View>
        <TouchableHighlight
          style={styles.filtersButton}
          onPress={() => setModal(true)}
        >
          <FiltersIcon />
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "90%",
    height: 62,
    position: "absolute",
    left: 20,
    bottom: 30,
    paddingHorizontal: 30,
    gap: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    backgroundColor: "#fff",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 32,
    height: "100%",
    width: "100%",
  },
  userAvatar: {
    backgroundColor: "#ddd",
    height: 36,
    width: 36,
    borderRadius: 50,
  },
  filtersButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    width: 62,
    height: 62,
    borderRadius: 50,
  },
  link: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    height: 36,
    width: 36,
  },
  linkActive: {
    backgroundColor: "#F380511A",
  },
});
