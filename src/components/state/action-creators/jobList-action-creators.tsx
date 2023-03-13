import { JobListReducerAction } from "../actions";
import { JOB_ACTION_TYPE } from "../actions-types";
import { Dispatch } from "redux";


export const switchJob = (input:number) =>{
    return (dispatch : Dispatch<JobListReducerAction>) => {
        dispatch({
            type: JOB_ACTION_TYPE.SWITCH_TAB,
            payload: input
    })
    }
}