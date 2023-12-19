import { fireEvent, screen } from '@testing-library/react';
// eslint-disable-next-line max-len
import { renderwithTranslation } from 'shared/lib/tests/renderwithTranslation/renderwithTranslation';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('Test render', () => {
        renderwithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        renderwithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
