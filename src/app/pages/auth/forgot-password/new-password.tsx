import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";

export default function NewPassword() {
  return (
    <div>
      <h1 className="text-5xl font-extrabold px-4 py-2 mb-2">
        create new password
      </h1>
      <div className="p-10 rounded-[50px] border">
        <div className="space-y-6 flex flex-col justify-center items-center">
          <p className="text-center text-2xl">
            Make sure to create a strong password!
          </p>

          <PasswordInput
            id={"newPassword"}
            type="password"
            placeholder="New Password"
            className="w-ful"
          />
          <PasswordInput
            id={"Confirm Password"}
            type="password"
            placeholder="Confirm New Password"
            className="w-ful"
          />
          <Button
            icon={false}
            className="w-full"
          >
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
}
