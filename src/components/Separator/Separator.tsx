import { HTMLAttributes } from "react";
import styles from "./Separator.module.css";

export default function Separator({
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`w-full bg-gray-400 opacity-25 rounded-lg ${styles.sep} ${className}`}
    />
  );
}
