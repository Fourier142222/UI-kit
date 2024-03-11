import React from "react";
import {Input} from './Input'
import { render, screen } from "@testing-library/react";
import { getClassListArrFromString } from "../../utils/utils";
import '@testing-library/jest-dom'

describe('Input', () => {
    it('should contain base class', () => {
        render(<Input value={'Test'} type="text" testId="input"/>);
        const inputElement = screen.getByTestId('input');
        expect(inputElement).toBeInTheDocument();
        expect(getClassListArrFromString(inputElement.className)).toContain('input')
    })

    it('should contain readonly class', () => {
        render(<Input value={'Test'} type="text" testId="input" readonly />);
        const inputElement = screen.getByTestId('input');
        expect(inputElement).toBeInTheDocument();
        expect(getClassListArrFromString(inputElement.className)).toContain('readonly');
    })
})