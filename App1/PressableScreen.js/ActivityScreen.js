import React, { useState } from 'react';
import {View, TextInput, Button, ActivityIndicator, KeyboardAvoidingView, Platform,
    Switch, Text, StyleSheet} 
     from 'react-native';

export default function ActivityScreen() {
  const [cargando, setCargando] = useState(false);
  const [esGrande, setEsGrande] = useState(false);
  const [cambiarColor, setCambiarColor] = useState(false);

  const handleEnviar = () => {
    setCargando(true);
    setTimeout(() => setCargando(false), 4000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
      style={styles.container}
    >
      <TextInput placeholder="Escribe algo..." 
      style={styles.input} />

      <View style={styles.action}>
        {cargando ? (
          <ActivityIndicator
            size={esGrande ? 'large' : 'small'}
            color={cambiarColor ? '#007AFF' : '#8E8E93'}
          />
        ) : (
          <Button title="Enviar"
           onPress={handleEnviar} />
        )}
      </View>

      <View style={styles.switchBox}>
        <View style={styles.switchRow}>
          <Text style={styles.switchText}>Hacer más grande</Text>
          <Switch value={esGrande} onValueChange={setEsGrande} />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchText}>Cambiar color</Text>
          <Switch value={cambiarColor} onValueChange={setCambiarColor} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  action: {
    height: 40,
    justifyContent: 'center',
    marginBottom: 20,
  },
  switchBox: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  switchText: {
    fontSize: 16,
  },
});