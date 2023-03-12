import React from "react";

export default function AlignHelp() {
  return (
    <>
      <ul className="font-white font-golos">
        <li>
          <span className="bold-bg font-consolas">
            flex-start
          </span>
          : Items align to the top of the container.
        </li>
        <li>
          <span className="bold-bg font-consolas">
            flex-end
          </span>
          : Items align to the bottom of the container.
        </li>
        <li>
          <span className="bold-bg font-consolas">
            center
          </span>
          : Items align to the center of the container.
        </li>
        <li>
          <span className="bold-bg font-consolas">
            baseline
          </span>
          : Items display at the baseline of the container.
        </li>
        <li>
          <span className="bold-bg font-consolas">
            stretch
          </span>
          : Items are stretched to fit the container.
        </li>
      </ul>
    </>
  )
}
