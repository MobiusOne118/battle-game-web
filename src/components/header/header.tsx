type HeaderProps = {
  children: React.ReactNode,
  mainHeader?: boolean
}

export default function Header({ children, mainHeader = false }: HeaderProps) {
  if(mainHeader) {
    return (
      <h1 className="flex items-center font-bold">
        {children}
      </h1>
    )
  }
  return (
    <h2 className="flex items-center font-bold">
        {children}
    </h2>
  )
}

