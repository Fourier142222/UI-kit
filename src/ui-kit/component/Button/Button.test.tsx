import React from 'react';
import { render, screen } from "@testing-library/react";
import { Button, ButtonView, ButtonSize } from './Button';
import { getClassListArrFromString } from '../../utils/utils';

describe('Button', () => {
    it('should contain base class', () => {
        render(<Button>Test</Button>);
        const buttonElement = screen.getByTestId('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Test');
        expect(getClassListArrFromString(buttonElement.className)).toContain('button')
        expect(getClassListArrFromString(buttonElement.className)).toContain('clear')
        expect(getClassListArrFromString(buttonElement.className)).toContain('size_m')
    })

    it('should contain disabled class', () => {
        render(<Button disabled>Test</Button>);
        const buttonElement = screen.getByTestId('button');
        expect(buttonElement).toBeInTheDocument();
        expect(getClassListArrFromString(buttonElement.className)).toContain('disabled')
    })

    it('should contain class for background btn', () => {
        render(<Button view={ButtonView.BACKGROUND}>Test</Button>);
        const buttonElement = screen.getByTestId('button');
        expect(buttonElement).toBeInTheDocument();
        expect(getClassListArrFromString(buttonElement.className)).toContain('background')
    })


    it('should contain class for outline btn', () => {
        render(<Button  view={ButtonView.OUTLINE}>Test</Button>);
        const buttonElement = screen.getByTestId('button');
        expect(buttonElement).toBeInTheDocument();
        expect(getClassListArrFromString(buttonElement.className)).toContain('outline')
    })

    it('should contain class for button with size l', () => {
        render(<Button size={ButtonSize.L}>Test</Button>);
        const buttonElement = screen.getByTestId('button');
        expect(buttonElement).toBeInTheDocument();
        expect(getClassListArrFromString(buttonElement.className)).toContain('size_l')
    })

    it('should contain class for button with size xl', () => {
        render(<Button size={ButtonSize.XL}>Test</Button>);
        const buttonElement = screen.getByTestId('button');
        expect(buttonElement).toBeInTheDocument();
        expect(getClassListArrFromString(buttonElement.className)).toContain('size_xl')
    })
})