import React ,{ Component }from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content,Item, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import Template from './Template';
import image1 from './imagePost/image1';
import image2 from './imagePost/image2';
import image3 from './imagePost/image3';
import { openDatabase } from 'react-native-sqlite-storage';


var db = openDatabase({ name: 's_data.db',createFromLocation :1});

class Sdata extends Component {
  static navigationOptions = {
    header: null
}

  constructor(props) {
    super(props);
    this.state = {
      Items:null,
      inMemoryContacts:null
    };
 db.transaction(tx => {
      tx.executeSql('SELECT * FROM s_data', [], (tx, results) => {
        

        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
          // console.log(results.rows.item(i));
        }
        this.setState({
         Items: temp,
         inMemoryContacts:temp
        });
        console.log(this.state.Items[0].title);
      });
    })
    
  }
  searchContacts = value => {
    //   this.setState({test:value});
    const filteredContacts = this.state.inMemoryContacts.filter(contact => {
      let contactLowercase = (
        contact.title 
      ).toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return contactLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ Items: filteredContacts });
  };

  routing=(Item)=>{
    this.props.navigation.navigate(Item.route, {
      title: Item.title,
      paragraph: Item.paragraph,
    });
  }

renderItem = ({ item,i }) => (    

// <ListItem onPress={this.routing.bind(this,item)}>
//               <Left >
//                 <Text>{item.title}</Text>
//               </Left>
//               <Right>
//                 <Icon name="arrow-forward" />
//               </Right>
//             </ListItem>

  <TouchableOpacity onPress={this.routing.bind(this,item)} >
        <View style={{
          padding:10,
          marginBottom:5,
          marginLeft:10,
          marginRight:10,
          borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
      backgroundColor:'#ffff',
      justifyContent:'center'
      }}>
      <Text>{item.title}</Text>
      </View>
  </TouchableOpacity>

);
 


  render() {
    return (
      
      <Container>
        <Header style={{backgroundColor:'#155F48',alignItems:'center'}} >
        <TextInput 
            onChangeText={value => this.searchContacts(value)} 
            placeholder='Search....'
            style={{backgroundColor:'#FFF',flex:1,borderRadius:10,height:40,textAlignVertical:'center'}}
            />
        </Header>
         <Content style={{paddingRight:5}}>


    { this.state.Items?(
      <FlatList
            data={this.state.Items}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 50
                }}
              >
                <Text style={{ color: '#000' }}>no data..</Text>
              </View>
            )}
          />

    ):(<Text style={{alignSelf:'center'}}>loading....</Text>)
    
    }
     
        
        
         </Content>
        
      </Container>
    
    );
  
  }
}
const RootStack = createStackNavigator(
  {
    Start: Sdata,
    Template: Template,
    image1: image1,
    image2: image2,
    image3: image3,
    
  });

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}