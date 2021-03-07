import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./styles";

const Investimentos = ({ navigation }) => {
  const [carregandoDados, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5e76797e2f0000f057986099")
      .then((response) => response.json())
      .then((json) => {
        setData(json.response.data.listaInvestimentos);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const detalharInvestimento = (_investimento) => {
    navigation.navigate("Resgate", { investimento: _investimento.item });
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}>INVESTIMENTOS</Text>
        <Text style={style.headerText}>R$</Text>
      </View>
      {carregandoDados ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => detalharInvestimento({ item })}
              disabled={item.indicadorCarencia !== "N"}
            >
              <View style={style.listMain}>
                <View>
                  <Text
                    style={
                      item.indicadorCarencia !== "N"
                        ? { ...style.investimentoNomeDisabled }
                        : style.investimentoNome
                    }
                  >
                    {item.nome}
                  </Text>
                  <Text style={style.objetivo}>{item.objetivo}</Text>
                </View>
                <Text>
                  {item.saldoTotalDisponivel.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Investimentos;
