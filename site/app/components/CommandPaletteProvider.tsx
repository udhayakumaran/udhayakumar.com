"use client";

import { createContext, useState, ReactNode } from "react";

interface CommandPaletteContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const CommandPaletteContext = createContext<CommandPaletteContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

interface Props {
  children: ReactNode;
}

export default function CommandPaletteProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <CommandPaletteContext.Provider value={{ isOpen, open, close }}>
      {children}
    </CommandPaletteContext.Provider>
  );
}
