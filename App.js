import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CursoStack from './screens/cursos/CursoStack';
import AlunosStack from './screens/alunos/AlunosStack';
import ProfessorStack from './screens/professores/ProfessorStack';
import DisciplinaStack from './screens/disciplinas/DisciplinaStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Cursos" 
              component={CursoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="bookshelf" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Disciplinas" 
              component={DisciplinaStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-open-variant" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Alunos" 
              component={AlunosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="human-handsup" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Professores" 
              component={ProfessorStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-tie" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}