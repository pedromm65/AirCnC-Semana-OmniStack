import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Text, AsyncStorage, StyleSheet, Image } from 'react-native';

import logo from '../assets/logo.png'
import SpotList from '../components/SpotList'

export default function List({ navigation }){
    const [techs, setTechs] = useState([])

    

    useEffect(() =>{
        AsyncStorage.getItem('techs').then(storegedTechs => {
            const techsArray = storegedTechs.split(',').map(tech => tech.trim())
            setTechs(techsArray)
        })
    }, [])

    function handleBack() {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={style.container}>
            <Image style={style.logo} source={logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
            <TouchableOpacity onPress={handleBack} style={[style.button, style.back]}>
                <Text style={style.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    
    container: {
        flex: 1
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    },
    button: {
        height: 42,
        backgroundColor: "#f05a5b",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2
    },
    back: { 
        backgroundColor: "#ccc",
        marginTop: 10,
            
    },
})