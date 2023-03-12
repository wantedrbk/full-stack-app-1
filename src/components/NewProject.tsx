'use client'
import { createNewProject } from '@/lib/api'

import { useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'
import Modal from 'react-modal'
import Button from './buttons//Button'
import Input from './Input'

Modal.setAppElement('#modal')

const NewProject = () => {
	const router = useRouter()
	const [modalIsOpen, setIsOpen] = useState(false)
	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)
	const [name, setName] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		e.preventDefault()
		await createNewProject(name)
		await startTransition(() => {
			// Refresh the current route and fetch new data from the server without
			// losing client-side browser or React state.
			router.refresh()
		})
		closeModal()
	}

	return (
		<div className='px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center'>
			<Button onClick={() => openModal()}>+ New Project</Button>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				overlayClassName='bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen'
				className='w-3/4 bg-white rounded-xl p-8'
			>
				<h1 className='text-3xl mb-6'>New Project</h1>
				<form className='flex items-center' onSubmit={handleSubmit}>
					<Input
						placeholder='project name'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<Button type='submit'>Create</Button>
				</form>
			</Modal>
		</div>
	)

	// <>
	//   <Button onClick={openModal}>Create New Project</Button>
	//   <Modal
	//     isOpen={modalIsOpen}
	//     onRequestClose={closeModal}
	//     style={{
	//       overlay: {
	//         backgroundColor: "rgba(0, 0, 0, 0.5)",
	//       },
	//       content: {
	//         top: "50%",
	//         left: "50%",
	//         right: "auto",
	//         bottom: "auto",
	//         marginRight: "-50%",
	//         transform: "translate(-50%, -50%)",
	//       },
	//     }}
	//   >
	//     <h2>Create New Project</h2>
	//     <form onSubmit={handleSubmit}>
	//       <Input
	//         type="text"
	//         placeholder="Project Name"
	//         value={name}
	//         onChange={(e) => setName(e.target.value)}
	//       />
	//       <Button type="submit">Create</Button>
	//     </form>
	//   </Modal>
	// </>
}

export default NewProject
