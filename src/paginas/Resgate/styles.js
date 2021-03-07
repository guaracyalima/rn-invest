import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    marginTop: 18,
    marginBottom: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  headerText: {
    color: "#818181",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewResgateDoSeuJeito: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  textResgateDoSeuJeito: {
    color: "#818181",
    fontSize: 18,
    fontWeight: "bold",
  },
  main: {
    flex: 2,
    margin: 0,
    padding: 0,
    backgroundColor: "#ffffff",
  },
  detalhesDoInvestimento: {
    backgroundColor: "#ffffff",
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#f4f4f4",
  },

  tituloDoInvestimento: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  nomeDoInvestimento: {
    color: "#818181",
    fontSize: 18,
    fontWeight: "bold",
  },

  detalhamentoAcoes: {
    flex: 1 / 3,
    margin: 0,
    marginBottom: 8,
    padding: 0,
    backgroundColor: "#ffffff",
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    margin: 8,
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  resgateInputView: {
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  labelValorAResgatar: {
    color: "#216fb0",
    fontSize: 16,
    fontWeight: "bold",
  },

  valorTotalAResgatar: {
    marginTop: 18,
    marginBottom: 18,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valorTotalAResgatarTitulo: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },

  botaoResgate: {
    marginRight: 0,
    marginLeft: 0,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fae128",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  textoBotaoResgate: {
    color: "#005aa5",
    textAlign: "center",
    padding: 10,
    fontWeight: 'bold'
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalResgateTitulo: {
    color: '#00375f',
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  botaoResgateModal: {
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "#fae128",
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#fff",
    
  },
  textoBotaoResgateModal: {
    color: "#005aa5",
    textAlign: "center",
    padding: 10,
    fontWeight: 'bold'
  },

});

export default styles;
