import {Pressable, StyleSheet,View,Text} from "react-native";

function getStyle(val) {
    if (val) {
        return { backgroundColor: 'black' };
    }
    else {
        return { backgroundColor: 'white' };
    }
}

const Checkbox = (props) =>{

    return(

        <View style={style.checkView}>
            <Pressable style={[style.checkbox, getStyle(props.toggleCheck)]} onPress={() => props.setToggleCheck(!props.toggleCheck)}>

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