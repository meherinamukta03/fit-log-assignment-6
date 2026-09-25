import React from 'react';
import WorkCard from '../shared/WorkCard';
import { IWorkout } from '@/app/types/WorkType';

const getWork = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data

}


const Library = async () => {



    const works = await getWork()


    return (
        <section className="px-4 py-8 sm:px-5 md:px-6 md:py-10">

            <div className="mb-6 md:mb-10">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    THE LIBRARY
                </h1>

                <p className="mt-1 text-sm text-gray-400 sm:text-base">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">


                {works.map((work: IWorkout) => <WorkCard key={work.id} work={work}></WorkCard>)}



            </div>
            




        </section>
    );
};

export default Library;