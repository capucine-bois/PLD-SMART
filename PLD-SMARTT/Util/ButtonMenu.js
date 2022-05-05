import { FlatList,Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ButtonMenu = (props) =>{
  return (
    <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
      <MaterialCommunityIcons style= {props.styleIcone} name={props.icone} color="#fff" size={45}/>
      <Text style={props.styleText}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )

}
export default ButtonMenu;