import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
const fontSize = {
    largest: RFValue(25, 800),
    extraLarge: RFValue(22, 800),
    large: RFValue(20, 800),
    medium: RFValue(18, 800),
    small: RFValue(16, 800),
    extraSmall: RFValue(14, 800),
    XXS: RFValue(12, 800),
    XXXS: RFValue(10, 800),
}

export default fontSize;

const { height } = Dimensions.get('window');
const heightpixel = height / 800

const pixel = {
    one: heightpixel * 4,
    two: height * 8,
    three: height * 12,
    four: height * 16,
    five: height * 20,
    six: height * 24,
    seven: height * 28,
    eight: height * 32,
    nine: height * 36,
}
export { heightpixel, pixel }