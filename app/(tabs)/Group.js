import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Group = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1.5,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text style={styles.heading}>Groups</Text>
      </View>
      <View
        style={{
          flex: 2,
          padding: 15,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#c1dece",
          }}
        >
          <View style={styles.card}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Blogs Family
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#c1dece",
                borderRadius: 5,
                marginTop: 5,
              }}
            >
              <Text style={{ paddingHorizontal: 5, paddingVertical: 2 }}>
                11 members
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3 }}>
            <ImageBackground
              source={require("../../assets/images/group.jpg")}
              resizeMethod="cover"
              style={{
                flex: 1,
                borderRadius: 5,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 5.5,

          backgroundColor: "#edf5f4",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "500", textAlign: "center" }}>
          No groups Yet...
        </Text>
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: "black", textAlign: "center" }}
          >
            You aren't a part of any groups yet, create groups and invite your
            family and friends to share your wishlist with!
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#28b56a",
            marginHorizontal: 25,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "black",
              textAlign: "center",
              paddingVertical: 5,
              color: "white",
            }}
          >
            Create a Group
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Group;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textTransform: "capitalize",
    fontWeight: "700",
    marginLeft: 15,
  },
  card: {
    flex: 7,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
    borderRightWidth: 5,
    borderRightColor: "white",
    borderStyle: "dashed",
  },
});
