import { fireEvent, screen } from '@testing-library/react';
// eslint-disable-next-line max-len
import { renderwithTranslation } from 'shared/lib/tests/renderwithTranslation/renderwithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
