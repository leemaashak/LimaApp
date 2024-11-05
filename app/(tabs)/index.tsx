import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getBackgroundColorAsync } from 'expo-system-ui'

const index = () => {
  return (
    <View style={{flex:1}}  >
      <ScrollView >

        <View style={styles.container}>
          <Text>index</Text>
          
          <View style={styles.box}>
            <View style={styles.smallbox}>
              <View style={styles.sbox}></View>
              <View>
                <Text style={styles.name}>name:leema</Text>
                <Text style={styles.bday}>birthday:5.6.2004</Text>
              </View>
            </View>
            <Text style={styles.txt}>my first ui</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.smallbox}>
              <View style={styles.sbox}></View>
              <View>
                <Text style={styles.name}>name:leema</Text>
                <Text style={styles.bday}>birthday:5.6.2004</Text>
              </View>
            </View>
            <Text style={styles.txt}>my first ui</Text>
          </View>


          <View style={styles.box}>
            <View style={styles.smallbox}>
              <View style={styles.sbox}></View>
              <View>
                <Text style={styles.name}>name:leema</Text>
                <Text style={styles.bday}>birthday:5.6.2004</Text>
              </View>
            </View>
            <Text style={styles.txt}>my first ui</Text>
          </View>


        </View>
      </ScrollView>
    </View>

  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',


  },
  box: {
    backgroundColor: 'blue',
    height: 250,
    width: 250,
    margin: 50,

  },
  smallbox: {
    height: 150,
    width: 250,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  sbox: {
    backgroundColor: 'black',
    width: 70,
    height: 100,
    marginLeft: 30,
    marginTop: 25,
  },
  txt: {
    fontSize: 50,
    marginLeft: 20,
    marginTop: 10,
  },
  name: {
    fontSize: 15,
    marginTop: 40,
    marginLeft: 10,
  },
  bday: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: 10,

  },
  another: {
    backgroundColor: 'blue',
    height: 250,
    width: 250,
    margin: 1,

  },
  anotherbox: {
    backgroundColor: 'black',
    width: 70,
    height: 100,
    marginLeft: 30,
    marginTop: 25,

  },
  scroll: {
    // height:1000,
  },




})