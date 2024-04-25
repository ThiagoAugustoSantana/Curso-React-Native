import React from "react";
import { Alert, FlatList, View } from "react-native";

import users from "../data/users";
import { Avatar, ListItem, Button } from "@rneui/base";
import { Icon } from "@rneui/themed";

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário ?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }
    
    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color='orange' />}
                />

                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color='red' />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        // return <Text>{user.name} - {user.email}</Text>
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar
                    source={{ uri: user.avatarUrl }}
                />

                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>

                {getActions(user)}

            </ListItem>

        )
    }

    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={user => user.id}
                renderItem={getUserItem}
            />
        </View>
    )
}




