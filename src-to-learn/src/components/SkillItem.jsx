import React, { useEffect, useState } from 'react';

function SkillItem({ skillName, skillLevel ,name }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < skillLevel ? prevProgress + 1 : prevProgress));
    }, 30);

    return () => clearInterval(interval);
  }, [skillLevel]);

  return (
    <div className="mb-3">
      <h6>{skillName} <i className={name}></i></h6>
      <div className="progress">
        <div className="progress-bar  progress-bar-striped progress-bar-animated " role="progressbar" style={{ width: `${progress}%`,color:"white" }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
          {`${progress}%`}
        </div>
      </div>
    </div>
  );
}

export default SkillItem;
