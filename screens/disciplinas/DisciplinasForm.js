import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const DisciplinasForm = ({navigation, route}) => {

  const disciplina = route.params?.disciplina || {}
  const id = route.params?.id

  const [dados, setDados] = useState(disciplina)

  function handleChange(valor, campo) {
    setDados({...dados, [campo]: valor })
  }

  function salvar() {

    AsyncStorage.getItem('disciplinas').then(resultado => {
      
      const disciplinas = JSON.parse(resultado) || []
      
      if(id >= 0){
        disciplinas.splice(id, 1, dados)
      } else {
        disciplinas.push(dados)
      }

      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))
  
      navigation.goBack()
    })

  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de Curso</Text>

      <TextInput
        style={{ marginTop: 10 }}
        mode='outlined'
        label='Nome'
        value={dados.nome}
        onChangeText={(valor) => handleChange(valor, 'nome')}
      />

      <Button onPress={salvar}>Salvar</Button>

    </ScrollView>
  )
}

export default DisciplinasForm;