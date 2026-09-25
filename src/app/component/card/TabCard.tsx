import { IWorkout } from '@/app/types/WorkType';
import React from 'react';

interface ITabCardProps {
    work: IWorkout;
}

const TabCard = ({ work }: ITabCardProps) => {
    return (
        <div>
            {work.name}
        </div>
    );
};

export default TabCard;