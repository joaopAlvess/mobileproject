import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import cursoValidator from '../../validators/cursoValidator'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker';



const CursosForm = ({ navigation, route }) => {

  const [selectedLanguage, setSelectedLanguage] = useState();

  let curso = {
    nome: '',
    duracao: '',
    modalidade: ''
  }

  const id = route.params?.id

  if (id >= 0) {
    curso = route.params?.curso
  }


  function salvar(dados) {

    AsyncStorage.getItem('cursos').then(resultado => {

      const cursos = JSON.parse(resultado) || []

      if (id >= 0) {
        cursos.splice(id, 1, dados)
      } else {
        cursos.push(dados)
      }

      AsyncStorage.setItem('cursos', JSON.stringify(cursos))

      navigation.goBack()
    })

  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de Curso</Text>

      <Formik
        initialValues={curso}
        validationSchema={cursoValidator}
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
              <Text style={{ color: 'red' }}>{errors.nome}</Text>
            }

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Duração'
              keyboardType='decimal-pad'
              value={values.duracao}
              onChangeText={handleChange('duracao')}
            />
            {(errors.duracao && touched.duracao) &&
              <Text style={{ color: 'red', marginBottom: 5 }}>{errors.duracao}</Text>
            }

            <Picker
              style={{ marginTop: 10, padding: 10, fontSize: 15 }}
              selectedValue={values.modalidade}
              onValueChange={handleChange('modalidade')
              }>
              <Picker.Item
                mode='outlined'
                label="Modalidade"
                value="m" />
              <Picker.Item
                mode='outlined'
                label="Presencial"
                value="p" />
              <Picker.Item
                mode='outlined'
                label="Hibrído"
                value="h" />
              <Picker.Item
                mode='outlined'
                label="Hibrído"
                value="h" />
            </Picker>
            {(errors.modalidade && touched.modalidade) &&
              <Text style={{ color: 'red', marginBottom: 5 }}>{errors.modalidade}</Text>
            }
            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}
      </Formik>

    </ScrollView>
  )
}

export default CursosForm