import Link from 'next/link'

export type PrimaryButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string
  }
const PRIMARY_CLASSES =
  'text-center text-gray-50 text-sm bg-blue-500 leading-8 px-4 py-2 rounded-full shadow-md hover:shadow-xl active:shadow flex-shrink-0 text-ellipsis whitespace-nowrap disabled:opacity-50 transition-all duration-200 ease-in-out'

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { href, className } = props
  const classes = [PRIMARY_CLASSES, className].join(' ')

  if (href) {
    return (
      <Link href={href}>
        <button {...props} className={classes} />
      </Link>
    )
  }
  return <button {...props} className={classes} />
}

// export default PrimaryButton
