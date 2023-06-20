import { createContext, useContext, useState } from "react";

interface SoundEnabledContextInterface {
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const SoundEnabledContext = createContext<SoundEnabledContextInterface>({
  soundEnabled: true,
  setSoundEnabled: () => { return; },
});

export function useSoundEnabledContext() {
  return useContext(SoundEnabledContext);
}

export function SoundEnabledProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}