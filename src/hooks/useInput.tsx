import { useState, ChangeEvent } from "react";

interface UseInputReturn {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function useInput(initialValue: string): UseInputReturn {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}