import React from "react"
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native"
import { COLORS } from '../../assets/colors'

const GameItem = (props) => {
  let slug = props.item.title.replace(/\s/g, "-").replace(".", "").replace(":", "").toLowerCase()

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Result", { data: slug })}
      >
        <Text style={styles.titleText}>{props.item.title}</Text>
        <Text style={styles.text}>Release Date: {props.item.releaseDate}</Text>
        <Text style={styles.text}>Genre: {props.item.genre}</Text>
        <Text style={styles.text}>Platforms: {props.item.platforms}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: COLORS.primary,
  },
  titleText: {
    color: COLORS.primary,
    fontSize: 40,
  },
  item: {
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderBottomWidth: 0,
    color: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: COLORS.background,
  },
})

export default GameItem
