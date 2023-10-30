import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Disciplinas from './Disciplinas';
import DisciplinasForm from './DisciplinasForm';

const Stack = createNativeStackNavigator();

const DisciplinaStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="disciplinas" component={Disciplinas} options={{ title: 'Cursos' }} />
                <Stack.Screen name="disciplinas-form" component={DisciplinasForm} options={{ title: 'Cursos' }} />
            </Stack.Navigator>
        </>
    )
}

export default DisciplinaStack;