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
        <View style={styles.dossierMed}>
            <Text style={styles.text}>Poids : {poids} kg</Text>
            <Text style={styles.text}>Taille : {taille}</Text>
        </View>



            
    </ScrollView>	)
}

export default DossierMedical

const styles = StyleSheet.create({
    text: {
      fontSize: 42,
    },
    mensurations:{
    },
    profil:{

    },
    dossierMed:{
        
    }
  });