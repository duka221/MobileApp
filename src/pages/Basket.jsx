import { Button, ScrollView, Text, View } from "react-native"
import { Avatar, Card, Title } from "react-native-paper"

export const Basket = ({cart}) => {
    const LeftContent = props => <Avatar.Icon {...props} icon="car" />

    return(
        <ScrollView>
        {cart.length > 0 ? cart.map((item)=>(
            <Card style={{margin:10}} key={item.id}>
            <Card.Title title={item.name}  left={LeftContent} />
            <Card.Cover source={{uri:item.image}} />
            <Card.Content>
              <Title>{item.name}</Title>
            </Card.Content>
          </Card>
          )):(
            <View style={{alignItems:"center",marginTop:300}}>
            <Text style={{fontSize:30,fontWeight:"200",color:"#6750A4"}}> Cart is empty! </Text>
            </View>
          )}
          
        </ScrollView>
    )
}