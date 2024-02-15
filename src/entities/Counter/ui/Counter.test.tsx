import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
    const initialState = { initialState: { counter: { value: 10 } } };
    test('Test render', () => {
        componentRender(<Counter />, initialState);
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', async () => {
        componentRender(<Counter />, initialState);
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', async () => {
        componentRender(<Counter />, initialState);
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
