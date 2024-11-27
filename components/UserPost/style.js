import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(10),
    },
    userInfo: {
        marginLeft: horizontalScale(10),
        flexDirection: 'column',
    },
    userName: {
        fontSize: scaleFontSize(16),  
        fontWeight: '500',
        lineHeight: verticalScale(24), 
        color: '#000',  
        marginBottom: verticalScale(11),
    },
    location: {
        fontSize: scaleFontSize(12),
        fontWeight: '400',
        lineHeight: verticalScale(20),
        color: '#79869F', 
    },
    moreOptions: {
        width: horizontalScale(32),
        height: verticalScale(32),
        position: 'absolute',
        top: verticalScale(15),
        right: horizontalScale(0),
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotsIcon: {
        width: horizontalScale(30),
        height: verticalScale(30),
    },
    postImage: {
        width: '100%',
        height: verticalScale(320),
        borderRadius: horizontalScale(15),
        marginBottom: verticalScale(5),
    },
    reactions: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(25),
    },
    reactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: horizontalScale(25),  
    },
    reactionIcon: {
        width: horizontalScale(24), 
        height: verticalScale(30),
        marginRight: horizontalScale(5),
    },
    reactionText: {
        fontSize: scaleFontSize(14),
        color: '#79869F',
    }, 
    separatorLine: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: '#EFF2F6',
    },
});

export default style;
