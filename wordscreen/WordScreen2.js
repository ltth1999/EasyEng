import React, { Component } from 'react'
import { Text, View, TextInput,Image,TouchableOpacity, Alert, Modal} from 'react-native'
import Fail from '../assets/checkFalse.png'
import Win from '../assets/checkTrue.png'
class WordScreen2 extends Component {
    
    constructor(props){
        super(props)
        this.state={
            modalVisible: false,
            word1: "F",
            word2: "",
            word3: "",
            word4: "E",
            word5: "",
            word6: "D",
            answer1: "F",
            answer2: "R",
            answer3: "I",
            answer4: "E",
            answer5: "N",
            answer6: "D",
            
        }
    }

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
        setTimeout(() => {
            this.setState({
                modalVisible: false,
            });
        }, 2000);
    };

    componentDidMount=() =>{
        this.refs.word1ref.focus()
    }

    render() {
        
        const {word1,word2,word3,word4,word5,word6,answer1,answer2,answer3,answer4,answer5,answer6} = this.state;
        return (
        <View style={{backgroundColor:'white',height:"100%",width:"100%"}}>
            <Text style={{fontSize:17,paddingTop:10,padding:25,color:'green',fontWeight:'bold'}}>Điền từ còn thiếu vào ô trống - Hình ảnh gợi ý </Text>
            <View style={{justifyContent:"space-evenly", flexDirection:"row",height:160}}>
                <TextInput 
                    ref={"word1ref"}
                    onChangeText={(word1) => {
                        this.setState({ word1 : word1})
                        if(word1 != ""){
                            this.refs.word2ref.focus() 
                        } 
                    }}   
                    value={word1}
                    maxLength={1}
                    placeholder={"_"}
                    placeholderTextColor={"white"}
                    style=  {{  backgroundColor:"green",fontWeight:"600",alignSelf:'center',
                                fontSize: 20,color:'white',width:'11%', borderRadius:10,
                                borderWidth:0.5,borderColor:'grey',textAlign:'center'
                            }}
                />
                <TextInput 
                    ref={"word2ref"}
                    onChangeText={(word2) => {
                        this.setState({ word2: word2})
                        if(word2 !== "" && word3 == ""){
                            this.refs.word3ref.focus() 
                        } else{
                            this.refs.word4ref.focus() 
                        }
                        
                    }}   
                    value={word2}
                    maxLength={1}
                    placeholder={"_"}
                    placeholderTextColor={"white"}
                    style=  {{ backgroundColor:"green",fontWeight:"600",alignSelf:'center',
                                fontSize: 20,color:'white',width:'11%', borderRadius:10,
                                borderWidth:0.5,borderColor:'grey',textAlign:'center'
                            }}
                />
                <TextInput 
                    ref={"word3ref"}
                    onChangeText={(word3) => {
                        this.setState({ word3 : word3})
                        if(word3 !== "" && word4 == ""){
                            this.refs.word4ref.focus() 
                        } else{
                            this.refs.word5ref.focus() 
                        }
                    }}   
                    value={word3}
                    maxLength={1}
                    placeholder={"_"}
                    placeholderTextColor={"white"}
                    style=  {{  backgroundColor:"green",fontWeight:"600",alignSelf:'center',
                                fontSize: 20,color:'white',width:'11%', borderRadius:10,
                                borderWidth:0.5,borderColor:'grey',textAlign:'center'
                            }}
                />
                <TextInput 
                    ref={"word4ref"}
                    onChangeText={(word4) => {
                        this.setState({ word4 : word4})
                        if(word4 != ""){
                            this.refs.word5ref.focus() 
                        }
                    }}   
                    value={word4}
                    maxLength={1}
                    placeholder={"_"}
                    placeholderTextColor={"white"}
                    style=  {{  backgroundColor:"green",fontWeight:"600",alignSelf:'center',
                                fontSize: 20,color:'white',width:'11%', borderRadius:10,
                                borderWidth:0.5,borderColor:'white',textAlign:'center'
                            }}
                />
                <TextInput 
                    ref={"word5ref"}
                    onChangeText={(word5) => {
                        this.setState({ word5 : word5})
                        if(word5 != ""){
                            this.refs.word6ref.focus() 
                        }
                        // if(word5 != "" && word1===answer1 && word2===answer2 && word3===answer3 && word4===answer4
                        // && word5===answer5){
                        //     alert("Kết Quả Đúng")
                        // } else{
                        //     alert("Đáp Án Sai")
                        // }
                    }}   
                    value={word5}
                    maxLength={1}
                    placeholder={"_"}
                    placeholderTextColor={"white"}
                    style=  {{  backgroundColor:"green",fontWeight:"600",alignSelf:'center',
                                fontSize: 20,color:'white',width:'11%', borderRadius:10,
                                borderWidth:0.5,borderColor:'grey',textAlign:'center'
                            }}
                />
                <TextInput 
                    ref={"word6ref"}
                    onChangeText={(word6) => {
                        this.setState({ word6 : word6})
                        
                    }}   
                    value={word6}
                    maxLength={1}
                    placeholder={"_"}
                    placeholderTextColor={"white"}
                    style=  {{  backgroundColor:"green",fontWeight:"600",alignSelf:'center',
                                fontSize: 20,color:'white',width:'11%', borderRadius:10,
                                borderWidth:0.5,borderColor:'white',textAlign:'center'
                            }}
                />
            </View> 
            <View style={{alignItems:'center'}}>
                <Image style={{width:250,height:150}}  
                source={{uri: 'https://www.talkbeauty.vn/public/assets/article_dir/2020/11/fake-friend-74.jpg'}}/>
            </View>
            <View style={{ flexDirection:"row",justifyContent:'center',width:"100%",height:50,paddingTop:20}}>
                <TouchableOpacity onPress={ () => {  
                    if( word1===answer1 && word2===answer2 && word3===answer3 && word4===answer4 && word5===answer5 && word6===answer6)
                    {
                        this.showModal();
                    } else{
                        this.showModal();
                    }
                }}>
                    <View style={{  backgroundColor:'white',width:100,height:50,alignItems:'center',
                                    justifyContent:'center', borderRadius:20,borderWidth:0.5,borderColor:'green'}}>
                        <Text style={{color:'green', fontWeight:'bold'}} >   KIỂM TRA </Text>
                    </View>       
                </TouchableOpacity>  
            </View> 
            {( word1===answer1 && word2===answer2 && word3===answer3 && word4===answer4 && word5===answer5 && word6===answer6)?
                <Modal animationType="slide" transparent visible={this.state.modalVisible}>
                    <View style={{  flex: 1,borderRadius:20,borderWidth:2,borderColor:'green',alignItems:'center',backgroundColor: 'white',
                                    justifyContent:'center',marginTop:250,marginLeft:50,marginRight:50,marginBottom:200 }}>
                    <Image source={Win} style={{width:70,height:70}}/>
                    <Text style={{fontSize: 20, color: 'green',fontWeight:'bold'}}>
                        Ố la la !
                    </Text>
                    <Text style={{fontSize: 16, color: 'green'}}>
                        Bạn đã trả lời chính xác
                    </Text>
                    
                    </View>
                </Modal> : 
                <Modal animationType="slide" transparent visible={this.state.modalVisible}>
                    <View style={{  flex: 1,borderRadius:20,borderWidth:2,borderColor:'red',alignItems:'center',backgroundColor: 'white',
                                    justifyContent:'center',marginTop:250,marginLeft:50,marginRight:50,marginBottom:200 }}>
                    <Image source={Fail} style={{width:70,height:70}}/>
                    <Text style={{fontSize: 20, color: 'red',fontWeight:'bold'}}>
                        Oh no no !
                    </Text>
                    <Text style={{fontSize: 16, color: 'red'}}>
                        Bạn đã trả lời sai
                    </Text>
                    </View>
                </Modal>
            }   
        </View>   
        )
    }
}
export default WordScreen2;