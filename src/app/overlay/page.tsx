"use client";

import { useState } from "react";
import Modal from "./_components/Modal";
import { useOverlay } from "@/_libs/toss/useOverlay/useOverlay";

const BUTTON_STYLE =
  "px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 w-36";

export default function Overlay() {
  const overlay = useOverlay();

  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    overlay.open(({ isOpen, close }) => {
      return <Modal isOpen={isOpen} onClose={close} />;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => setIsOpen(true)} className={BUTTON_STYLE}>
        Modal
      </button>

      <button onClick={handleModalOpen} className={BUTTON_STYLE}>
        Overlay Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
