import React, { createContext, useContext, useReducer } from "react";
import Modal from "react-modal";
import Button from "../Button";

// add default styles directly to the Modal overlap
if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.display = "flex";
  Modal.defaultStyles.overlay.justifyContent = "center";
  Modal.defaultStyles.overlay.alignItems = "center";
  Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.8)";
  Modal.defaultStyles.overlay.zIndex = 111111;
}

Modal.setAppElement("#__next");

type State = {
  isConfirmBoxOpen: boolean;
  heading: string;
  subheading: string;
  note: string;
  cancelText: string;
  confirmText: string;
  onConfirmClick: () => void;
};

const initialState = {
  isConfirmBoxOpen: false,
  heading: "Heading missing",
  subheading: "subheading missing",
  note: "This action cannot be undone",
  cancelText: "Cancel",
  confirmText: "Confirm",
  onConfirmClick: () => undefined,
};

type Action =
  | {
      type: "Open_Modal";
      heading: string;
      subheading: string;
      note?: string;
      cancelText?: string;
      confirmText?: string;
      onConfirmClick: () => void;
    }
  | { type: "Close_Modal" };

const reducer = (state: State, action: Action) => {
  const { type, ...rest } = action;
  switch (type) {
    case "Open_Modal":
      return { ...state, isConfirmBoxOpen: true, ...rest };
    case "Close_Modal":
      return initialState;
    default:
      return state;
  }
};

type ProviderProps = {
  children: React.ReactNode;
};

// create React context
const ConfirmBoxContext = createContext(
  {} as { confirmBoxDispatch: React.Dispatch<Action> }
);

export const ConfirmBoxProvider = ({ children }: ProviderProps) => {
  const [state, confirmBoxDispatch] = useReducer(reducer, initialState);

  const closeModal = () => confirmBoxDispatch({ type: "Close_Modal" });

  return (
    <ConfirmBoxContext.Provider value={{ confirmBoxDispatch }}>
      <Modal
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        isOpen={state.isConfirmBoxOpen}
        onRequestClose={closeModal}
        className="confirmbox"
      >
        <h1>{state.heading}</h1>
        <h3>{state.subheading}</h3>

        <div>
          <p>
            <span>Note: </span>
            {state.note}
          </p>
          <div className="confirmbox__actions">
            <Button
              inverted
              color="orange"
              text={state.cancelText}
              handleClick={closeModal}
            />
            <Button
              text={state.confirmText}
              handleClick={state.onConfirmClick}
            />
          </div>
        </div>
      </Modal>

      {children}
    </ConfirmBoxContext.Provider>
  );
};

export const useConfirmBox = () => useContext(ConfirmBoxContext);
