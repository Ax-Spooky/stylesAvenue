import  React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
 TouchableOpacity,
 TextInput,
  View,
  ImageBackground,
  Image
} from 'react-native';
const Last =({navigation})=>{

return(
<View style={{ backgroundColor: "black",height:1000 }}>
<View style={{ padding: 60, backgroundColor: "black" }}>
            <Image
              source={require("./logoofin.png")}
              style={{
                width: 290,
                height: 260,
                alignSelf: "center",
                paddingTop: 30
              }}
            /> 
            </View>
            <View style={{ alignItems: "center", backgroundColor: "black" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "white" }}
              >
                Thankyou for choosing Style Avenue
              </Text>
              <Text style={{ marginBottom: 10, color: "white" }}>
                You will get further updates till then
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Text
                  style={{
                    marginTop: 6,
                    width: 150,
                    borderWidth: 2,
                    textAlign: "center",
                    borderRadius: 40,
                    fontSize: 19,
                    color: "black",
                    backgroundColor: "orange",
                    borderColor: "orange"
                  }}
                >
                  continue shopping
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        
);
                }
export default Last;