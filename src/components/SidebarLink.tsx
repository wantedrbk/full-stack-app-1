'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { Calendar, Grid, Settings, User } from 'react-feather'

const icons = { Settings, User, Grid, Calendar }

const SidebarLink: FC = ({ link }) => {
	const pathName = usePathname()
	let isActive = false

	if (pathName === link.link) {
		isActive = true
	}

	const Icon = icons[link.icon]
	return (
		<Link href={link.link} className='w-full flex justify-center items-center'>
			<Icon
				size={40}
				className={clsx(
					'stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out',
					isActive && 'stroke-violet-600'
				)}
			/>
		</Link>
	)
}

export default SidebarLink
