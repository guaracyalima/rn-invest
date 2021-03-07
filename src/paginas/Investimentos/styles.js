import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#f4f4f4'
       },
       header: {
        marginTop:18,
        marginBottom:18,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between',
       },
       headerText: {
        color: '#818181',
        fontSize: 18,
        fontWeight: 'bold'
       },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
       listMain: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 1,
        padding: 10,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        backgroundColor: '#ffffff'
        
       },
       investimentoNome: {
           fontWeight: 'bold',
           fontSize: 18
       },
       investimentoNomeDisabled: {
           fontWeight: 'bold',
           fontSize: 18,
           color: '#656565'
       },
       objetivo: {
           fontSize: 16,
           color: '#b3b3b3'
       },
       
  });

  export default styles;