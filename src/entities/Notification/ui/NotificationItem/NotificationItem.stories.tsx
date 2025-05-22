import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

// Базовое уведомление без ссылки
export const BasicNotification = Template.bind({});
BasicNotification.args = {
    item: {
        id: '1',
        title: 'Новое сообщение',
        description: 'У вас новое сообщение в чате',
    } as Notification,
};

// Уведомление со ссылкой
export const WithLink = Template.bind({});
WithLink.args = {
    item: {
        id: '2',
        title: 'Обновление системы',
        description: 'Доступно новое обновление платформы',
        href: 'https://example.com/update',
    } as Notification,
};

// Длинный текст
export const LongText = Template.bind({});
LongText.args = {
    item: {
        id: '3',
        title: 'Очень длинный заголовок уведомления, который не должен ломать верстку',
        description:
            'Очень длинное описание уведомления, которое должно корректно переноситься и не ломать отображение компонента. Текст может занимать несколько строк.',
    } as Notification,
};

// Специальные символы
export const SpecialCharacters = Template.bind({});
SpecialCharacters.args = {
    item: {
        id: '4',
        title: 'Важное уведомление!',
        description:
            'Пожалуйста, обновите ваш пароль (используйте A-Z, a-z, 0-9)',
    } as Notification,
};
