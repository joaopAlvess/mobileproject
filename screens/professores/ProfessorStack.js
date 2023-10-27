import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Professores from './Professores';
import ProfessoresForm from './ProfessoresForm';

const Stack = createNativeStackNavigator();

const ProfessorStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="professores" component={Professores} options={{ title: 'Professores' }} />
                <Stack.Screen name="professores-form" component={ProfessoresForm} options={{ title: 'Cursos' }} />
            </Stack.Navigator>
        </>
    )
}

export default ProfessorStack;