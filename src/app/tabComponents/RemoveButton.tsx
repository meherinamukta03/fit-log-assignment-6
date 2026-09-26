"use client";

import { useContext } from "react";
import { FaXmark } from "react-icons/fa6";

import { FitLogContext } from "@/app/context/Workout";

interface IProps {
    id: number;
    type: "plan" | "saved";
}

const RemoveButton = ({ id, type }: IProps) => {

    const {
        plan,
        setPlan,
        saved,
        setSaved
    } = useContext(FitLogContext);

    const handleRemove = () => {

        if (type === "plan") {
            setPlan(plan.filter((item) => item.id !== id));
        }

        if (type === "saved") {
            setSaved(saved.filter((item) => item.id !== id));
        }

    };

    return (
        <button
            onClick={handleRemove}
            className="text-gray-500 hover:text-white"
        >
            <FaXmark size={12} />
        </button>
    );
};

export default RemoveButton;