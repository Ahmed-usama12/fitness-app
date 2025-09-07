import { Outlet } from "react-router-dom";
import fitnessLogo from "@/assets/images/3f1b97ac1d19ded33c496670ee9f22167b9fd16b.png"
import image from "@/assets/images/83d952cdb4d1adb0a7c4f122368997d2c0e6ddf5.png"

export default function AuthLayout() {
	return (
		<main className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 bg-center bg-cover bg-[url('@/assets/images/1c954dadbf9e7afe8a506781f826bc185c5e4deb.png')]" >
			{/*overlay*/}
			<div className="absolute inset-0 bg-[rgba(36,36,36,0.6)] backdrop-blur-[47px]" />

			{/*layout*/}
			<section className="z-10 border-r-2  border-[#FF4100]/20 flex flex-col items-center justify-center" >
				{/* Super Fitness Logo */}
				<div className="w-[243px] h-[130px] z-10">
					<img
						src={fitnessLogo}
						alt="fitness logo"
						className="w-full items-cente"
					/>
				</div>

				{/* Central Image */}
				<div className="max-w-2xl w-[500px] z-10">
					<img
						src={image}
						alt="image for a person exercising on gym equipment"
						className="w-full" />
				</div>
			</section>

			{/*children*/}
			<section className="z-10 flex items-center justify-center">
				<Outlet />
			</section>
		</main>
	);
}
