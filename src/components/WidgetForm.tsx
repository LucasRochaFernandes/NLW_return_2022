import { CloseButton } from "./CloseButton";

const feedBackTypes = {
  BUG: {
    title: "Problema",
  },
  IDEIA: {
    title: "Ideia",
  },
  OTHER: {
    title: "Outro",
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-9 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>

      <footer className="text-xs text-neutral-400">
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