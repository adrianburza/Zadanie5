import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    userImageContainer: {
        borderColor: '#F35BAC',
        borderWidth: verticalScale(2),
        padding: horizontalScale(3),
    },
});

export default style;
