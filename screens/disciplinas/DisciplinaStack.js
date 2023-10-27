import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Cursos from './Disciplinas';
import CursosForm from './DisciplinasForm';

const Stack = createNativeStackNavigator();

const DisciplinaStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="disciplinas" component={Cursos} options={{ title: 'Cursos' }} />
                <Stack.Screen name="disciplinas-form" component={CursosForm} options={{ title: 'Cursos' }} />
            </Stack.Navigator>
        </>
    )
}

export default DisciplinaStack;