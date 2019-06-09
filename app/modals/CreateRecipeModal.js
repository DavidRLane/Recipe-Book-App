import React, { Component } from 'react';
import { Button, Modal, SectionList, Text, View } from 'react-native';

import styles from '../styles/CreateRecipeModal';

export default class CreateRecipeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Button
                        title="Create Recipe"
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }} />
                </View>
                <View style={styles.mainContent}>
                    <SectionList
                        style={{ padding: 10 }}
                        renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                        )}
                        sections={[
                            { title: 'Saved Recipe 1', data: ['Chicken', 'Soup'] },
                            { title: 'Saved Recipe 2', data: ['Pork', 'Tenderloin'] },
                            { title: 'Saved Recipe 3', data: ['Beef', 'Ramen'] },
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />
                </View>
                <View style={styles.container}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ flex: 1, padding: 50 }}>
                            <Text>Create a New Recipe</Text>

                            <Button
                                title="Hide Modal"
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                            </Button>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
};