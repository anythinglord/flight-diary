import React from "react"
import "./styles.css"

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Dialog = ({ setOpen }: Props) => {

  const handleClick = () => setOpen(prevState => !prevState)

  return (
    <div className="dialog">
      <div className="card w-30">
        <div className="flex-row">
          <h3>Add New Entry</h3>
          <button onClick={handleClick}>&times;</button>
        </div>
        <input type="date"></input>
        <input type="text" placeholder="comment"></input>
        <button>Add Entry</button>
      </div>
    </div>
  )
}