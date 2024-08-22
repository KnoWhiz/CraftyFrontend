import React, { useEffect, useState } from "react";
import Parameter from "./Parameter";

interface ParametersProps {
  onValidSelect: () => void;
  onInvalidSelect: () => void;
}

const Parameters: React.FC<ParametersProps> = ({
  onValidSelect,
  onInvalidSelect,
}) => {
  const [noteLength, setNoteLength] = useState<string>("500");
  const [slideNumber, setSlideNumber] = useState<string>("30");

  useEffect(() => {
    // Convert to numbers
    const numericNoteLength = Number(noteLength);
    const numericSlideNumber = Number(slideNumber);

    // Check if noteLength is a valid number and within the range
    if (
      !isNaN(numericNoteLength) &&
      numericNoteLength >= 500 &&
      numericNoteLength <= 1000 &&
      !isNaN(numericSlideNumber) &&
      numericSlideNumber >= 30 &&
      numericSlideNumber <= 100
    ) {
      onValidSelect();
    } else {
      onInvalidSelect();
    }
  }, [noteLength, onInvalidSelect, onValidSelect, slideNumber]);

  return (
    <div className="flex flex-col justify-start items-start gap-y-4 max-w-[50%]">
      <h1 className="text-3xl font-semibold pb-4">Parameters:</h1>
      <div className="flex flex-col justify-start items-start gap-y-10 text-base leading-tight">
        <Parameter
          title="Temperature"
          desc="Creativity of the generated content. Default value is 0, max value is 10"
          isDropdown
        />
        <Parameter
          title="Maximum note length"
          desc="Maximum number of words for note expansion. Default value is 500, max value is 1000"
          isDropdown={false}
          getInput={(e) => setNoteLength(e.target.value)}
          defaultValue={500}
        />
        <Parameter
          title="Number of Slides"
          desc="Sets the number of pages to generate for the slidedeck. Default value is 30, max value is 100"
          isDropdown={false}
          getInput={(e) => setSlideNumber(e.target.value)}
          defaultValue={30}
        />
      </div>
    </div>
  );
};

export default Parameters;
