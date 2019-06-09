import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    display: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: 25,
        paddingBottom: 10
    },
    displayText: {
        fontSize: 30
    },
    results: {
        flex: 1,
        backgroundColor: '#def0ed',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: 25,
        paddingBottom: 10
    },
    resultsText: {
        fontSize: 16
    },
    inputs: {
        flex: 7,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    numbers: {
        flex: 7,
        flexDirection: 'row',
        backgroundColor: '#89bec2'
    },
    cell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    cellText: {
        fontSize: 24,
        color: 'white'
    },
    operations: {
        flex: 3,
        backgroundColor: '#136995'
    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default style;