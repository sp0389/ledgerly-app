import React, { useState } from "react";

interface ModalProps {
  onConfirm: () => void;
  title: string,
  body: string,
}

const Modal: React.FC<ModalProps> = ({ onConfirm, title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-text btn-sm"
        aria-label="Action button"
        onClick={() => setIsOpen(true)}
      >
        <span className="icon-[tabler--trash] size-4"></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm fade-in">
          <div className="w-full max-w-md rounded-2xl bg-base-100 p-6 shadow-2xl ring-1 ring-primary/20">
            <div className="modal-header mb-2">
              <h3 className="modal-title text-xl font-bold text-primary">{title}</h3>
            </div>
            <div className="modal-body mb-4 text-base-content/80">{body}</div>
            <div className="modal-footer flex gap-2 justify-end">
              <button
                type="button"
                className="btn btn-soft btn-secondary"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={onConfirm}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;