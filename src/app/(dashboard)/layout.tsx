import GlassPane from '@/components/GlassPane'
import Sidebar from '@/components/Sidebar'
import '@/styles/global.scss'
import { Metadata } from 'next'

import { FC, PropsWithChildren } from 'react'
export const metadata: Metadata = {
	title: 'Home',
	description: 'Welcome to Next.js',
	icons: '/favicon.ico'
}
const DashboardRootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en'>
			<head />
			<body className='h-screen w-screen candy-mesh p-6'>
				<GlassPane className='w-full h-full flex items-center'>
					<Sidebar />
					{children}
				</GlassPane>
				<div id='modal'></div>
			</body>
		</html>
	)
}

export default DashboardRootLayout
