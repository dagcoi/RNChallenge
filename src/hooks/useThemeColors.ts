import useColorScheme from "./useColorScheme"

const Colors = {
    light: {
        primary: '#1D9BF0',
        primarysecondary: '#00363d',
        secondary: '#4B4B4D',
        thirtdWhite: '#E0EEFF',
        greenPri: '#00CA95',
        redPri: '#F96472',
        white: '#FFFFFF',
        whitesecondary: '#F1F3F4',
        gray: '#4b4b4d',
        time: '#B5B8BF',
        black: '#000',
        black2: '#000000',
        translucentGrey: '#5B727E',
        yellow: '#FEBF10',
        boder: '#D6D6D6',
        gray2: '#A1A1A2AA',
        modal: '#D6D6D610',
        chatLeftBackground: '#F1F1F1',
        chatRightBackground: '#E2F8FF',
        Registration: '#FFAD2D',
        approve: '#1D9BF0',
        paycheck: '#4ABBFE',
        News: '#D795FF',
        Attendance: '#F96472',
        survey: '#F6851F',
        Meeting: '#EB8B9A',
        jobboard: '#02C954',
        colorApprove: '#5CDEBF',
        colorPending: '#F8964A',
        paycheck2: '#D0F4FF',
        green: '#77a300',
        textColor: '#00363d',
    },
    dark: {
        primary: '#1D9BF0',
        primarysecondary: '#00363d',
        secondary: '#4B4B4D',
        thirtdWhite: '#E0EEFF',
        greenPri: '#00CA95',
        redPri: '#F96472',
        white: '#FFFFFF',
        whitesecondary: '#F1F3F4',
        gray: '#4b4b4d',
        time: '#B5B8BF',
        black: '#000',
        black2: '#000000',
        translucentGrey: '#5B727E',
        yellow: '#FEBF10',
        boder: '#D6D6D6',
        gray2: '#A1A1A2AA',
        modal: '#D6D6D610',
        chatLeftBackground: '#F1F1F1',
        chatRightBackground: '#E2F8FF',
        Registration: '#FFAD2D',
        approve: '#1D9BF0',
        paycheck: '#4ABBFE',
        News: '#D795FF',
        Attendance: '#F96472',
        survey: '#F6851F',
        Meeting: '#EB8B9A',
        jobboard: '#02C954',
        colorApprove: '#5CDEBF',
        colorPending: '#F8964A',
        paycheck2: '#D0F4FF',
        green: '#77a300',
        textColor: '#00363d',
    },
}

const useThemeColors = () => {
    const colorScheme = useColorScheme()
    const colors = Colors[colorScheme]

    return colors
}

export default useThemeColors