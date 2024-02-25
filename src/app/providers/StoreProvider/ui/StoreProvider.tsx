import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { NavigateOptions, To, useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const navigate = useNavigate();
    const store = createReduxStore(initialState, navigate);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
