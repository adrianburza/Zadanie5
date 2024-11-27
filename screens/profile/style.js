import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale, scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  backButton: {
    fontSize: scaleFontSize(14),
    color: "#022150",
    marginLeft: horizontalScale(10),
    marginTop: verticalScale(10),
  },
  profileHeader: {
    alignItems: "center",
    marginTop: verticalScale(60),
  },
  profileImage: {
    width: horizontalScale(120),
    height: verticalScale(210),
    borderRadius: horizontalScale(60),
    borderWidth: 2,
    borderColor: "#0150EC",
  },
  profileTitle: {
    fontSize: scaleFontSize(25),
    fontWeight: "600",
    color: "#022150",
    marginTop: verticalScale(30),
  },
  followInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(40),
  },
  followInfo: {
    alignItems: "center",
  },
  followNumber: {
    fontSize: scaleFontSize(24),
    fontWeight: "600",
    color: "#022150",
  },
  followLabel: {
    fontSize: scaleFontSize(16),
    color: "#79869F",
  },
  verticalLine: {
    width: horizontalScale(1),
    height: verticalScale(50),
    backgroundColor: "#EFF2F6",
    marginHorizontal: horizontalScale(25),
  },
  divider: {
    width: "90%",
    height: verticalScale(1),
    backgroundColor: "#EFF2F6",
    marginTop: verticalScale(40),
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: verticalScale(40),
  },
  tabItem: {
    fontSize: scaleFontSize(18),
    color: "#79869F",
  },
  activeTab: {
    color: "#022150",
    fontWeight: "600",
  },
  postGrid: {
    alignItems: "center", 
    justifyContent: "center", 
    paddingHorizontal: horizontalScale(10), 
    marginTop: verticalScale(30),
  },
  postImage: {
    width: horizontalScale(150),
    height: verticalScale(190),
    marginBottom: verticalScale(20),
    marginHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(12),
  },
});

export default style;
