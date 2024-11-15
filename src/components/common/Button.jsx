export default function Button({ children, variant = "primary", ...props }) {
  const baseStyles =
    "px-4 py-2 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400",
    success: "bg-green-500 hover:bg-green-600 focus:ring-green-400",
    danger: "bg-red-500 hover:bg-red-600 focus:ring-red-400",
    warning: "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400",
    info: "bg-teal-500 hover:bg-teal-600 focus:ring-teal-400",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
}
