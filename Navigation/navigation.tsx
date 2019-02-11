
import React from 'react'

import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import Search from '../Components/search';
import FilmDetail from '../Components/filmDetail';
import Favorites from '../Components/favorites';
import { Image, StyleSheet } from 'react-native';
import Test from '../Components/Test';





const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Mes films'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const FavoritesStackNavigator = createStackNavigator({
    Favorites: {

        screen: Favorites,
        navigationOptions: {
            title: 'Favoris'
        }
    },
    FilmDetail : {
        screen: FilmDetail
    }

})


const  MoviesTabNavigator = createBottomTabNavigator({

    Test: {
        screen:Test
    },

    Search: {

        screen: SearchStackNavigator,
        navigationOptions: {

            tabBarIcon:() => {

                return <Image
                source ={require('../assets/img/search.png')}
                style={styles.icon} />

            }

        }

    },

    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {

            tabBarIcon:() => {

                return <Image
                source ={require('../assets/img/fav_on.png')}
                style={styles.icon} />

            }

        }
    }

},
{

    tabBarOptions: {

        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF',
        showLabel:false,
        showIcon:true

    }

})


const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})


export default createAppContainer(MoviesTabNavigator)