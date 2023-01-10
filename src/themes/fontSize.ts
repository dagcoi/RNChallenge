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
    two: heightpixel * 8,
    three: heightpixel * 12,
    four: heightpixel * 16,
    five: heightpixel * 20,
    six: heightpixel * 24,
    seven: heightpixel * 28,
    eight: heightpixel * 32,
    nine: heightpixel * 36,
    height60: heightpixel * 60,
}
export { heightpixel, pixel }