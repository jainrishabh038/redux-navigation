import React from 'react'
import { View, Text,Button } from 'react-native'

const Page1 = (props) => {
    return (
        <View>
            <Text style={{color:'black',fontSize:40,textAlign:'center',marginTop:200}}> I Am The Page </Text>
            <Button title=' go to show data' onPress={()=>(props.navigation.navigate('ShowData'))}/>
           
        </View>
    )
}

export default Page1
