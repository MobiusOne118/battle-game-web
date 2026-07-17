type FooterProps = {
  children:  React.ReactNode
}

export default function Footer({ children }: FooterProps) {
  return (
    <div className="flex py-10">
      {children}
    </div>
  )
}