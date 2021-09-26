import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    position: "relative",
  },
  viewTitle: {
    position: "absolute",
    top: 80,
    width: "100%",
  },
  containerWellcome: {
    position: "absolute",
    marginTop: 50,
    bottom: 10,
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red'
  },
  wellcomeTitle: {
    color: "#000",
    fontSize: 30,
    left: 20,
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
