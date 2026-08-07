import LogoIcon from "./Logo";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between p-2">
        <LogoIcon className="w-40 h-auto text-c-orange" />
      </nav>
    </header>
  );
}