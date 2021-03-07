import React from 'react';
import Investimentos from '../../../../src/paginas/Investimentos/index';
import { render, fireEvent } from '@testing-library/react-native';
global.fetch = require("node-fetch");


describe('Investimentos', () => {
    it('Deve montar o cabeçalho da tela' , () => {
        const { getByText, getByTestId} = render(<Investimentos />);
        expect(getByText('INVESTIMENTOS')).toBeTruthy()
    })
});