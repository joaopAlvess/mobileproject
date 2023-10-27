import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Cursos from './Cursos';
import CursosForm from './CursosForm';

const Stack = createNativeStackNavigator();

const CursoStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="cursos" component={Cursos} options={{ title: 'Cursos' }} />
                <Stack.Screen name="cursos-form" component={CursosForm} options={{ title: 'Cursos' }} />
            </Stack.Navigator>
        </>
    )
}

export default CursoStack