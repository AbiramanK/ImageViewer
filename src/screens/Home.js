import React, { Component } from 'react'
import { Text, View , FlatList, StyleSheet , ActivityIndicator} from 'react-native'
import CardItem from '../components/CardItem'
import TabNavigator from 'react-native-tab-navigator';
import {
    fetchFirst,
    fetchSecond
} from '../actions/fetchImage'

export class First extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items:[
                 {   id:1,
                     url:"aaa",
                     name:'snfff'
                 },
                 {  id:2,
                    url:"aaa",
                    name:'snfff'
                },
                
             ],
             selectedTab:'home',
             data:[],
             firstCollections: [],
             secondCollections: [],
             isLoading:false
        }
    } 


    componentDidMount(){
        this.showLoader()
        this.fetchImage()
        // this.secondCollections()
    }

    showLoader = () => {
        this.setState({
            isLoading: true
        })
    }

    hideLoader = () => {
        this.setState({
            isLoading: false
        })
    }

    fetchImage = () =>{
        fetchFirst().then((res)=>{
            this.setState({
                firstCollections: res
            })

            console.log("first collections data", res)
        }).then(()=>{
            this.hideLoader();
        })
    }
    secondCollections = () =>{
        fetchSecond().then((res)=>{
            this.setState({
                secondCollections: res
            })
        })
    }
    render() {
        return (
            <View style={{flex: 1,margin:5}}>
                {
                    this.state.isLoading &&
                    <ActivityIndicator size="large" color="#0000ff" /> 
                }
                
                <FlatList 
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    data={this.state.firstCollections}
                    keyExtractor={(item , index)=>{
                        index
                    }}
                    renderItem={(item)=>{
                        console.log("items", item)
                        return (
                        <CardItem 
                            // url={"https://images.unsplash.com/photo-1511235873174-1888843f2ab0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0NzM2OX0"} 
                            url={item.item.urls.raw}
                            name={item.item.description} 
                        />
                        )
                    }}
                    /> 
            </View>
        )
    }
}

export class Second extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items:[
                 {   id:1,
                     url:"aaa",
                     name:'snfff'
                 },
                 {  id:2,
                    url:"aaa",
                    name:'snfff'
                },
                
             ],
             selectedTab:'home',
             secondCollections: [],
             isLoading: false
        }
    } 

    componentDidMount = () => {
      this.showLoader()
      this.secondCollections()
    };
    
    showLoader = () => {
        this.setState({
            isLoading: true
        })
    }

    hideLoader = () => {
        this.setState({
            isLoading: false
        })
    }

    secondCollections = () =>{
        fetchSecond().then((res)=>{
            this.setState({
                secondCollections: res
            })
            console.log("second collections data", res)
        }).then(()=>this.hideLoader())
    }

    render() {
        return (
            <View> 
                {
                    this.state.isLoading &&
                    <ActivityIndicator size="large" color="#0000ff" /> 
                }
                <FlatList 
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    data={this.state.secondCollections}
                    keyExtractor={(item , index)=>{
                        item.id
                    }}
                    renderItem={(item)=>{
                        return (
                            <CardItem 
                                // url={"https://images.unsplash.com/photo-1511235873174-1888843f2ab0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0NzM2OX0"} 
                                url={item.item.urls.raw}
                                name={item.item.description}  
                            />
                        )
                    }}
                    /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        justifyContent:'space-around'
    }
})