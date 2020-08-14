import React from "react"
import {
  View,
  FlatList,
} from "react-native"
import GameItem from '../components/GameItem'

const HomeScreen = ({ navigation }) => {
  const games = [
    {
      title: 'Call of Duty: Warzone',
      releaseDate: '3/10/20',
      genre: 'Shooter',
      platforms: 'xbox'
    },
    {
      title: 'Call of Duty: Modern Warfare',
      releaseDate: '3/10/20',
      genre: 'Shooter',
      platforms: 'xbox'
    },
    {
      title: 'NBA 2K20',
      releaseDate: '3/10/20',
      genre: 'Shooter',
      platforms: 'xbox'
    },
    {
      title: 'FIFA 20',
      releaseDate: '3/10/20',
      genre: 'Shooter',
      platforms: 'xbox'
    },
    {
      title: 'Madden NFL 20',
      releaseDate: '3/10/20',
      genre: 'Shooter',
      platforms: 'xbox'
    },
    {
      title: 'Rocket League',
      releaseDate: '3/10/20',
      genre: 'Shooter',
      platforms: 'xbox'
    },
    {
      title: 'Super Smash Bros. Ultimate',
      releaseDate: '3/10/20',
      genre: 'Shooter',
      platforms: 'xbox'
    },
    {
      title: 'Mario Kart 8',
      releaseDate: '3/10/20',
      genre: 'Shooter',
      platforms: 'xbox'
    },
    {
      title: 'Forza Horizon 4',
      releaseDate: '3/10/20',
      genre: 'Shooter',
      platforms: 'xbox'
    }
  ]

  return (
    <View>
      <FlatList
        keyExtractor={(game) => game.title}
        data={games}
        renderItem={({ item }) => {
          return <GameItem item={item} navigation={ navigation } />
        }}
      />
    </View>
  )
}

export default HomeScreen
