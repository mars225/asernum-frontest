import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-red-600 overflow-hidden">
      {/* Oiseau en arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/bird.svg"
          alt="background"
          className="w-[4000px] max-h-screen opacity-40 transform translate-x-32"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
