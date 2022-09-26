interface HeaderInterface {
  logo: string
  links?: { title: string; link: string }[]
}

export const Header: React.FC<HeaderInterface> = ({ logo }) => {
  return (
    <header className="flex px-6 py-3">
      <h1 className='text-6xl'>{logo}</h1>
    </header>
  )
}
