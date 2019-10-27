import React, { Component } from 'react';
import { View,Share,Image} from 'react-native';
import { Container, Header, Content,Button, Text, Right, Icon, Body, Title } from 'native-base';

export default class Post1 extends Component {
  static navigationOptions = {
    header:null
      };

  constructor(props) {
    super(props);
// let { navigation } = this.props;
// let title=navigation.getParam("title");

// let paragraph= navigation.getParam('paragraph');
title=`১৯. ১২ রবিউল আউয়াল নবীজীর বিছাল শরীফের দিন খুশি প্রকাশ করা যাবে`;
para1=`বাতিল ফির্কা একটা আপত্তি করে ১২ রবিউল আউয়াল শরীফ হুযুর পাক ছল্লাল্লাহু অালাইহি ওয়া সাল্লাম উনার বিলাদত শরীফ ছাড়াও বিছাল শরীফের তারিখ। এই দিনতো শোকের দিন (নাউযুবিল্লাহ)। তাহলে এই দিন কি ঈদ পালন করা যাবে?

অবশ্যই পালন করা যাবে। এ বিষয়ে অনেক দলীল পেশ করা হয়েছে পূর্বে। আজকে সে বিষয়ের অবতারনা করবো না। আজকে সরাসরি বিরোধীতাকারীদের মুরুব্বী আশরাফ আলী থানবীর বক্তব্য থেকেই বিষয়টা তুলে ধরবো। থানবীর লিখিত বইটির নাম হচ্ছে ‘নশরুত্যীব’। বাংলা অনুবাদ করা হয়েছে ‘যে ফুলের খুশবুতে সারা জাহান মাতোয়ারা’ আর অনুবাদ করেছে দেওবন্দীদের আরেক মুরুব্বী আমিনুল ইসলাম লালবাগ মসজিদের সাবেক খতিব। তো আসুন দেখা যাক উক্ত বইতে কি আছে-`;

para2=`থানবীর লিখনী থেকে প্রমাণ হলো হুযুর পাক ছল্লাল্লাহু অালাইহি ওয়া সাল্লাম উনার বিছাল শরীফের দিন রহমত, নিয়ামত, কল্যান অার কোনভাবেই মুছিবতের বা শোকের দিবস নয়।`;

    this.state = {
      title:title,
      para1:para1,
      para2:para2
    };
   console.log(title)
//    console.log(paragraph)
  }


  onShare = async () => {
    try {
      const result = await Share.share({
        message: `${this.state.title }`+ " \n \n "+ `${this.state.para1}`+ " \n \n "+ `${this.state.para2}` ,
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

       {this.state.para1}
       {"\n"}{"\n"}

       </Text>
       <Image
          style={{ width: '100%', height: 400,resizeMode:'stretch'}}
          source={require('./images/image1.jpg')}
        />
    <Text style={{ fontSize: 15,
        textAlign: 'justify',
        lineHeight: 25}} selectable={true}>

        {this.state.para2}
        {"\n"}
        {"\n"}
    </Text>
        </Content>
      </Container>
    );
  }
}


