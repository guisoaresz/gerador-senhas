import {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useIsFocused} from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'

import { PasswordItem } from '../passwords/components/passwordItem'

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const {getItem, removeItem} = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item);
        setListPasswords(passwords)
    }

    return(
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{flex: 1, paddingTop: 14}}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        padding: (50, 14, 14, 14)
    },
    title:{
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    content:{
        flex:1,
        padding: (0, 14, 0, 14),
    }
})