import React, { useState } from 'react';
import { Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';

export function PasswordItem({data, removePassword}){

    const [mostrarTexto, setMostrarTexto] = useState(false);

    const alternarVisibilidade = () => {
      if (mostrarTexto) {
        setMostrarTexto(false);
      } else {
        setMostrarTexto(true);
      }
    };
    
    return (
      <Pressable onLongPress={removePassword} style={styles.container}>
        {mostrarTexto &&
            <Text style={styles.text}>{data}</Text>
        }
        {mostrarTexto &&
            <TouchableOpacity onPress={alternarVisibilidade}>
            <Entypo name="eye-with-line" size={20} color="white"/>
            </TouchableOpacity>
        }
        {!mostrarTexto &&
            <Text style={styles.blurText}>~~~~~~</Text>
        }
        {!mostrarTexto &&
            <TouchableOpacity onPress={alternarVisibilidade}>
                <Entypo name="eye" size={20} color="white" />
            </TouchableOpacity>
        }
      </Pressable>
    );
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        color: "white"
    },
    blurText:{
        color: "white",
        textShadowColor: "white",
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 5,
        fontSize: 16
    }
})