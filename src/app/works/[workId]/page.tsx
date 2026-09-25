import { IWorkout } from '@/app/types/WorkType';
import React from 'react';


interface IWorkOutDetailsProps{

params: Promise<{
    workId:string
}>
}


const getWork = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data

}

const WorkOutDetails = async({params}:IWorkOutDetailsProps) => {

    const { workId }= await params
const workData=await getWork()
const work=workData.find((work:IWorkout)=>String(work.id)==String(workId)) as IWorkout

    return (
        <div>
            from work details page[workId]
        </div>
    );
};

export default  WorkOutDetails;