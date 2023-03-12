import { validateJWT } from '@/lib/auth'
import { db } from '@/lib/db'

export default async function handler(req, res) {
	const user = await validateJWT(req.cookies[process.env.COOKIE_NAME])

	await db.project.create({
		data: {
			name: req.body.name,
			ownerId: user.id
		}
	})
	// try {
	// 	// This should be the actual path not a rewritten path
	// 	// e.g. for "/blog/[slug]" this should be "/blog/post-1"
	// 	await res.revalidate('/home')
	// 	return res.json({ data: { message: 'ok', revalidated: true } })
	// } catch (err) {
	// 	// If there was an error, Next.js will continue
	// 	// to show the last successfully generated page
	// 	return res.status(500).send('Error revalidating')
	// }
	res.json({ data: { message: 'ok' } })
}
