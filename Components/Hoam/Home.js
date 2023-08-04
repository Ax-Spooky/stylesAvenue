
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
const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontFamily: "Tahoma",
      alignContent: 'center',
      textAlign:"center"
    },
    tableRow: {
      flexDirection: "row"
    },
    codeInput: {
      borderWidth: 2,
      alignSelf: "flex-start",
      padding: 10,
      width: "70%",
     
    },
  
  
  
    proimg: {
      height: 200,
      width: 190,
      margin: 20,
      
      borderRadius: 11,
      alignSelf: "center"
    },
    hed: {
      fontSize: 18,
      fontFamily: "Tahoma",
      color:'black',
      paddingBottom: 5,
      borderBottomWidth: 1,
      borderBottomColor: "black",
      fontWeight: "bold"
    },
    code: {
      borderWidth: 2,
      padding: 20,
      flexDirection: "row",
      justifyContent: "space-between"
    },
  
    des: {
      fontSize: 16,
      fontFamily: "serif",
      color:'black'
    },
    sizeBut: {
      border: "1px solid ",
      padding: 2,
      borderRadius: 4,
      backgroundColor: "skyblue",
      fontWeight: "bold"
    },
    cb: {
      backgroundColor: "violet",
      // border: "solid",
      borderWidth: 3,
      borderRadius: 5,
      paddingLeft: 5,
      paddingRight: 8,
      borderColor: "black",
      fontFamily: "Tahoma",
      color: "white",
      fontWeight: "bold",
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      width: 200,
      alignSelf: "center",
      marginTop: 12,
      textAlign: "center"
    },
  
  cards:{
    height:220,
    width:180,
    shadowColor: "#000",
    borderRadius: 10,
    marginBottom:4,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
    padding: 10,
    backgroundColor: "#fff",
    display:'flex'
   
  },
      imaee: {
        height: 120,
        width: 120, 
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
      },
    crime: {
      height: 100,
      width: 40,
      borderRadius: 25
    },
    text: {
      fontFamily: "Tahoma",
      fontWeight: "bold",
      color:'black'
    },
    ic: {
      height: 30,
      width: 30
    },
    head: {
      alignSelf: "center",
      fontSize: 35,
      fontWeight: "bold"
    },
    container: {
    
      margin: "10%",
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      elevation: 12,
      width: 400,
      height: 280,
      alignSelf:'center',
      padding: 20,
      marginTop: 100,
      borderRadius: 20,
    },
    tex: {
      fontSize: 20,
      fontFamily: "Tahoma",
      paddingBottom: 2,
      color:'black'
    },
    ti: {
      width: 224,
      fontFamily: "Tahoma",
      fontSize: 16
    },
    ca: {
      fontWeight: "bold",
      marginLeft: 10
    },
    vw: {
      fontWeight: "bold",
      border: "2px solid ",
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-around",
      flex: 1
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
    column: {
      borderWidth: 1,
      borderColor: "black",
      padding: 10,
      marginLeft: 0
    },
    singleCartView: {
      padding: 20,
      display: "flex",
      flexDirection: "row",
      border: "1px solid black"
    },
    ctex: {
      border: "2px solid",
      fontFamily: "Tahoma",
      fontWeight: "bold",
      textAlign: "start"
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
      marginBottom: 10
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
  const Home = ({navigation}) =>{
  const [cartVisible, setCartVisible] = useState(false);
  const [buyVisible, setBuyVisible] = useState(false);
  const [home, showHome] = useState(false);
  // const pro = require("./logoofin.png");
  const [myTotal, setMyTotal] = useState(0);
  const [disco, setDisco] = useState("");
  const [prodVisible, setProdVisible] = useState(false);
  let dp;
  let gt = 0;
  let mainTotal = 0;
  let products = [
    {
      imgs: require("./ts1.png"),
      name: "Levis print tshirt ",
      details: " Size XL ",
      price: " ₹1700",
      bon: "Add to Cart"
    },
    {
      imgs: require("./levi.jpg"),
      name: "Levis tshirt ",
      details: " Size L ",
      price: " ₹1400",
      bon: "Add to Cart"
    },

    {
      imgs: require("./uspa.jpg"),
      name: "USPA Assasin Tshirt",
      details: " Size M ",
      price: " ₹1200",
      bon: "Add to Cart"
    },
    {
      imgs: require("./uspa22.jpeg"),
      name: "US Polo Tshirt white ",
      details: " Size XL ",
      price: " ₹1900",
      bon: "Add to Cart"
    },
    {
      imgs: require("./parx2.jpeg"),
      name: "Parx midnight blue ",
      details: " Size L ",
      price: " ₹900",
      bon: "Add to Cart"
    },
    {
      imgs: require("./solly2.jpeg"),
      name: "Allen solly Limited ",
      details: " Size XXL ",
      price: " ₹2099",
      bon: "Add to Cart"
    },
    {
      imgs: require("./images.jpeg"),
      name: "Levis graphic Tee",
      details: " Size XL ",
      price: " ₹1750",
      bon: "Add to Cart"
    },
    {
      imgs: require("./solly1.jpeg"),
      name: "Allen Solly Red ",
      details: " Size XXL ",
      price: " ₹2200",
      bon: "Add to Cart"
    },
    {
      imgs: require("./RE1.jpeg"),
      name: " Royal Enfield Tee",
      details: " Size XXL ",
      price: " ₹2670",
      bon: "Add to Cart"
    },
    {
      imgs:require("./RE2.png"),
      name: "Enfield Gun Tee",
      details: " Size XXL ",
      price: " ₹1180",
      bon: "Add to Cart"
    },
    {
      imgs:require("./parx.png"),
      name: "Parx regular fit ",
      details: " Size L ",
      price: " ₹750",
      bon: "Add to Cart"
    },
    {
      imgs: require("./hyu.png"),
      name: "Hyundai Tee",
      details: " Size XL ",
      price: " ₹1699",
      bon: "Add to Cart"
    },
    {
      imgs: require("./RE1.jpeg"),
      name: "RE Tee",
      details: " Size S ",
      price: " ₹799",
      bon: "Add to Cart"
    },
    {
      imgs: require("./parx3.png"),
      name: "Parx Red Tee",
      details: " Size S ",
      price: " ₹699",
      bon: "Add to Cart"
    },
    {
      imgs: require("./ts1.png"),
      name: "Levis print tshirt ",
      details: " Size XL ",
      price: " ₹1700",
      bon: "Add to Cart"
    },
    {
      imgs: require("./levi.jpg"),
      name: "Levis tshirt ",
      details: " Size L ",
      price: " ₹1400",
      bon: "Add to Cart"
    },

    {
      imgs: require("./uspa.jpg"),
      name: "USPA Assasin Tshirt",
      details: " Size M ",
      price: " ₹1200",
      bon: "Add to Cart"
    },
    {
      imgs: require("./uspa22.jpeg"),
      name: "US Polo Tshirt white ",
      details: " Size XL ",
      price: " ₹1900",
      bon: "Add to Cart"
    },
    {
      imgs: require("./parx2.jpeg"),
      name: "Parx midnight blue ",
      details: " Size L ",
      price: " ₹900",
      bon: "Add to Cart"
    },
    {
      imgs: require("./solly2.jpeg"),
      name: "Allen solly Limited ",
      details: " Size XXL ",
      price: " ₹2099",
      bon: "Add to Cart"
    },
    {
      imgs: require("./images.jpeg"),
      name: "Levis graphic Tee",
      details: " Size XL ",
      price: " ₹1750",
      bon: "Add to Cart"
    },
    {
      imgs: require("./solly1.jpeg"),
      name: "Allen Solly Red ",
      details: " Size XXL ",
      price: " ₹2200",
      bon: "Add to Cart"
    },
    {
      imgs: require("./RE1.jpeg"),
      name: " Royal Enfield Tee",
      details: " Size XXL ",
      price: " ₹2670",
      bon: "Add to Cart"
    },
    {
      imgs:require("./RE2.png"),
      name: "Enfield Gun Tee",
      details: " Size XXL ",
      price: " ₹1180",
      bon: "Add to Cart"
    },
    {
      imgs:require("./parx.png"),
      name: "Parx regular fit ",
      details: " Size L ",
      price: " ₹750",
      bon: "Add to Cart"
    },
    {
      imgs: require("./hyu.png"),
      name: "Hyundai Tee",
      details: " Size XL ",
      price: " ₹1699",
      bon: "Add to Cart"
    },
    {
      imgs: require("./RE1.jpeg"),
      name: "RE Tee",
      details: " Size S ",
      price: " ₹799",
      bon: "Add to Cart"
    },
    {
      imgs: require("./parx3.png"),
      name: "Parx Red Tee",
      details: " Size S ",
      price: " ₹699",
      bon: "Add to Cart"
    },
  ];

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
 
 return(
<ScrollView>
      <View style={{ backgroundColor: "violet" , display:'flex'}}>
        <View >
          {/* back button  */}
          <TouchableOpacity onPress={()=>navigation.navigate('Logg')}>
             <Image style={styles.ic} source={require("./back.png")} /> 
          </TouchableOpacity>
        </View>
        <View style={{alignSelf:'center',textAlign:'center',alignItems:'center'}}>
        <Text style={styles.title}> Styles Avenue</Text>
        </View>
      </View>
      <View
        style={{
          alignSelf: "flex-end",
         position: "absolute",
          marginRight: 10,
          marginTop: 2
        }}
      >
        {/* cart logo */}
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
           <Image style={styles.ic} source={require("./cart.png")} /> 
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <View style={{flexWrap:'wrap',flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
            {products.map((data) => {
              return (
                <View style={{}}> 
                  <View style={styles.cards}>
                    <TouchableOpacity onPress={() => setProdVisible(true)}>
                      <Image style={styles.imaee} source ={data.imgs}/> 
                    </TouchableOpacity>
                    <Text style={styles.text}>{data.name} </Text>
                    <Text style={styles.text}>{data.details} </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Text style={styles.text}>{data.price} </Text>
                      <TouchableOpacity>
                        <Text
                          style={{
                            backgroundColor: "violet",
                            
                            borderWidth: 3,
                            borderRadius: 5,
                            paddingLeft: 5,
                            paddingRight: 8,
                            borderColor: "black",
                            fontFamily: "Tahoma",
                            color: "white",
                            fontWeight: "bold",
                            shadowColor: "grey",
                            shadowOffset: { width: 0, height: 5 },
                            shadowOpacity: 0.5,
                            shadowRadius: 8
                          }}
                        >
                          {data.bon}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        </View>
         
         {/* buy modal start  */}
         <Modal visible={buyVisible} animationType="fade">
          <View>
            <View>
              <Text
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  textAlign: "center",
                  fontFamily: "serif",
                  fontSize: 40
                }}
              >
                Order
              </Text>
              <TouchableOpacity
                style={{ position: "absolute" }}
                onPress={() => setBuyVisible(false)}
              >
                <Image
                  style={{ height: 40, width: 40 }}
                  source={require("./back.png")}
                /> 
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <Text style={styles.tex}>
              
                Email:</Text>
                <TextInput placeholderTextColor={('black')}style={styles.ti}></TextInput>
              <Text style={styles.tex}>
                Contact: </Text>
                <TextInput  placeholderTextColor={('black')} style={styles.ti}></TextInput>
             
              <Text style={styles.tex}>
                Address:</Text>
                <TextInput  placeholderTextColor={('black')}  style={styles.ti}></TextInput>
              
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Last')}>
              <Text
                style={{
                  alignSelf: "center",
                 
                  width: 160,
                  height: 35,
                  textAlign: "center",
                  borderRadius: 12,
                  fontSize: 20,
                  backgroundColor: "orange",
                  shadowColor: "gray",
                  shadowOffset: { width: 0, height: 1 },
                  elevation: 10
                }}
              >
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal visible={prodVisible}>
        <ScrollView>
          <View>
            {/* product details modal start  */}
            <View style={{ backgroundColor: "violet" }}>
              <View>
                {/* back button  */}
                <TouchableOpacity onPress={() => setProdVisible(false)}>
                  <Image style={styles.ic} source={require("./back.png")} /> 
                </TouchableOpacity>
              </View>
              <Text style={styles.title}> Styles Avenue</Text>
            </View>

            <Image source={require("./hyu.png")} style={styles.proimg} /> 
            <View>
              <Text style={styles.hed}>Hyundai tshirt</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold",color:'black'}}>
                Best Deal: 1099
              </Text>
              <Text style={{ fontWeight: "bold",color:'black' }}>Description:</Text>
              <Text style={styles.des}>
                Hyundai Nline special edition Unisex tshirt
              </Text>
              <Text style={{ fontWeight: "bold",color:'black' }}>Sizes: </Text>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <TouchableOpacity>
                  <Text style={styles.sizeBut}>Standard </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 10 }}>
                  <Text style={styles.sizeBut}>Plus </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              alignSelf: "center"
            }}
          >
            <TouchableOpacity>
              <Text style={styles.cb}> Add to Cart </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuyVisible(true)}>
              <Text style={styles.cb}> Buy now </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    
        </ScrollView>
    );
 }

 
export default Home;
