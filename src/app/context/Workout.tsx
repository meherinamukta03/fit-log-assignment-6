"use client";

import { createContext, useState } from "react";
import { IWorkout } from "@/app/types/WorkType";

interface IFitLogContext {
    plan: IWorkout[];
    setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    saved: IWorkout[];
    setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;

}

//const FitLogContext = createContext<IFitLogContext | undefined>(undefined);

export const FitLogContext = createContext<IFitLogContext>(

    {

        plan: [],
        setPlan: () => { },

        saved: [],

        setSaved: () => { }

    }
)


export const FitLogProvider = ({ children, }: { children: React.ReactNode; }) => {
    const [plan, setPlan] = useState<IWorkout[]>([]);
    const [saved, setSaved] = useState<IWorkout[]>([]);


    const sharedata={
     plan,
    setPlan,
    saved,
    setSaved

    }

    return (
        <FitLogContext.Provider value={sharedata}>{children}</FitLogContext.Provider>
    );
}