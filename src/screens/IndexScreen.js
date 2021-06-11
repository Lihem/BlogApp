import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext' // 2 farkli yerden Context gelirse {Context as BlogContext} seklinde yeniden isimlendirebilirdik
import { Feather } from '@expo/vector-icons'; 

const IndexScreen = () =>{
    const {state,addBlogPost, deleteBlogPost} = useContext(Context) //data ve addBlogPost isimleri ayni olmali gonderilen ile 
    
    return <View style = {{flex: 1}}>
        <Button title='Add Post' onPress={addBlogPost}/>
        <FlatList
            data={state}
            keyExtractor = { (blogPost) => blogPost.title}
            renderItem= {({item}) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress= {() => {deleteBlogPost(item.id)}}>
                        <Feather name="trash-2" style={styles.icon}/>  
                    </TouchableOpacity>
                </View>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal:15,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    title:{
        fontSize: 18,
    },
    icon:{
        fontSize:24,
        color: 'black'
    }
})

export default IndexScreen