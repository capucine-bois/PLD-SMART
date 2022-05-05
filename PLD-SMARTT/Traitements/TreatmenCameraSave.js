import {Pressable, StyleSheet} from "react-native";
import {Camera} from 'expo-camera'
import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity,Image,Button,ImageBackground} from "react-native";
import Header from "../Util/Header";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as MediaLibrary from 'expo-media-library';

const TreatmentCameraSave = ({route,navigation})=> {



    //Rajouter des bails si les permissions sont refusés en légende

    return (
        <View style={{ flex: 1}}>
            <Header navigation={navigation} title = {"Traitements"} color={"#2DB142"}/>
            <Text style={styles.title}>
                Voulez vous sauvegardez la photo ?
            </Text>

            {route.params.image && <Image style={styles.image} source={{uri:route.params.image.uri}}/>}

            <View style={styles.choice}>

            </View>



        </View>
    );
}

//{image && <Image source={{uri: image}} style={{flex:1}}/>}

export default TreatmentCameraSave;

const styles = StyleSheet.create({


    image:{
        width:"100%",
        height:undefined,
        aspectRatio:1,
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"#2DB142",
        marginLeft:"auto",
        marginRight:"auto",
        textAlign:"center",
        marginBottom:20,
    },
    takePic:{
        width:80,
        height:80,
        borderWidth:6,
        borderStyle:"solid",
        borderColor:"#2DB142",
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:50,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: 1
    }
})