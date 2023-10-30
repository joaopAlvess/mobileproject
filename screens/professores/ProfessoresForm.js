import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import professorValidator from '../../validators/professorValidator'
import { currency, mask } from 'remask'
import { Formik } from 'formik'

const ProfessoresForm = ({ navigation, route }) => {

  const professor = {
    nome: '',
    cpf: '',
    matricula: '',
    salario: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    complemento: '',
    numero: '',
    bairro: '',
  }
  const id = route.params?.id

  if (id >= 0) {
    professor = route.params?.professor
  }

  async function handleChange(valor, campo) {

    let endereco = {}
    if (campo == 'cep' && valor.length == 8) {
      endereco = await getEndereco(valor)
      console.log(endereco);
      setDados({ ...dados, ...endereco, [campo]: valor })
    } else {
      setDados({ ...dados, [campo]: valor })
    }
  }

  async function getEndereco(cep) {
    const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return endereco.data
  }

  function salvar(dados) {

    AsyncStorage.getItem('professores').then(resultado => {

      const professores = JSON.parse(resultado) || []

      if (id >= 0) {
        professores.splice(id, 1, dados)
      } else {
        professores.push(dados)
      }

      AsyncStorage.setItem('professores', JSON.stringify(professores))

      navigation.goBack()
    })

  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de Professor</Text>

      <Formik
        initialValues={professor}
        validationSchema={professorValidator}
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

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='CPF'
              keyboardType='decimal-pad'
              value={values.cpf}
              onChangeText={(value) => { setFieldValue('cpf', mask(value, '999.999.999-99')) }}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Matrícula'
              value={values.matricula}
              onChangeText={handleChange('matricula')}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Salário'
              value={values.salario}
              onChangeText={handleChange('salario')}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='E-mail'
              keyboardType='email-address'
              value={values.email}
              onChangeText={handleChange('email')}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Telefone'
              keyboardType='number-pad'
              value={values.telefone}
              onChangeText={(value) => { setFieldValue('telefone', mask(value, '(99) 99999-9999')) }}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='CEP'
              value={values.cep}
              keyboardType='number-pad'
              onChangeText={(value) => { setFieldValue('cep', mask(value, '99.999-999')) }}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Logradouro'
              value={values.logradouro}
              onChangeText={handleChange('logradouro')}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Complemento'
              value={values.complemento}
              onChangeText={handleChange('complemento')}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Número'
              value={values.numero}
              onChangeText={handleChange('numero')}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Bairro'
              value={values.bairro}
              onChangeText={handleChange('bairro')}
            />
            {(errors.cpf && touched.cpf) &&
              <Text style={{ color: 'red', marginBottom: 5 }}>{errors.cpf}</Text>
            }
            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}
      </Formik>

    </ScrollView>
  )
}

export default ProfessoresForm