import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext' // 2 farkli yerden Context gelirse {Context as BlogContext} seklinde yeniden isimlendirebilirdik
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const IndexScreen = ({navigation}) =>{
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context) //data ve addBlogPost isimleri ayni olmali gonderilen ile 
    
    useEffect(() => {
        getBlogPosts()

        const listener = navigation.addListener('didFocus', () => { // bu ekrana her donuldugunde icerdeki kod calisiyor
            getBlogPosts()
        })

        return () => { //indexScreen birdaha hic ulasilamiycak hale gelirse listeneri arka planda kapatmak icin gerekli
            listener.remove()
        }
    }, [])

    return <View>
            <FlatList
                data={state}
                keyExtractor = { (blogPost) => blogPost.title}
                renderItem= {({item}) => {
                    return <View style={styles.row}>
                        <TouchableOpacity onPress = {() => navigation.navigate('Show',{id: item.id})}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress= {() => {deleteBlogPost(item.id)}}>
                            <Feather name="trash-2" style={styles.icon}/>  
                        </TouchableOpacity>
                    </View>
                }}
            />
        </View>

}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: ()=> <TouchableOpacity onPress = {() => navigation.navigate('Create')}>
                <AntDesign name="pluscircleo" size={30} color = "black" style={{marginRight:5,marginTop:5}}/>
            </TouchableOpacity>
        
    }
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