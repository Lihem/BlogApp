import React from 'react'
import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext' //baska bir Context icin provider lazim olsaydi {Provider as BlogProvider} gibisinden kullanirdik
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,
},{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog Posts Appa'
  }
})

const App = createAppContainer(navigator)
  //burdaki Provider ismi onemli ustteki ile ayni olmali
export default () => {
  return <Provider>     
     <App/>
    </Provider>
}