import React, { Component } from 'react';
import { Share,Image} from 'react-native';
import { Container, Header, Content,Button, Text, Right, Icon, Body, Title } from 'native-base';


export default class Post1 extends Component {
  static navigationOptions = {
    header:null
      };

  constructor(props) {
    super(props);
let { navigation } = this.props;
let title=navigation.getParam("title");
// var eventstring = new String();
// eventstring = title.toString().replace(/"/g, "");
// eval(eventstring );

let paragraph= navigation.getParam('paragraph');

    this.state = {
      title:title,
      paragraph:paragraph
    };
   console.log(title)
   console.log(paragraph)
  }


  onShare = async () => {
    try {
      const result = await Share.share({
        message: `${this.state.title }`+ " \n \n "+ `${this.state.paragraph}` ,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }



  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#155F48'}}>
          <Body>
            <Title style={{alignSelf:'center'}}>সাইয়্যিদুল আ’ইয়াদ শরীফ</Title>
          </Body>
          <Right>
          <Button 
            onPress={this.onShare}
            hasText transparent
            icon="sharealt">
            <Icon name='share' />
            </Button>
          </Right>
        </Header>
       
        <Content  style={{paddingTop:5, paddingLeft:10,paddingRight:10}} >
     
      <Text style={{ fontSize: 15,
    textAlign: 'justify',
    lineHeight: 25}} selectable={true}>
       
          <Text style={{fontWeight: "bold"}} selectable={true}>
            {this.state.title}
            {"\n"}
            {"\n"}
          </Text>
       {this.state.paragraph}
       {"\n"}{"\n"}

       </Text>
       <Image
          style={{ width: '100%', height: 400,resizeMode:'stretch'}}
          source={require('./images/image21.jpg')}
        />
       <Image
          style={{ width: '100%', height: 400,resizeMode:'stretch'}}
          source={require('./images/image22.jpg')}
        />
       <Image
          style={{ width: '100%', height: 400,resizeMode:'stretch'}}
          source={require('./images/image23.jpg')}
        />
       <Image
          style={{ width: '100%', height: 400,resizeMode:'stretch'}}
          source={require('./images/image24.jpg')}
        />
        <Text>
        {"\n"}
        {"\n"}
        </Text>
        
        </Content>
      </Container>
    );
  }
}


