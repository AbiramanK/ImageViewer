import React, { Component } from 'react'
import {
    View,
    Image
} from 'react-native'
import { Container, Header, Content, Card, CardItem as CardItems, Body, Text } from 'native-base';

export default class CardItem extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
    };

    componentDidMount = () => {
        console.log("component called", this.props.url)
    };


    render() {
        return ( 
            <Card style={{
                width: 200,
                justifyContent: 'center',
            }}>
                <CardItems
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <Body
                        style={{
                            width: 100,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            flex: 1
                        }}
                    >
                        <Image
                            source={{uri: this.props.url}}
                            style={{
                                height: 100,
                                width: 90,
                                flex: 0.9,
                            }}
                            accessibilityLabel={"image"}
                        />
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: 20,
                                color: '#000000',
                                flex: 0.1,
                                fontWeight:'100',
                                fontStyle:'italic',
                            
                            }}
                        >{this.props.name}</Text>
                    </Body>
                </CardItems>
            </Card> 
        )
    }
}
