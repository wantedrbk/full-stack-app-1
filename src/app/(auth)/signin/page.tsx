import AuthForm from '@/components/AuthForm'
import { FC } from 'react'

const SignIn: FC = () => {
	return (
		<div>
			<AuthForm mode='signin' />
		</div>
	)
}

export default SignIn
