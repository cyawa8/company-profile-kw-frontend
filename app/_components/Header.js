import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header(){
    return(
        <header className="border-b border-primary-900 px-8">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
}