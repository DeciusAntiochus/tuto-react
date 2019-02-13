import getFilmsFromApiWithSearchedText from '../API/TMDBApi'

import {connect} from 'react-redux'

import { StyleSheet, FlatList } from 'react-native';

import React from 'react'
import FilmItem from './filmItem';

class FilmList extends React.Component{


    constructor(props){

        super(props)
        this.state = {

            films:[]

        }


    }

    _displayDetailForFilm = (idFilm) => {

        this.props.navigation.navigate("FilmDetail", {idFilm: idFilm})

    }

    

    render(){


        return (

            <FlatList
                style={styles.list}
                data={this.props.films}
                extraData = {this.props.favoritesFilm}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => 
                
                <FilmItem 
                isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                film={item} displayDetailForFilm = {this._displayDetailForFilm} />}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (this.props.page < this.props.totalPages) {
                        this.props.loadFilms()
                    }
            }} />

        )

    }


}

const styles = StyleSheet.create({

    list:{
        flex:1
    }

})

const mapStateToProps = state => {

    return {

        favoritesFilm : state.toggleFavorite.favoritesFilm

    }

}


export default connect(mapStateToProps)(FilmList)