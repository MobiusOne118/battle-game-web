type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export default function Button({ children, className = "", ...rest }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md px-4 py-2 font-medium bg-foreground text-background hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
