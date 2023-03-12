import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IGlassPane {
	className?: string
}

const GlassPane: FC<PropsWithChildren<IGlassPane>> = ({
	children,
	className
}) => {
	return (
		<div
			className={clsx(
				'glass rounded-2xl border-solid border-2 border-gray-200',
				className
			)}
		>
			{children}
		</div>
	)
}

export default GlassPane
