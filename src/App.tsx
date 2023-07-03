import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
interface ButtonProps {
  bgColor: string;
  textColor: string;
  onClick: () => void;
  children: React.ReactNode;
}
function App(): JSX.Element {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious(): void {
    step > 1 && setStep((step) => step - 1);
  }
  function handleNext(): void {
    step < 3 && setStep((step) => step + 1);
  }
  function handleClose(): void {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 && "active"}`}>1</div>
            <div className={`${step >= 2 && "active"}`}>2</div>
            <div className={`${step >= 3 && "active"}`}>3</div>
          </div>
          <p className="message">
            step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({
  bgColor,
  textColor,
  onClick,
  children,
}: ButtonProps): JSX.Element {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default App;
