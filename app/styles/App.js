import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    //Flex Direction by default is Column; Flex Direction works on the outer element to reposition elements
    container: {
        flex: 1,
        flexGrow: 1
    },
    title: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: 'white',
        fontSize: 28,
        fontWeight: '800',
        letterSpacing: 1,
    },
    navbar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'steelblue'
    },
    navbarButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 0.25
    },
    mainContent: {
        flex: 8,
    },
    homeContent: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '900',
        letterSpacing: 1
    }
});

export default style;