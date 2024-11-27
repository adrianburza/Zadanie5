import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, verticalScale, scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    header: {
        marginRight: horizontalScale(22),
        marginLeft: horizontalScale(27),
        marginTop: verticalScale(40),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    envelopeIcon: {
        padding: horizontalScale(14),
        borderRadius: horizontalScale(100),
        backgroundColor: "#F9FAFB",
    },
     messageNumberContainer: {
        backgroundColor: "#F35BAC",
        justifyContent: "center",
        flexDirection: "row",
        width: horizontalScale(10),
        height: verticalScale(15),
        borderRadius: horizontalScale(10),
        position: "absolute",
        right: horizontalScale(10),
        marginTop: verticalScale(18),
    },
    messageNumber: {
        color: "#FFF",
        fontFamily: getFontFamily("Inter_18pt", "600"),
        fontSize: scaleFontSize(6),
    },
    userStoryContainer: {
        marginTop: verticalScale(30),
        marginHorizontal: horizontalScale(24),
    },
    userPostContainer: {
        marginTop: verticalScale(35),
        marginHorizontal: horizontalScale(24),
    },
});

export default style;