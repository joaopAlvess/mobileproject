import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import disciplinaValidator from '../../validators/disciplinaValidator'
import { mask } from 'remask'

const DisciplinasForm = ({ navigation, route }) => {

  let disciplina = {
    nome: ''
  }

  const id = route.params?.id

  if(id > 0){
    const disciplina = route.params?.disciplina
  }

  function salvar(dados) {

    AsyncStorage.getItem('disciplinas').then(resultado => {

      const disciplinas = JSON.parse(resultado) || []

      if (id >= 0) {
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
      <Formik
        initialValues={disciplina}
        validationSchema={disciplinaValidator}
        onSubmit={values => salvar(values)}
      >
        {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
          <View>
            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Nome'
              value={values.nome}
              onChangeText={handleChange('nome')}
            />
            {(errors.nome && touched.nome) &&
              <Text style={{ color: 'red', marginBottom: 5 }}>{errors.nome}</Text>
            }
            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}
      </Formik>


    </ScrollView>
  )
}

export default DisciplinasForm;