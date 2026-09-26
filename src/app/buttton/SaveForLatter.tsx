
"use client";

import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import toast from "react-hot-toast";

import { IWorkout } from "@/app/types/WorkType";
import { FitLogContext } from "../context/Workout";

interface ISaveForLaterProps {
    workout: IWorkout;
}

const SaveForLater = ({ workout }: ISaveForLaterProps) => {
    const { saved, setSaved } = useContext(FitLogContext);

    const handleSave = () => {
        const alreadyExists = saved.find(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            toast.error(`${workout.name} already saved`);
            return;
        }

        setSaved([...saved, workout]);

        toast.success(`${workout.name} saved for later`);
    };

    return (
        <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg border border-gray-50 px-4 py-2 text-xs text-gray-300 transition hover:text-white"
        >
            <FaRegBookmark size={13} />

            <span>Save for later</span>
        </button>
    );
};

export default SaveForLater;
