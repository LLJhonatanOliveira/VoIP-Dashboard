import RamalCard from './RamalCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RamalCard> = {
    title: 'Atoms/RamalCard',
    component: RamalCard,
};

export default meta;

type RamalCardProps = {
    extensionNumber: string;
    operatorName: string;
    status: 'online' | 'offline' | 'on-call';
};

export const Online: StoryObj<RamalCardProps> = {
    args: {
        extensionNumber: '101',
        operatorName: 'Alice',
        status: 'online',
    },
};

export const Offline: StoryObj<RamalCardProps> = {
    args: {
        extensionNumber: '102',
        operatorName: 'Bob',
        status: 'offline',
    },
};

export const OnCall: StoryObj<RamalCardProps> = {
    args: {
        extensionNumber: '103',
        operatorName: 'Charlie',
        status: 'on-call',
    },
};
