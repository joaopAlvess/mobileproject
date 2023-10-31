import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import disciplinaValidator from '../../validators/disciplinaValidator'
import { mask } from 'remask'
import { useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'

const DisciplinasForm = ({ navigation, route }) => {



  let disciplina = {
    nome: '',
    curso_id: ""
  }
  const [cursos, setCursos] = useState([])
  const id = route.params?.id

  if (id > 0) {
    disciplina = route.params?.disciplina
  }

  useEffect(() => {
    AsyncStorage.getItem('cursos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setCursos(resultado)
    })
  }, [])

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

            <Picker
              style={{ marginTop: 10, padding: 10, fontSize: 15 }}
              selectedValue={values.curso_id}
              onValueChange={handleChange('curso_id')
              }>
              <Picker.Item label='Curso' value='' />
              {cursos.map((item, i) => (
                <Picker.Item key={i}
                  label={item.nome}
                  value={item.nome}
                />
              ))}

            </Picker>
            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}
      </Formik>


    </ScrollView>
  )
}

export default DisciplinasForm;