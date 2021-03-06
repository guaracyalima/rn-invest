import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import NumberFormat from 'react-number-format';

const Resgate = ({navigation, route}) => {
  
  const [data, setData] = useState();
  const [acoes, setAcoes] = useState([]);
  const [valorAresgatar, onChangeText] = React.useState('');
  useEffect(() => {

    setData(route.params.investimento)
    setAcoes(route.params.investimento.acoes)

   
  }, []);


  
  return (
    <View style={{ flex: 1, padding: 24 }}>
 
      <FlatList
          data={acoes}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            
              <View>
                <View>
                <Text>Ação.: { item.nome }</Text>
                </View>
                <NumberFormat 
                              value={(data.saldoTotalDisponivel * item.percentual) / 100} 
                              displayType={'text'} 
                              thousandSpacing={2}
                              decimalSeparator={','}
                              decimalScale={2}
                              prefix={'R$'} 
                              renderText={formattedValue => <Text>{formattedValue}</Text>}/>

<TextInput
        style={{height: 40}}
        placeholder="Valor a resgatar"
        keyboardType='numeric'
        onChangeText={text => {
          if(text > ((data.saldoTotalDisponivel * item.percentual) / 100)){
            alert("Valor maior que o total disponilve")
            //onChangeText('')
          }
          
        }
        }
        
      />
              </View>
            
          )}
        />
        

    </View>
  );
}

export default Resgate;