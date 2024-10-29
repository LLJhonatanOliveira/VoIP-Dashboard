interface ButtonIconProps {
    onClick: () => void;
    icon: React.ReactNode;
}

function ButtonIcon({ onClick, icon }: ButtonIconProps) {
    return (
        <button onClick={onClick} className="p-2 bg-gray-500 rounded-md focus:outline-none">
            {icon}
        </button>
    );
}

export default ButtonIcon;
