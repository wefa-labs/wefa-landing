import Link from 'next/link'

export type SecondaryButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string
  }
const SECONDARY_CLASSES =
  'text-center text-gray-900 text-sm bg-gray-50 leading-8 px-6 py-2 rounded-full shadow-md hover:shadow-xl active:shadow flex-shrink-0 text-ellipsis whitespace-nowrap disabled:opacity-50 transition-all duration-200 ease-in-out'

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { href, className } = props
  const classes = [SECONDARY_CLASSES, className].join(' ')

  if (href) {
    return (
      <Link href={href}>
        <button {...props} className={classes} />
      </Link>
    )
  }
  return <button {...props} className={classes} />
}

export default SecondaryButton
