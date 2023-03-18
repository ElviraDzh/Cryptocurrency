import React from "react";

function SinglePageBtn(props) {
  return (
    <div>
      <span
        className={
          props.selected
            ? "py-2 px-3 border rounded-lg border-[rgb(250,204,20)] bg-[rgb(250,204,20)] text-black font-bold"
            : "py-2 px-3 border rounded-lg border-[rgb(250,204,20)]"
        }
        onClick={() => props.onClick()}
      >
        {props.label}
      </span>
    </div>
  );
}

export default SinglePageBtn;
