import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <a className="text-2xl font-bold text-blue-600">Splash App</a>
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          {!["/counter-app"].includes(pathname) ? (
            <>
              <Button
                buttonLabel="Sign In"
                buttonBackgroundColor="red"
              />
              <Button
                buttonLabel="Sign Up"
                buttonBackgroundColor="blue"
              />
            </>
          ) : (
            <p className="font-semibold text-lg">Current count: {count}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;