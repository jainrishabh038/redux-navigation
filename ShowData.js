import React from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { changeName,changeAge } from './redux/Store'

const showData = (props) => {
    const act=useSelector(state=>state)
    const dispatch=useDispatch()



    return (
        <View>
            <Text style={{color:'black'}}>{act.name}</Text>
            <Text style={{color:'black'}}>{act.age}</Text>
            
    
            <Button title ="changename"  onPress={() =>  dispatch(changeName("rishabh"))}>Change Name</Button>
          
            <Button title ="change age"  onPress={() =>  dispatch(changeAge(25))}>Change Age</Button>
            
           
            <Button title="Default" onPress={() =>  dispatch(changeAge(20), dispatch(changeName('dinesh')) )} />
           
            <Button title=' go topage 1' onPress={()=>(props.navigation.navigate('Page1'))}/>

        </View>
    )
}

export default showData
