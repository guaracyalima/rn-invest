import React from 'react';
import Resgate from '../../../../src/paginas/Resgate/index';
import { render, fireEvent } from '@testing-library/react-native';


describe('Resgate', () => {

    it('Deve confirmar existencia e funcionamento do layout base informativo' , () => {
        const { getByText, getByTestId} = render(<Resgate />);
        expect(getByText('DADOS DO INVESTIMENTO')).toBeTruthy()
    })
});