import AddToPlan from '@/app/buttton/AddToPlan';
import SaveForLater from '@/app/buttton/SaveForLatter';
import { IWorkout } from '@/app/types/WorkType';
import Image from 'next/image';
import React from 'react';


interface IWorkOutDetailsProps {

    params: Promise<{
        workId: string
    }>
}


const getWork = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    return res.json()


}

const WorkOutDetails = async ({ params }: IWorkOutDetailsProps) => {

    const { workId } = await params
    const workData = await getWork()
    const work = workData.find((work: IWorkout) => String(work.id) == String(workId)) as IWorkout

    return (
        <section className=" bg-[#0b0c0f] px-4 py-8">
            <div className="mx-auto max-w-5xl">

                {/* Main Card */}
                <div className="grid gap-6  p-5 md:grid-cols-2">

                    {/* Image */}
                    <div>
                        <Image
                            src={work.image}
                            alt={work.name}
                            width={800}
                            height={900}
                            className="h-72 w-full rounded-lg object-cover sm:h-96 md:h-[550px]"
                        />
                    </div>


                    <div>

                        <h1 className="text-2xl font-bold uppercase text-white">
                            {work.name}
                        </h1>


                        <p className="mt-2 text-sm text-gray-400">
                            {work.description}
                        </p>

                        <div className="mt-3 flex gap-2">
                            {work.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-semibold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <div className="mt-5 rounded-lg border border-[#25272c] bg-[#16181d]">


                            <div className="flex justify-between border-b border-[#25272c] px-4 py-3 text-xs">
                                <span className="text-gray-500">
                                    EQUIPMENT
                                </span>

                                <span className="text-white">
                                    {work.equipment}
                                </span>
                            </div>


                            <div className="flex justify-between border-b border-[#25272c] px-4 py-3 text-xs">
                                <span className="text-gray-500">
                                    DIFFICULTY
                                </span>

                                <span className="text-white">
                                    {work.difficulty}
                                </span>
                            </div>


                            <div className="flex justify-between border-b border-[#25272c] px-4 py-3 text-xs">
                                <span className="text-gray-500">
                                    SETS
                                </span>

                                <span className="text-white">
                                    {work.sets}
                                </span>
                            </div>


                            <div className="flex justify-between border-b border-[#25272c] px-4 py-3 text-xs">
                                <span className="text-gray-500">
                                    REPS
                                </span>

                                <span className="text-white">
                                    {work.reps}
                                </span>
                            </div>


                            <div className="flex justify-between border-b border-[#25272c] px-4 py-3 text-xs">
                                <span className="text-gray-500">
                                    DURATION
                                </span>

                                <span className="text-white">
                                    {work.duration} min
                                </span>
                            </div>


                            <div className="flex justify-between border-b border-[#25272c] px-4 py-3 text-xs">
                                <span className="text-gray-500">
                                    CALORIES
                                </span>

                                <span className="text-white">
                                    {work.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3 text-xs">
                                <span className="text-gray-500">
                                    RATING
                                </span>

                                <span className="text-white">
                                    {work.rating}
                                </span>
                            </div>

                        </div>

                        <div className="mt-5">

                            <h2 className="text-sm font-bold uppercase text-white">
                                Instructions
                            </h2>

                            <div className="mt-2 space-y-2">
                                {work.instructions.map((instruction, index) => (
                                    <p
                                        key={index}
                                        className="text-xs text-gray-400"
                                    >
                                        {index + 1}. {instruction}
                                    </p>
                                ))}
                            </div>

                        </div>


                        <div className="mt-5 flex gap-3">


                            <AddToPlan workout={work} />
                            <SaveForLater workout={work} />
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default WorkOutDetails;