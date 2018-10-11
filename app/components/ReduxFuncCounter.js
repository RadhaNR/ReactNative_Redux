// ReduxFuncCounter.js
import React from 'react';

// decoupled redux from react code

import {View, Text, Button, Alert} from 'react-native';
 
// Dumb component
// presentation/View component
export default function ReduxFuncCounter(props)  {
        console.log('ReduxFuncCounter render');
 
        return (
            <View>
                <Text style={ {fontSize: 30}}> Redux Counter </Text>
 
                <Text style={ {fontSize: 20}}>  Counter {props.counter}</Text>

                <Button onPress={props.increment}
                        title='Incr'
                ></Button>


                <Button onPress={props.decrement}
                        title='Decr'
                ></Button>

                <Button onPress={props.reset}
                        title='Reset'
                ></Button>
                

            </View>
        )
}
