import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 40,
    height: '100%',
  },
  image: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  viewTitle: {
    position: "absolute",
    top: 80,
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerWellcome: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red'
  },
  wellcomeTitle: {
    color: "white",
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
