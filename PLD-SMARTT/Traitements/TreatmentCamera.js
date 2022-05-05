import {Pressable, StyleSheet} from "react-native";
import {Camera} from 'expo-camera'
import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity,Image,Button} from "react-native";
import Header from "../Util/Header";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as MediaLibrary from 'expo-media-library';

const TreatmentCamera = ({route,navigation})=> {

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {

            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
            const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
            setHasMediaLibraryPermission(cameraStatus.status === 'granted');

        })();
    }, []);

    //Rajouter des bails si les permissions sont refusés en légende
    const takePicture = async () => {
        let options = {
            quality:1,
            base64:true,
            exif:false};

        if(camera){
            const data = await camera.takePictureAsync(options)
            navigation.navigate("TreatmentCameraSave",{
                "image":data,
            })
        }
    }

    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1}}>
            <Header navigation={navigation} title = {"Traitements"} color={"#2DB142"}/>
            <Text style={styles.title}>
                Prenez votre médicament en photo !
            </Text>
            <View style={styles.cameraContainer}>
                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'} />
            </View>

            <Pressable style={styles.takePic} onPress={() => takePicture()}>
                <MaterialCommunityIcons name='camera' color="black" size={30}/>
            </Pressable>
        </View>
    );
}

//{image && <Image source={{uri: image}} style={{flex:1}}/>}

export default TreatmentCamera;

const styles = StyleSheet.create({
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
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: 1
    }
})