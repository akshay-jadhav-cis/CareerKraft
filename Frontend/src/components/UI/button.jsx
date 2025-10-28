import * as React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Button = React.forwardRef(
  ({ className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center font-medium px-4 py-2 rounded-lg shadow-sm transition hover:opacity-90 bg-blue-600 text-white",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
