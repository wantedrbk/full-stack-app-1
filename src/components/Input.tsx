import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface Iinput {
	className?: string
}
const Input: FC<PropsWithChildren<Iinput>> = ({ className, ...props }) => {
	return (
		<input
			className={clsx(
				'border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full',
				className
			)}
			{...props}
		/>
	)
}

export default Input
