import React from 'react';
import { Button, StyleSheet, StatusBar, Text, TextInput, View } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = React.useState();
  const [tarefas, setTarefas] = React.useState(["Matematica, Lingua-Portugues"]);

  const adicionarTarefa = () => {
    tarefas.push(tarefa);
    setTarefa('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>
      <View>
      <View style={styles.linha}>
        <TextInput style={styles.imput} placeholder='Nomes das tarefas' value={tarefa} onChangeText={setTarefa}/>
        <Button title='Adicionar' onPress={() => adicionarTarefa()} />
      </View>
      {tarefas.map((f) => <Text style={styles.nomes}>{f}</Text>)}
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
  fontSize: 40,
  padding: 20
  },
  linha: {
    flexDirection: 'row'
  },
  imput: {
    padding: 7,
    borderWidth: 1,
    marginRight: 5,
    marginBottom: 5
    
  },
  nomes: {
    fontSize: 20
  }
});
