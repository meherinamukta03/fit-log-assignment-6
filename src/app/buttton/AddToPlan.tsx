"use client";

import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

import { IWorkout } from "@/app/types/WorkType";
import { FitLogContext } from "../context/Workout";

interface IAddToPlanProps {
    workout: IWorkout;
}

const AddToPlan = ({ workout }: IAddToPlanProps) => {
    const { plan, setPlan } = useContext(FitLogContext);

    const handleAdd = () => {
        const alreadyExists = plan.find(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            toast.error(`${workout.name} already in your plan`);
            return;
        }

        if (plan.length >= 5) {
            toast.error("You can only add 5 workouts to today's plan");
            return;
        }

        setPlan([...plan, workout]);

        toast.success(`${workout.name} added to today's plan`);
    };

    return (
        <button
            onClick={handleAdd}
            className="flex items-center gap-2 rounded-lg bg-[#ccff00] px-4 py-2 text-xs font-bold text-black hover:bg-lime-300"
        >
            <FaPlus size={10} />
            {`Add to today's plan`}
        </button>
    );
};

export default AddToPlan;