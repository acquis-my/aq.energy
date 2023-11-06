import { type FieldError } from "react-hook-form";

interface FieldErrorProps {
  error?: FieldError;
}

export default function FieldError({ error }: FieldErrorProps) {
  const { message } = error ?? {};

  if (!message) return null;
  return <span className="text-sm text-red-700">{message}</span>;
}
