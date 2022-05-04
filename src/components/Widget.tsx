import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState<boolean>(false);

  function active(): void {
    setIsWidgetOpen(true);
  }

  return (
    <div className="absolute bottom-5 right-5">
      <h1 className={isWidgetOpen ? "text-red-600" : "text-white"}>OIOI</h1>
      <button
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
        onClick={() => active()}
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          FeedBack
        </span>
      </button>
    </div>
  );
}