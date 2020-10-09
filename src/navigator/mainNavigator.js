import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings133677Navigator from '../features/Settings133677/navigator';
import Settings133660Navigator from '../features/Settings133660/navigator';
import Settings133643Navigator from '../features/Settings133643/navigator';
import Settings133626Navigator from '../features/Settings133626/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings133677: { screen: Settings133677Navigator },
Settings133660: { screen: Settings133660Navigator },
Settings133643: { screen: Settings133643Navigator },
Settings133626: { screen: Settings133626Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
