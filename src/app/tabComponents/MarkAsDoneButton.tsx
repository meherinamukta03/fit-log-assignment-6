
"use client";

import { useContext } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";

import { FitLogContext } from "@/app/context/Workout";
import { IWorkout } from "@/app/types/WorkType";

interface IProps {
    workout: IWorkout;
}

const MarkAsDoneButton = ({ workout }: IProps) => {
    const { plan, setPlan } = useContext(FitLogContext);

    const handleDone = () => {
        setPlan(
            plan.filter((item) => item.id !== workout.id)
        );

        toast.success("Workout marked as done");
    };

    return (
        <button
            onClick={handleDone}
            className="flex w-full items-center justify-center gap-1 rounded-full bg-[#ccff00] px-3 py-1.5 text-[9px] font-medium text-black sm:w-auto"
        >
            <FaCheck size={9} />
            Mark as Done
        </button>
    );
};

export default MarkAsDoneButton;

