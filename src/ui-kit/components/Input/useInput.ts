import { useState } from "react";

export const useTextInput = (initialValue?: string | number) => {
  const [value, setValue] = useState(initialValue || "");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};
