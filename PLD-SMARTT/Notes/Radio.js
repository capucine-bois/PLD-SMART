import {RadioButton} from "react-native-paper";
import {StyleSheet, Text, View} from "react-native";


const Radio = (props) =>
{
    return(

        <View style={style.radio}>
            <RadioButton
                disabled={props.disabled}
                color={"black"}
                value={props.value}
                status={ props.radioAttr === props.value ? 'checked' : 'unchecked' }
                onPress={() => props.setRadioAttr(props.value)}
            />
            <Text>
                {props.label}
            </Text>
        </View>

    )

}

export default Radio;

const style = StyleSheet.create({

    radio:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },



});

