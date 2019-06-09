import React, { Component } from 'react';
import { Text, View } from 'react-native';

import CreateRecipeModal from '../../app/modals/CreateRecipeModal.js';
import details from '../../app/styles/Details.js';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            text: 'Useless Placeholder'
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    saveEdits(text) {
        this.setState({
            text: text
        });
    }

    render() {
        return (
            <View style={details.container}>
                <View style={details.container}>
                    <CreateRecipeModal />
                </View>
                {/* <View style={[details.container, details.centeredItems, details.powderBlue]}>
                    <Text>Powder Blue</Text>
                </View>
                <View style={[details.container, details.centeredItems, details.skyBlue]}>
                    <Text>Sky Blue</Text>
                </View>
                <View style={[details.container, details.centeredItems, details.steelBlue]}>
                    <Text>Steel Blue</Text>
                </View> */}
            </View >
        );
    }
};