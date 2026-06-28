import React, { useState } from 'react'

interface FilterProps {
    filterStatus :string,
    priorityFilter :string,
    onFilterStatusChange : (status:string) => void;
    onPriorityChanges : (priority : string) => void;
}

const Filter = ({filterStatus,priorityFilter,onFilterStatusChange,onPriorityChanges}: FilterProps) => {

  return (
    <>
    <form action="">
        <option value="All">All</option>
        <option value="open">open</option>
        <option value="In progress">In progress</option>
        <option value="Resolved">Resolved</option>

    </form>
    </>
  )
}

export default Filter;