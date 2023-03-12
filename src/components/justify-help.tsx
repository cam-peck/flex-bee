import React from "react";

export default function JustifyHelp() {
  return (
    <>
      <ul className="font-white font-golos">
        <li>
          <span className="bold-bg font-consolas">
            flex-start
          </span>
          : Items align to the beginning of the container.
        </li>
        <li>
          <span className="bold-bg font-consolas">
            flex-end
          </span>
          : Items align to the end of the container.
        </li>
        <li>
          <span className="bold-bg font-consolas">
            center
          </span>
          : Items align to the center of the container.
          </li>
        <li>
          <span className="bold-bg font-consolas">
            space-between
          </span>
          : Items display with equal space between them.
          </li>
        <li>
          <span className="bold-bg font-consolas">
            space-around
          </span>
          : Items display with equal spacing around them.
          </li>
        <li>
          <span className="bold-bg font-consolas">
            space-evenly
          </span>
          : Items display with equal space between and around them.
          </li>
      </ul>
    </>
  )
}
