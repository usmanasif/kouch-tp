import React from "react"
import {
  View,
  FlatList,
} from "react-native"
import GameItem from '../components/GameItem'
const games = require('../../assets/game-library.json')

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        keyExtractor={(game) => game.Title}
        data={games}
        renderItem={({ item }) => {
          return <GameItem item={item} navigation={ navigation } />
        }}
      />
    </View>
  )
}

export default HomeScreen
