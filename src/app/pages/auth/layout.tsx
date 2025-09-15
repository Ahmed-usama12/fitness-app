import { Outlet } from "react-router-dom";
import fitnessLogo from "@/assets/images/3f1b97ac1d19ded33c496670ee9f22167b9fd16b.png";
import image from "@/assets/images/auth-photo.png";

export default function AuthLayout() {
  return (
    <main className="relative grid min-h-screen grid-cols-1 bg-[url('@/assets/images/background.png')] bg-cover bg-center md:grid-cols-2">
      {/*overlay*/}
      <div className="absolute inset-0 bg-[rgba(36,36,36,0.6)] backdrop-blur-[47px]" />

      {/*layout*/}
      <section className="z-10 flex flex-col items-center justify-center border-r-2 border-[#FF4100]/20">
        {/* Super Fitness Logo */}
        <div className="z-10 h-[130px] w-[243px]">
          <img src={fitnessLogo} alt="fitness logo" className="items-cente w-full" />
        </div>

        {/* Central Image */}
        <div className="z-10 w-[500px] max-w-2xl">
          <img
            src={image}
            alt="image for a person exercising on gym equipment"
            className="w-full"
          />
        </div>
      </section>

      {/*children*/}
      <section className="z-10 flex flex-col items-center justify-center">
        <Outlet />
      </section>
    </main>
  );
}
