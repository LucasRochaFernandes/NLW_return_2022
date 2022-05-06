import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";

const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEIA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OUTRO: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem",
    },
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-9 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header className="-mb-2">
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-7 gap-3 w-full">
        {Object.entries(feedBackTypes).map(([key, value]) => {
          return (
            <button className="bg-zinc-800 rounded-xl flex flex-1 w-24 flex-col items-center px-2 py-5 gap-3 hover:border-slate-400 transition-all border-2 border-transparent focus:border-slate-400" key={key}>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{key}</span>
            </button>
          );
        })}
      </div>

      <footer className="text-xs text-neutral-400 -mt-2">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
