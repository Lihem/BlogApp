import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import {Context} from '../context/BlogContext' // 2 farkli yerden Context gelirse {Context as BlogContext} seklinde yeniden isimlendirebilirdik
import { Feather } from '@expo/vector-icons'; 

const IndexScreen = () =>{
    const {state,addBlogPost} = useContext(Context) //data ve addBlogPost isimleri ayni olmali gonderilen ile 
    
    return <View>
        <Button title='Add Post' onPress={addBlogPost}/>
        <FlatList
            data={state}
            keyExtractor = { (blogPost) => blogPost.title}
            renderItem= {({item}) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Feather name="trash-2" style={styles.icon}/>
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