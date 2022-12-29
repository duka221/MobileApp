import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Items = [
  {
    id:'0',
    image:"https://i.pinimg.com/originals/06/c2/88/06c288b8663eda8144c0f450b4359288.jpg",
    name:"BMW E46"
  }, {
    id:'1',
    image:"https://assets.whichcar.com.au/image/upload/s--beysW_VG--/ar_1.9047619047619047,c_fill,f_auto,q_auto:good/c_scale,w_1200/v1/archive/whichcar/2019/04/11/-1/2008-Audi-S4-review-classic-MOTOR.jpg",
    name:"Audi"
  }, {
    id:'2',
    image:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/red-genesis-coupe-capturebybrandon.jpg",
    name:"Genesis"
  }
]

export const CardContent = ({cart,setCart}) => {
    const LeftContent = props => <Avatar.Icon {...props} icon="car" />
    const RightContent = props => <Avatar.Icon {...props} icon="baby-face-outline" size={30} />
    console.log("new",cart)
    return(
        <>
        <ScrollView>
        {Items && Items.map((item)=>(
            <Card style={{margin:10}} key={item.id}>
            <Card.Title title={item.name}  left={LeftContent} right={RightContent} />
            <Card.Cover source={{uri:item.image}} />
            <Card.Content>
              <Title>{item.name}</Title>
            </Card.Content>
            <Card.Actions>
              <Button>Favorites</Button>
              {cart.includes(item)?(
                <>
              <Button  onPress={() => setCart(cart.filter((x) => x.id !== item.id))}><Text style={{color:"red"}}> Remove From Cart </Text></Button>
                </>
             
              ):(
                <Button onPress={() => setCart([...cart,item])}>Add To Cart</Button>
              )}
            </Card.Actions>
          </Card>
          ))}
        </ScrollView>
        </>
        
    )
}

