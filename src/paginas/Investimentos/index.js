import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


const Investimentos = ({navigation}) => {

  const [carregandoDados, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5e76797e2f0000f057986099')
      .then((response) => response.json())
      .then((json) =>{
        setData(json.response.data.listaInvestimentos)
      } )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const detalharInvestimento = (_investimento) => {

    navigation.navigate('Resgate', {investimento: _investimento.item})
    
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {carregandoDados ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity 
                              onPress={() => detalharInvestimento({item})} 
                              disabled={item.indicadorCarencia !=='N'}>
              <View>
                <View>
                <Text>{item.nome}</Text>
                <Text>{item.objetivo}</Text>
                </View>
                <Text>{item.saldoTotalDisponivel}</Text>
              </View>
            </TouchableOpacity>
            
          )}
        />
      )}
    </View>
  );
}

export default Investimentos;