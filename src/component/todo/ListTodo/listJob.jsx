import React from "react";
import JobItem from "../ItemTodo/jobItem";
import { deleteJob } from "../../../reducer/actions";
import style from './style.module.css'

const ListJob = (props) => {
  return <>
     <ul className={style.bg}>
        {props.jobs.map((item, index) => (
            <JobItem key={index} data={item} onDeleteItem={() => props.dispatch(deleteJob(index))} />
        ))}
  </ul>
  </>
 
};

export default ListJob;
