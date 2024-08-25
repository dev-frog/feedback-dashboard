import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all">
      <div className="w-full  max-w-screen-xl px-2.5 relative mx-auto">
        <div className="flex h-14 items-center justify-between border-b">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />

          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-black text-white px-3 py-1 rounded-md">
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-black text-white px-3 py-1 ml-2 rounded-md">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
