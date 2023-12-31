import { IconType } from "react-icons";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "flex items-center gap-3 text-black rounded-lg font-semibold shadow-lg transition outline-none flex-row justify-center w-fit disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        default: "bg-gray-500 border-gray-500 text-black shadow-gray-500/20",
        primary: "bg-blue-700 border-blue-400 text-blue-600 shadow-blue-500/20",
        secondary:
          "bg-slate-700 border-slate-400 text-slate-700 shadow-slate-300/50",
        danger: "bg-rose-700 border-rose-400 text-rose-600 shadow-rose-300/50",
      },
      variant: {
        default:
          "bg-opacity-80 hover:enabled:bg-opacity-100 focus:enabled:bg-opacity-100 text-white",
        outline:
          "bg-opacity-0 border-[1px] hover:enabled:bg-opacity-20 focus:enabled:bg-opacity-20",
        text: "border-none outline-none shadow-none hover:enabled:bg-opacity-20 focus:enabled:bg-opacity-20 bg-opacity-0",
      },
      size: {
        sm: "py-1 px-3 text-sm",
        md: "py-2 px-4 text-base",
        lg: "py-3 px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      intent: "default",
    },
  }
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  disableShadow?: boolean;
  startIcon?: IconType;
  endIcon?: IconType;
}

function Button({
  className,
  children,
  variant,
  intent,
  size,
  color,
  disabled = false,
  disableShadow,
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...props
}: ButtonProps) {
  return (
    <button
        type="button"
        className={cn(
            buttonVariants({
                variant,
                size,
                intent,
                className,
            }),
            {
                "flex-row-reverse": EndIcon,
                "shadow-none": disableShadow,
            }
        )}
        {...props}
        disabled={disabled}
    >
      {StartIcon ? <StartIcon /> : EndIcon ? <EndIcon /> : null}
      {children}
    </button>
  );
}

export default Button;