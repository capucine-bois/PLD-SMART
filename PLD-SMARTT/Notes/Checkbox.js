import {Pressable, StyleSheet,View,Text} from "react-native";
import React, {Component, useEffect, useState} from 'react';

function getStyle(val) {
    if (val) {
        return { backgroundColor: 'black' };
    }
    else {
        return { backgroundColor: 'white' };
    }
}

const Checkbox = (props) =>{


    const [toggleCheck, setToggleCheck] = React.useState(false);
    return(

        <View style={style.checkView}>
            <Pressable style={[style.checkbox, getStyle(toggleCheck)]} onPress={() => setToggleCheck(!toggleCheck)}>

            </Pressable>
            <Text>
                {props.label}
            </Text>

        </View>
    )

}

export default Checkbox;

const style = StyleSheet.create({

    checkView:{
        display:"flex",
        flexDirection:"row",

    },
    checkbox:{
        marginRight:10,
        borderStyle:"solid",
        borderWidth:2,
        borderRadius:5,
        borderColor:"gray",
        width:20,
        height:20,
    }

})