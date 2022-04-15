import React from 'react';
import { StyleSheet, Text, ScrollView, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function DossierMedical() {
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    const dateNaissance = "10/04/1947"
    const age = 75
    const poids = 67
    const taille = "1m71"
	return (
    <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.profil}>
            <Text style={styles.text}>{prenom} {nom}</Text>
            <Text style={styles.text}>{dateNaissance}</Text>
            <Text style={styles.text}>{age} ans</Text>
        </View>
        <View style={styles.mensurations}>
            <Text style={styles.text}>Poids : {poids} kg</Text>
            <Text style={styles.text}>Taille : {taille}</Text>
        </View>
        <View style={styles.etiquette}>
            <Text style={styles.text}>Allergies</Text>
            <View style={styles.contenuEtiquette}>
                <Text style={styles.text}>Rhume des foins</Text>
                <Text style={styles.text}>Acariens</Text>
            </View>
        </View>
        <View style={styles.etiquette}>
            <Text style={styles.text}>Pathologies</Text>
            <View style={styles.contenuEtiquette}>
                <Text style={styles.text}>Hypertension artérielle</Text>
            </View>
        </View>
        <View style={styles.etiquette}>
            <Text style={styles.text}>Appareillages</Text>
            <View style={styles.contenuEtiquette}>
                <Text style={styles.text}>Prothèses auditives</Text>
                <Text style={styles.text}>Lunettes</Text>
            </View>
        </View>
        <View style={styles.etiquette}>
            <Text style={styles.text}>Indicateurs</Text>
            <View style={styles.contenuEtiquette}>
            </View>
        </View>



            
    </ScrollView>	)
}

export default DossierMedical

const styles = StyleSheet.create({
    text: {
      fontSize: 42,
    },
    mensurations:{
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    },
    profil:{

    },
    etiquette:{

    },
    contenuEtiquette:{
        
    },
  });