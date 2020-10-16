import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'
import {
  photo,
  igtv,
  sendmessage,
  smallavatar,
  myprofile,
  avatar,
  avatar2,
  avatar3,
  avatar4,
  more_icon,
  imageBig,
  heartnofill,
  commentnofill,
  savenofill,
  listdot,
  likeduser,
  hear,
  home,
  search,
  createpost,
  avatarprofile,
  bottommenu,
  smallheart,
  linevertical
} from './assets/images'
const {width,height} = Dimensions.get('window');
const rate = width/375;

class App extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  render(){
    return(
      <View style = {style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style = {style.controlbar}>
            
            <Image source={photo}
                style={{
                  width: 25*rate,
                  height:23*rate,
                }}
            />
            <View style = {style.row}>
              <Image source={igtv}
                style={{
                  width: 23*rate,
                  height:25*rate,
                  marginEnd:18*rate,
                }}
              />
              <Image source={sendmessage}
                style={{
                  
                  width: 24*rate,
                  height:21*rate,
                  
                }}
              />
            </View>
          </View>
          <View style={
            {
              
              borderBottomWidth:1*rate,
              borderBottomColor:'#DADBDA'
            }
          }> 
            <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}> 
              <View style ={style.row}>
                <View style = {style.stories}>
                  <Image  
                    source ={myprofile}
                    style ={{
                      width:56*rate,
                      height:56*rate,
                    }}
                  />
                  <Text style={style.textMyStory}>
                    Your story
                  </Text>
                </View>
                <View style = {style.stories}>
                  <Image  
                    source ={avatar}
                    style ={{
                      width:62*rate,
                      height:62*rate,
                    }}
                  />
                  <Text style={style.textStory}>
                    helge_nilsen
                  </Text>
                </View>
                <View style = {style.stories}>
                  <Image  
                    source ={avatar2}
                    style ={{
                      width:62*rate,
                      height:62*rate,
                    }}
                  />
                  <Text style={style.textStory}>
                    helge_nilsen
                  </Text>
                </View>
                <View style = {style.stories}>
                  <Image  
                    source ={avatar3}
                    style ={{
                      width:62*rate,
                      height:62*rate,
                    }}
                  />
                  <Text style={style.textStory}>
                    helge_nilsen
                  </Text>
                </View>
                <View style = {style.stories}>
                  <Image  
                    source ={avatar4}
                    style ={{
                      width:62*rate,
                      height:62*rate,
                    }}
                  />
                  <Text style={style.textStory}>
                    helge_nilsen
                  </Text>
                </View>
                <View style = {style.stories}>
                  <Image  
                    source ={avatar}
                    style ={{
                      width:62*rate,
                      height:62*rate,
                    }}
                  />
                  <Text style={style.textStory}>
                    helge_nilsen
                  </Text>
                </View>
                <View style = {style.stories}>
                  <Image  
                    source ={avatar2}
                    style ={{
                      width:62*rate,
                      height:62*rate,
                    }}
                  />
                  <Text style={style.textStory}>
                    helge_nilsen
                  </Text>
                </View>
                <View style = {style.stories}>
                  <Image  
                    source ={avatar3}
                    style ={{
                      width:62*rate,
                      height:62*rate,
                    }}
                  />
                  <Text style={style.textStory}>
                    helge_nilsen
                  </Text>
                </View>
                <View style = {style.stories}>
                  <Image  
                    source ={avatar4}
                    style ={{
                      width:62*rate,
                      height:62*rate,
                    }}
                  />
                  <Text style={style.textStory}>
                    helge_nilsen
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={{
                          flexDirection:'row',
                          paddingHorizontal:12*rate,
                          paddingVertical:12*rate,
                          justifyContent:'space-between',
                          alignItems:'center'
                        }
                      }> 
            <View style={{flexDirection:'row'}}>
              <Image source={smallavatar}
                  style={{
                    
                    width: 34*rate,
                    height:34*rate,
                    
                  }}
                />
                <View style={{paddingStart:9*rate}}>
                  <Text style={{fontSize:14*rate,
                  fontFamily:'SFProDisplay-Bold'}}> 
                    tammyolson
                  </Text>
                  <Text style={{fontFamily:'Helvetica',fontSize:11*rate}}>
                    Holland, Rotterdam
                  </Text>
                </View>
                
            </View>
            <Image source={more_icon}
                style={{
                  width:13*rate,
                  height:3*rate
                }} />
          </View>
          <Image source={imageBig}
            style={{
              width: width,
              height: 278*rate,
            }}
          />

          <View style={{flexDirection:'row',
              paddingHorizontal:12*rate,
              paddingBottom:12*rate,
              paddingTop:9*rate,
              justifyContent:"space-between"
          }}>
            <View style={{flex:1 ,flexDirection:'row', alignItems:"center"}}>
              <Image source = {heartnofill}
              style={{
                width:24*rate,
                height:22*rate,
                marginEnd:18*rate,
              }}/>
              <Image source = {commentnofill}
              style={{
                width:24*rate,
                height:24*rate,
                marginEnd:18*rate,
              }}/>
              <Image source = {sendmessage}
              style={{
                width:24*rate,
                height:21*rate,
              }}/>
            </View>
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
              <Image source={listdot} 
                style={{
                  width:50*rate,
                  height:6*rate,
                }}/>
            </View>
            <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
            <Image 
              source = {savenofill}
              style={{
                width:21*rate,
                height:24*rate,
              }}/>
            </View>
            
          </View>

          <View style={{paddingLeft:12*rate, paddingRight:10*rate}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={likeduser}
                style={{width:29*rate,
                height:13*rate,
                marginRight:9*rate}}/>
                <Text style={style.fontNormal}>
                  Liked by <Text style={style.fontSemiBold}>KnE</Text> and <Text style={style.fontSemiBold}>115 321 others</Text>
                </Text>
              </View>
              <View style={{marginRight:95*rate, paddingVertical:10*rate}}>
                  <Text style={style.fontNormalblue}>
                    <Text style={style.fontSemiBold}>tammyolson</Text> #amazing #travel #instagram Look nice!
                  </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:10*rate}}>
                  <View style={{width:327*rate}}>
                    <Text style={style.fontNormal}>
                      <Text style={style.fontSemiBold} >tammyolson</Text> Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.
                    </Text>
                  </View>
                  <Image source={smallheart}
                    style={{width:11*rate,
                    height:9*rate}}
                  />
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}> 
                      <Image source = {linevertical}
                      style={{
                        width:2*rate,
                        height:42*rate,
                        marginHorizontal:10*rate
                      }}/>
                      <View style={{width: 305*rate}}>
                        <Text>Hashtag typewriter banh mi, squid keffiyeh High Life Brooklyn twee craft beer tousled chillwave. PBR&B selfies chillwave</Text>
                      </View>
                </View>
                <Image source={smallheart}
                    style={{width:11*rate,
                    height:9*rate}}
                  />
              </View>
          </View>
          <View style={style.menubar}>
            <View style={{height:49/812 *height,
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
               paddingLeft:18*rate,
               paddingRight:21*rate,
               }}>
                 <Image source={home}
                  style={{
                    width:23*rate,
                    height:24*rate
                  }}
                 />
                 <Image source={search}
                  style={{
                    width:22*rate,
                    height:22*rate
                  }}
                 />
                 <Image source={createpost}
                  style={{
                    width:25*rate,
                    height:25*rate
                  }}
                 />
                 <Image source={hear}
                  style={{
                    width:24*rate,
                    height:22*rate
                  }}
                  
                 />
                 <Image source={avatarprofile}
                  style={{
                    width:24*rate,
                    height:23*rate
                  }}
                 />
                 
               </View>
               <View style={{
                alignItems:'center',
                paddingTop:20/812 *height,
                }}>
                  <Image source = {bottommenu}
                    style={{
                    width:134*rate,
                    height:5*rate
                    
                  }}
                  />
                </View>
               
          </View>
        </ScrollView>
    </View>
    )
    
  }
}
const style = StyleSheet.create({
    menubar:
    {
      borderTopColor:'#F9FAF9',
      borderTopWidth:1*rate,
      height: 83/812 * height,
    },
    fontNormal:
    {
      fontFamily:'SFProDisplay-Regular',
      fontSize: 13*rate,
      color:'#262626'
    },
    fontNormalblue:
    {
      fontFamily:'SFProDisplay-Regular',
      fontSize: 13*rate,
      color:'#3f729b'
    },
    fontSemiBold:
    {
      fontFamily:'SFProDisplay-Semibold',
      fontSize:13*rate,
      color:'#262626'
    },
    container:
    {
      flex:1,
    },
    row:
    {
      flexDirection:'row',
      alignItems:'center'
    },
    controlbar:{
      paddingVertical:10*rate,
      paddingHorizontal:12*rate,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:'#F9FAF9',
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:'#DADBDA'
    },
    stories:
    {
      paddingLeft:15*rate,
      paddingTop:16*rate,
      paddingBottom:13*rate,
      alignItems:'center'
    },
    textMyStory:
    {
      paddingTop:9*rate,
      fontSize:10*rate,
      color:'#999999',
      fontFamily:'Helvetica',
    },
    textStory:
    {
      fontFamily:'Helvetica',
      paddingTop:9*rate,
      fontSize:10*rate,
      color:'#262626'
    },
    viewbases:
    {
      paddingHorizontal:12*rate,
    }
})
export default App