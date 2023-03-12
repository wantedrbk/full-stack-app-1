import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface ICard {
	className?: string
}

const Card: FC<PropsWithChildren<ICard>> = ({ children, className }) => {
	return (
		<div
			className={clsx(
				'rounded-3xl px-10 py-4 drop-shadow-xl bg-white',
				className
			)}
		>
			{children}
		</div>
	)
}

export default Card
