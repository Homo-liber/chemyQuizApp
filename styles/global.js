import { StyleSheet } from "react-native";
import { COLORS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green1,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 23,
    color: COLORS.light,
  },
  titelBox: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  loginSmallbox: {
    minWidth: 100,
    backgroundColor: COLORS.green2,
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: "10",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: COLORS.purple,
    fontSize: 20,
  },
  headingTop: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: "600",
    color: COLORS.green2,
  },
  heading: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "500",
    color: COLORS.purple,
    textAlign: "center",
  },
  imageWelcomeBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imageWelcome: {
    height: 160,
    objectFit: "contain",
  },
  inputName: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#fff",
    padding: 5,
    fontSize: 22,
    borderRadius: 5,
    color: COLORS.purple,
  },
  yellowButtonBox: {
    alignItems: "center",
  },
  yellowButton: {
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: COLORS.yellow,
    height: 60,
    width: 150,
  },
  yellowButtonText: {
    color: COLORS.purple,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 30,
    fontWeight: "500",
  },
  greyButtonBox: {
    alignItems: "center",
  },
  greyButton: {
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: COLORS.grey,
    height: 60,
    width: 150,
  },
  greyButtonText: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "500",
    color: COLORS.yellow,
    textAlign: "center",
    justifyContent: "center",
  },
  textSmall: {
    fontSize: 27,
    color: COLORS.purple,
    textAlign: "center",
    marginTop: 10,
  },
  answerBox: {
    marginTop: 15,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    height: 78,
    backgroundColor: COLORS.yellow,
    borderRadius: 7,
    justifyContent: "center",
  },

  imageAdsBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imageAds: {
    height: 290,
    objectFit: "contain",
  },
  detailsAdsBox: {
    height: 390,
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 15,
    padding: 20,
  },
  resultBox: {
    height: 390,
    backgroundColor: COLORS.yellow,
    marginTop: 20,
    borderRadius: 15,
    padding: 20,
  },
});
