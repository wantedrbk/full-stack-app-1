import GlassPane from '@/components/GlassPane'
import '@/styles/global.scss'
import type { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Welcome to Next.js',
	icons: '/favicon.ico'
}

const AuthRooLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en'>
			<head />
			<body className='h-screen w-screen rainbow-mesh p-6'>
				<GlassPane className='w-full h-full flex items-center justify-center'>
					{children}
				</GlassPane>
			</body>
		</html>
	)
}

export default AuthRooLayout
