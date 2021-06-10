import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () =>{
    const value = useContext(BlogContext)

    return <View>
        <Text>index scren</Text>
        <Text>{value}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default IndexScreen