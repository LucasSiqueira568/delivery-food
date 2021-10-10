import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 500,
    position: "relative",
  },
  viewTitle: {
    position: "absolute",
    top: 80,
    width: "100%",
  },
  containerWellcome: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red'
  },
  wellcomeTitle: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "orange",
    width: 250,
    height: 50,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
  },
});

export default styles;
