import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  containerNavbar: {
    width: Dimensions.get("window").width,
    height: 70,
    backgroundColor: "#F9F9F9",
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    zIndex: 4000
  },
  circleNavbar: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#8482FF",
    position: "relative",
    top: -25,
    alignItems: "center",
    justifyContent: "center"
  },
  btnNavbar: {
    width: 130,
    height: "100%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  NavbarIcon: {
    width: 25,
    height: 25
  },
  NavbarIconGray: {
    width: 25,
    height: 25,
    opacity: 0.5
  },
  containerWeeks: {
    padding: 50
  },
  semana: {
    height: 100,
    borderRadius: 5,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    position: "relative"
  },
  HeaderRanking: {
    height: 125,
    borderRadius: 5,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    position: "relative"
  },
  tituloSemana: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },
  preguntasPorSemana: {
    color: "white"
  },
  imgSemana: {
    height: 120,
    position: "absolute",
    bottom: 0,
    right: 15
  },
  titleWeeks: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
    color: "#262626",
    marginBottom: 15
  }
});

export default styles;
