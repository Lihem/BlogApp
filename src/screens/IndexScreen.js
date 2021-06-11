import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import {Context} from '../context/BlogContext' // 2 farkli yerden Context gelirse {Context as BlogContext} seklinde yeniden isimlendirebilirdik

const IndexScreen = () =>{
    const {state,addBlogPost} = useContext(Context) //data ve addBlogPost isimleri ayni olmali gonderilen ile 
    
    return <View>
        <Text>Index scren</Text>
        <Button title='Add Post' onPress={addBlogPost}/>
        <FlatList
            data={state}
            keyExtractor = { (blogPost) => blogPost.title}
            renderItem= {({item}) => {
                return <Text>{item.title}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({})

export default IndexScreen