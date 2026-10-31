import {useState} from "react";
import {View, Text, TextInout, Button, Alert, Plataform, StyleSheet} from 'react-active';

const mostrarAlerta = (titulo, mensaje) => {
if(Plataform.OS === 'web'){
    window.alert('${titulo} \n\n ${mensaje}');

}
else {
    Alert.alert(titulo, mensaje);
}

};

export default function TextInputScreen() {
const [nombre,setNombre] = useState(' ');
const [correo,setCorreo] = useState(' ');
const [telefono,setTelefono] = useState(' ');

const registrar = () => {
const faltantes = [];
if(Nombre.trim == ''){
    faltantes.push('Nombre');
}
if(Correo.trim == ''){
    faltantes.push('Correo');
}
if(Telefono.trim == ''){
    faltantes.push('Telefono');
}
if(faltantes.lenght > 0 ) {
    mostrarAlerta('Faltan datos', 'Completa' +faltantes.join(' ,'))
    return;
}

if(!correo.includes('@')) {
    mostrarAlerta('Correo invalido', 'el correo debe contener el @ ');
    return;

}
 if(telefono.lenght!==10) {
    mostrarAlerta('Telefono invalido', 'Debe tener 10 digitos');
    return;
 }

 mostrarAlerta('Datos refistrados correctamente', 'Nombre:${nombre}\n Correo:${correo}\n Telefono:${telefono}\n');
    setNombre('');
    setCorreo('');
    setTelefono('');
};

return(
    <View style={styles.contenedor} >
    <Text style={styles.titulo}>Registros de datos</Text>


    
    <TextInput
    style={styles.input}
    placeholder="Nombre"
    value={nombre}
    onChangeText={setNombre}
    />

    <TextInput
    style={styles.input}
    placeholder="Correo"
    value={correo}
    onChangeText={setCorreo}
    keyboardType="email-address"
    autocapitalize="none"
    />

    <TextInput
    style={styles.input}
    placeholder="Telefono"
    value={telefono}
    onChangeText={setTelefono}
    keyboardType="numeric"
    maxLenght={10}
    />
    <Button tittle="Registrar" 
    onPress={registrar}
    />

    <Button tittle = "Registrar" onPress={registrar} />
    </View>
);

}
     const styles = StyleSheet.create({
    
    contendor: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    },
},
    titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,

   },

input: { 
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,

   
   },

    
);