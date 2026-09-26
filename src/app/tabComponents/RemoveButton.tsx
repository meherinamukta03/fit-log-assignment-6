
"use client";

import { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import toast from "react-hot-toast";

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
        setSaved,
    } = useContext(FitLogContext);

    const handleRemove = () => {
        if (type === "plan") {
            setPlan(plan.filter((item) => item.id !== id));
            toast.success("Removed from today's plan");
        }

        if (type === "saved") {
            setSaved(saved.filter((item) => item.id !== id));
            toast.success("Removed from saved");
        }
    };

    return (
        <button
            onClick={handleRemove}
            className="flex h-8 w-full shrink-0 items-center justify-center rounded-md border border-[#25272c] text-gray-500 hover:text-white sm:w-8"
            aria-label="Remove workout"
        >
            <FaXmark size={12} />
        </button>
    );
};

export default RemoveButton;
