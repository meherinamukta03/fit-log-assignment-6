import React from 'react';
import ExercisesCard from '../component/card/exercisesCard';
import MyPlanTab from '../buttton/MyPlanTab';

const MyPlanPage = () => {
    return (
        <div className='px-8'>
            <div>
                <h2 className='text-4xl font-bold display-font-Oswald text-white sm:text-3xl'>My Plan</h2>
                <p className=' mt-3 max-w-[430px] text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6'>Cap of five lifts for today.Finish them ,then load more.</p>



            </div>


<ExercisesCard></ExercisesCard>

<MyPlanTab></MyPlanTab>
        </div>
    );
};

export default MyPlanPage;