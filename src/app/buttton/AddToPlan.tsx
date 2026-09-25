"use client";

import React, { useContext } from "react";

import { IWorkout } from "@/app/types/WorkType";
import { FitLogContext } from "../context/Workout";
import toast from "react-hot-toast";

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
      toast.error(`${workout.name} already in your plan`)
      return;
    }

    setPlan([...plan, workout]);

    toast.success(`${workout.name} added to today,s plan`);
  };

  return (
    <button
      onClick={handleAdd}
      className="rounded-lg bg-[#ccff00] px-4 py-2 text-xs font-bold text-black hover:bg-lime-300"
    >
     {`Add to today's plan`}
    </button>
  );
};

export default AddToPlan;