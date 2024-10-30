import ButtonIcon from "../../atoms/ButtonIcon";

interface HeaderProps {
    toggleMenu: () => void;
}

function Header({ toggleMenu }: HeaderProps) {
    return (
        <header className="flex items-center p-4 bg-gray-800 text-white shadow-md">
            <ButtonIcon onClick={toggleMenu} icon="☰" />
            <h1 className="text-lg ml-3 font-bold">VoIP Dashboard</h1>
        </header>
    );
}

export default Header;

