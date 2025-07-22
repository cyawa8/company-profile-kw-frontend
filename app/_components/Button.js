import classNames from "classnames";

export default function Button({children, size='medium', variation='primary', disabled=false, onClick, type='button'}){
    const sizeClasses = {
    small: "text-sm px-3 py-1 font-bold uppercase",
    medium: "text-base px-5 py-2 font-bold",
    large: "text-lg px-7 py-3 font-bold",
  };

  const variationClasses = {
    primary: "text-primary-0 bg-primary-950 hover:bg-primary-800",
    secondary: "text-primary-950 bg-white border border hover:border-primary-950",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  const baseClasses = "font-black border mt-6 rounded-xl shadow-sm transition-all disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed";
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        baseClasses,
        sizeClasses[size],
        variationClasses[variation]
      )}
    >
      {children}
    </button>
  );
}