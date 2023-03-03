import { useState } from "react";
import MinusIcon from "../icons/minus";
import PlusIcon from "../icons/plus";

function LifeCounter({ initialLife }) {
  const [life, setLife] = useState(initialLife);

  return (
    <div className="cell">
      <div className="half left" onClick={() => setLife(life + 1)}>
        <PlusIcon />
      </div>
      <div
        className="half right"
        onClick={() => setLife(life >= 1 ? life - 1 : life)}
      >
        <MinusIcon />
      </div>
      <div className="label">{life}</div>
    </div>
  );
}

export default LifeCounter;
