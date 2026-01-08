import classNames from "classnames";
import { useRouter } from "next/navigation";

export default function Button({children, size='medium', variation='primary', disabled=false, onClick, type='button', href}){
    const sizeClasses = {
    small: "text-sm px-3 py-1 font-bold uppercase",
    medium: "text-base px-5 py-2 font-bold",
    large: "text-lg px-7 py-3 font-bold",
  };

  const variationClasses = {
    primary: "text-primary-0 bg-primary-950 hover:bg-primary-800 gap-3",
    secondary: "text-primary-950 bg-white border border hover:border-primary-950 gap-3",
    danger: "text-red-100 bg-red-700 hover:bg-red-800 gap-3",
  };

  const router = useRouter();

  const baseClasses = "font-black border mt-6 rounded-xl shadow-sm transition-all disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed";
  const handleClick = (e) => {
    if (disabled) return;
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={classNames(
        baseClasses,
        sizeClasses[size],
        variationClasses[variation]
      )}
      href = {href}
    >
      {children}
    </button>
  );
}