const Modal = ({ isOpen, onClose, onConfirm }:any) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center'>
			<div className='bg-white  p-4 rounded-[10px]'>
				<h4>Confirmation</h4>
				<p>Are you sure you want to register as a developer?</p>
				<button
					onClick={onConfirm}
					className='bg-blue-500 text-white px-4 py-2 rounded'>
					Confirm
				</button>
				<button
					onClick={onClose}
					className='ml-2 bg-gray-300 text-black px-4 py-2 rounded'>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default Modal;