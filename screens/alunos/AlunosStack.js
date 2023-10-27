import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Alunos from './Alunos';
import AlunosForm from './AlunosForm';

const Stack = createNativeStackNavigator();

const AlunosStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="alunos" component={Alunos} options={{ title: 'Alunos' }} />
        <Stack.Screen name="alunos-form" component={AlunosForm} options={{ title: 'Alunos' }} />
      </Stack.Navigator>
    </>
  )
}

export default AlunosStack