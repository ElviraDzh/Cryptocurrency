import React from "react";

function SinglePageBtn(props) {
  return (
    <div className="pb-10">
      <span
        className={
          props.selected
            ? "md:py-2 md:px-3 py-1 px-3 border rounded-lg border-[rgb(250,204,20)] bg-[rgb(250,204,20)] text-black font-bold text-[0.8em] md:text-sm"
            : "md:py-2 md:px-3 py-1 px-3 border rounded-lg border-[rgb(250,204,20)] text-[0.8em] md:text-sm"
        }
        onClick={() => props.onClick()}
      >
        {props.label}
      </span>
    </div>
  );
}

export default SinglePageBtn;
