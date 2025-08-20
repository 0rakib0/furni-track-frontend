import React from 'react'

function DeleteAlart({
    isOpen,
    onClose,
    onConfirm,
}) {
    
    if(!isOpen){
        return null
    }

    console.log("is Open:", isOpen)

    return (
        <>
            <dialog open id="delete-confirmation-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box rounded-2xl shadow-xl">
                    <h3 className="font-bold text-xl text-center text-red-500">⚠️ Confirm Deletion</h3>
                    <p className="py-4 text-center text-gray-600">
                        Are you sure you want to <span className="font-semibold text-red-500">delete</span> this dealer? <br />
                        This action cannot be undone.
                    </p>
                    <div className="modal-action flex justify-center gap-4">
                        <form method="dialog">
                            <button onClick={onClose} className="btn rounded-xl px-6">No</button>
                        </form>
                        <form method="dialog">
                            <button onClick={onConfirm}
                                className="btn rounded-xl px-6 border-0 text-white"
                                style={{ backgroundColor: "#57c7d4" }}
                            >
                                ✅ Yes, Delete
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default DeleteAlart