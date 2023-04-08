import React from "react";

function Form({ value, onChange }: Props) {
  return <input type="text" placeholder="Find Github User" className="border border-zinc-100 p-[20px] w-full rounded-[8px]" value={value} onChange={onChange} />;
}

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default Form;
