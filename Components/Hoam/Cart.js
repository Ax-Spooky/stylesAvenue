
import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput
} from "react-native";
const Cart =({navigation})=>{

let dp;
  let gt = 0;
  let mainTotal = 0;
  const calDis = () => {
    dp = myTotal * (disco / 100);
    gt = myTotal - dp;
    setMyTotal(gt);
  };

  const calculateTotal = () => {
    carr &&
      carr.map((data, i) => {
        const totalPrice = data.price * data.qt;
        mainTotal = mainTotal + totalPrice;
      });

    setMyTotal(mainTotal);
  };
const [myTotal, setMyTotal] = useState(0);
const [disco, setDisco] = useState("");
const [carr, setCarr] = useState([
    {
      img:require("./ts1.png"),
      name: "Levis print\ntshirt          ",
      qt: 5,
      price: 1700,
      bon: "Remove"
    },
    {
      img: require("./levi.jpg"),
      name: "Levis tshirt ",
      qt: 3,
      price: 1400,
      bon: "Remove"
    },

    {
      img: require("./uspa.jpg"),
      name: "USPA Assasin\nTshirt",
      qt: 2,
      price: 1200,
      bon: "Remove"
    },
    {
      img: require("./david.jpeg"),
      name: " Harley Davidson\nTee ",
      qt: 4,
      price: 1200,
      bon: "Remove"
    }
  ]);
  useEffect(() => {
    calculateTotal();
  }, [disco]);
 
const styles = StyleSheet.create({
    tableRow: {
      flexDirection: "row",
    },
    codeInput: {
      borderWidth: 2,
      alignSelf: "flex-start",
      padding: 10,
      width: "70%",
     
    },
    ic: {
        height: 30,
        width: 30
      },
    code: {
      borderWidth: 2,
      padding: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop:20
    },
    
    text: {
      fontFamily: "Tahoma",
      fontWeight: "bold",
      color:'black'
    },
    head: {
      alignSelf: "center",
      fontSize: 35,
      fontWeight: "bold"
    },
    tex: {
      fontSize: 20,
      fontFamily: "Tahoma",
      paddingBottom: 4
    },
    cart: {
      padding: 20,
      display: "flex",
      flexDirection: "row",
      border: "1px solid black"
    },
    singleCartLabel: {
      paddingLeft: 20,
      textAlign: "left",
      fontSize: 15,
      fontWeight: "bold"
    },
    tinyLogo: {
     marginTop:10,
      width: 40,
      height: 50
    },
   
    singleCartView: {
      padding: 20,
      display: "flex",
      flexDirection: "row",
      border: "1px solid black"
    },
    headerCell: {
      flex: 1,
      borderWidth: 1,
      borderColor: "black",
      padding: 20,
      fontWeight: "bold",
      width: "20%",
      fontSize:6,
      color:'black'
    },
    tableCell: {
      flex: 1,
      borderColor: "black",
      padding: 20,
      width: "20%",
      color:'black',
      marginLeft:3
    },
    table: {
      borderWidth: 1,
      borderColor: "black",
      marginBottom: 10,
      height:600
    },
    apply: {
      backgroundColor: "#4F8FC0",
      borderRadius: 5,
      textAlign: "center",
      textAlignVertical: "center",
      padding: 10,
      marginTop:20
    },
    last:{
      width:"30%",
      color:'blue',
      height:'30%',
      paddingTop:30,
      alignSelf:'center'
    },
  
  });

return(
<ScrollView>
            <View style={{ backgroundColor: "violet" }}>
              <View>
                {/* back button */}
                <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
                   <Image style={styles.ic} source={require("./back.png")} /> 
                </TouchableOpacity>
              </View>
              <Text style={styles.head}>Checkout</Text>
            </View>
            <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <View style={styles.table}>
                <View style={styles.tableRow}> 
                  <Text style={styles.headerCell}>Sr.No</Text>
                  <Text style={styles.headerCell}>Name</Text>
                  <Text style={styles.headerCell}>Image</Text>
                  <Text style={styles.headerCell}>Price</Text>
                  <Text style={styles.headerCell}>Quantity</Text>
                  <Text style={styles.headerCell}>Total</Text>
                </View>
                {carr.map((data, i) => (

                    <View style={styles.tableRow} key={i}>
                      <Text style={styles.tableCell}>{i + 1}</Text>
                      <Text style={styles.tableCell}>{data.name}</Text>
                       <Image style={styles.tinyLogo} source ={data.img}/> 
                      <Text style={styles.tableCell}>{data.price}</Text>
                      <Text style={styles.tableCell}>{data.qt}</Text>
                      <Text style={styles.tableCell}>
                        {data.qt * data.price}₹
                      </Text>
                    </View>
               
                ))}
                <Text
                  style={{
                    textAlign: "right",
                    flex: 1,
                    fontWeight: "bold",
                    fontSize: 30,
                    color:'black'
                  }}
                >
                  Total: {myTotal}
                </Text>
              </View>
            </View>                  
              </ScrollView>
          <View style={styles.code}>
              <TextInput
              placeholderTextColor={('black')}
                style={styles.codeInput}
                onChangeText={setDisco}
                value={disco}
                placeholder="Enter Discount Percentage"
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.apply} onPress={calDis}>
                <Text>Apply</Text>
              </TouchableOpacity>
              
            </View>
            
            <TouchableOpacity style={styles.last} onPress={()=>navigation.navigate('Last')}>
                <Text style={{color:'black',textAlign:'center', backgroundColor: "#4F8FC0",
      borderRadius: 5,}}> Place Order </Text>
              </TouchableOpacity>
          </ScrollView>
);
}
export default Cart;