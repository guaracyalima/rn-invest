import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import style from "./styles";

const Resgate = ({ navigation, route }) => {
  const [valorTotalAResgatar, setValorTotalAResgatar] = useState(0);

  let global = 0;
  const [data, setData] = useState();
  const [nomeDoInvestimento, setNomeDoInvestimento] = useState([]);
  const [saldoTotalDisponivel, setSaldoTotalDisponivel] = useState([]);
  const [acoes, setAcoes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [
    modalSolicitarPreenchimentoDeValor,
    setModalSolicitarPreenchimentoDeValor,
  ] = useState(false);

  useEffect(() => {
    setData(route.params.investimento);
    setAcoes(route.params.investimento.acoes);
    setNomeDoInvestimento(route.params.investimento.nome);
    setSaldoTotalDisponivel(route.params.investimento.saldoTotalDisponivel);
  }, []);

  const executarResgate = () => {
    if (
      valorTotalAResgatar <= 0 ||
      valorTotalAResgatar == undefined ||
      valorTotalAResgatar == null
    ) {
      setModalSolicitarPreenchimentoDeValor(true);
    } else {
      setModalVisible(true);
    }
  };
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}>DADOS DO INVESTIMENTO</Text>
      </View>

      <View style={style.main}>
        <View style={style.detalhesDoInvestimento}>
          <Text style={style.tituloDoInvestimento}>Nome</Text>
          <Text style={style.nomeDoInvestimento}>{nomeDoInvestimento}</Text>
        </View>

        <View style={style.detalhesDoInvestimento}>
          <Text style={style.tituloDoInvestimento}>Saldo total disponível</Text>
          <Text style={style.nomeDoInvestimento}>
            {saldoTotalDisponivel.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </View>
      </View>

      <View style={style.viewResgateDoSeuJeito}>
        <Text style={style.textResgateDoSeuJeito}>RESGATE DO SEU JEITO</Text>
      </View>

      <FlatList
        data={acoes}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View>
            <View style={style.detalhamentoAcoes}>
              <View style={style.detalhesDoInvestimento}>
                <Text style={style.tituloDoInvestimento}>Ação</Text>
                <Text style={style.nomeDoInvestimento}>{item.nome}</Text>
              </View>

              <View style={style.detalhesDoInvestimento}>
                <Text style={style.tituloDoInvestimento}>Saldo acumulado</Text>
                <Text style={style.nomeDoInvestimento}>
                  {(
                    (data.saldoTotalDisponivel * item.percentual) /
                    100
                  ).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
              </View>

              <Formik
                initialValues={{ valorResgate: "R$ 00,00" }}
                validate={(values) => {
                  const errors = {};
                  let _valorResgate = values.valorResgate;

                  let percentual = (
                    (data.saldoTotalDisponivel * item.percentual) /
                    100
                  ).toFixed(2);
                  let percentualEmRs = percentual.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  });

                  if (!_valorResgate || _valorResgate == 0) {
                    errors.valorResgate =
                      "Valor de resgate não pode ser menor que 0";
                  } else if (_valorResgate > Math.ceil(percentual)) {
                    errors.valorResgate = `O Valor do resgate não pode ser maior que R$ ${percentualEmRs}`;
                  }

                  global = global + Number.parseFloat(_valorResgate);
                  setValorTotalAResgatar(global);

                  return errors;
                }}
              >
                {(props) => (
                  <View style={style.resgateInputView}>
                    <Text style={style.labelValorAResgatar}>
                      Valor a resgatar
                    </Text>
                    <TextInput
                      style={{ height: 40 }}
                      placeholder="Valor a resgatar"
                      keyboardType="numeric"
                      onChangeText={props.handleChange("valorResgate")}
                      onBlur={props.handleBlur("valorResgate")}
                      value={props.values.valorResgate}
                      clearTextOnFocus={true}
                      onSubmitEditing={() => {
                        this.valorResgateInput.focus();
                      }}
                    />

                    {props.touched.valorResgate && props.errors.valorResgate ? (
                      <Text style={style.error}>
                        {props.errors.valorResgate}
                      </Text>
                    ) : null}
                  </View>
                )}
              </Formik>
            </View>
          </View>
        )}
      />
      <View>
        <View style={style.valorTotalAResgatar}>
          <Text style={style.valorTotalAResgatarTitulo}>
            Valor total a resgatar
          </Text>
          <Text style={style.headerText}>
            {valorTotalAResgatar.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </View>
      </View>
      <View style={style.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={style.modalResgateTitulo}>RESGATE EFETUADO!</Text>
              <Text>
                O valor solicitado estará em sua conta em até 5 dias úteis!
              </Text>
              <Pressable
                style={[style.botaoResgate]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={style.textoBotaoResgate}>NOVO RESGATE</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalSolicitarPreenchimentoDeValor}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalSolicitarPreenchimentoDeValor(
              !modalSolicitarPreenchimentoDeValor
            );
          }}
        >
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={style.modalResgateTitulo}>ATENÇÃO!</Text>
              <Text>Informe pelomenos uma ação a resgatar!</Text>
              <Pressable
                style={[style.botaoResgate]}
                onPress={() =>
                  setModalSolicitarPreenchimentoDeValor(
                    !modalSolicitarPreenchimentoDeValor
                  )
                }
              >
                <Text style={style.textoBotaoResgate}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Pressable
          style={style.botaoResgateModal}
          onPress={() => executarResgate()}
          underlayColor="#fff"
        >
          <Text style={style.textoBotaoResgate}>CONFIRMAR RESGATE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Resgate;
