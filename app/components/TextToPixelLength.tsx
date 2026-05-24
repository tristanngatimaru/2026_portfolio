'use client';

import { useEffect, useRef, useState } from "react";

export default function TextToPixelLength() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  const getTextWidthInPixels = (ref: HTMLSpanElement) =>
    ref.getBoundingClientRect().width;

  useEffect(() => {
    setTextWidth(getTextWidthInPixels(spanRef.current!));
  }, [spanRef]);

  return (
    <div className="textToPixelLength">
      <span
        ref={spanRef}
        contentEditable
        suppressContentEditableWarning
        onInput={() => setTextWidth(getTextWidthInPixels(spanRef.current!))}
      >
        wohh
      </span>
      <hr />
      {`textWidth: ${Math.floor(textWidth)}px`}
    </div>
  );
}