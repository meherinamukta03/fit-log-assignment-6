"use client";
import { FaRegBookmark } from "react-icons/fa";
import React, { useContext } from "react";

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
            return;
        }

        setSaved([...saved, workout]);
    };

    return (
        <button
            onClick={handleSave}
            className=" flex rounded-lg px-4 py-2 text-xs border  border-gray-50 text-gray-300 hover:text-white">
            <FaRegBookmark />
              <span> Saved for Later</span>
        </button>
    );
};

export default SaveForLater;