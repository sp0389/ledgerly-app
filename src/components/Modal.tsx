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
        <div
          id="basic-modal"
          className="overlay modal opacity-100 duration-300"
          role="dialog"
          tabIndex={-1}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">{title}</h3>
              </div>
              <div className="modal-body">
                {body}
              </div>
              <div className="modal-footer">
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
        </div>
      )}
    </>
  );
};

export default Modal;