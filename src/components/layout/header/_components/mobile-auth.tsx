import { Button } from "@/components/ui/button";

export default function MobileAuth() {
  return (
    <div className="flex flex-col w-full px-5  space-y-3 pt-6 border-t">
      <Button className="w-full">LOGIN</Button>
      <Button
        className="w-full"
        variant={"secondary"}
      >
        SIGN UP
      </Button>
    </div>
  );
}
