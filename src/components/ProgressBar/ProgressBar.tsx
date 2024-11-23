import { ProgressBarPropType } from "../../types/types";

export const ProgressBar = ({ progress, label }: ProgressBarPropType) => {
    return (
      <div className="flex items-center Orbitron space-x-2">
        <div className="text-white tracking-widest font-bold text-xs flex-shrink-0">
          {label}
        </div>
        <div className="flex-grow bg-muted rounded-full h-1">
          <div
            className="bg-primary h-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
