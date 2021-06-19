import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Components
import { DrawerContent } from '../screens/DrawerContent';
import AppStack from './AppStack';
import VocabularyList from './../components/Vocabulary/VocabularyList';
import Intermediate from './../components/Vocabulary/Intermediate';
import WordScreen from '../wordscreen/WordScreen';

import WordScreen1 from './../wordscreen/WordScreen1';
import WordScreen2 from './../wordscreen/WordScreen2';
import SearchHome from './../components/Search/SearchList';
import SearchDetails from './../components/Search/SearchDetails';
import SearchDeTwo from './../components/Search/SearchDeTwo';


const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ navigation }) {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={AppStack} />
            <Drawer.Screen name="VocabularyList" component={VocabularyList} />
            <Drawer.Screen name="Intermediate" component={Intermediate} />
            <Drawer.Screen name="WordScreen" component={WordScreen} />
            <Drawer.Screen name="WordScreen1" component={WordScreen1} />
            <Drawer.Screen name="WordScreen2" component={WordScreen2} />
            <Drawer.Screen name="SearchList" component={SearchHome} />
            <Drawer.Screen name="SearchDetails" component={SearchDetails} />
            <Drawer.Screen name="SearchDeTwo" component={SearchDeTwo} />

        </Drawer.Navigator>
    );
}