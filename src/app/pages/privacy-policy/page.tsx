import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main className="">
      <section className="mx-auto min-h-screen rounded-2xl bg-white p-8 px-6 py-24 shadow-lg dark:bg-zinc-800">
        {/* Title */}
        <h1 className="font-baloo text-main mb-6 text-center text-4xl font-extrabold">
          Privacy Policy
        </h1>
        <p className="mb-12 text-center text-sm text-zinc-500">Last updated: 23 September 2025</p>

        {/* Content */}
        <div className="space-y-8 text-zinc-700 dark:text-zinc-200">
          <section>
            <h2 className="text-main mb-2 text-2xl font-semibold">1. Information We Collect</h2>
            <p>When you register an account, we may collect the following information:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>First name and Last name</li>
              <li>Email address</li>
              <li>Password (encrypted and stored securely)</li>
              <li>Age, Gender, Weight, Height</li>
              <li>Your fitness goal (e.g., Gain weight, Lose weight, Get fitter, etc.)</li>
              <li>Your fitness level (e.g., Beginner, Intermediate, Advanced, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-main mb-2 text-2xl font-semibold">
              2. How We Use Your Information
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>To create and manage your account</li>
              <li>To provide customized fitness plans, workouts, and meals</li>
              <li>To allow you to log in securely</li>
              <li>To improve your overall experience in the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-main mb-2 text-2xl font-semibold">3. Storage of Information</h2>
            <p>
              Your authentication token is securely stored in your local storage after login. Other
              personal details are stored in our secure database.
            </p>
          </section>

          <section>
            <h2 className="text-main mb-2 text-2xl font-semibold">4. Sharing of Information</h2>
            <p>
              We do not sell or share your personal information with third parties for marketing. We
              may use third-party services (such as video hosting providers) only to deliver workout
              and meal content.
            </p>
          </section>

          <section>
            <h2 className="text-main mb-2 text-2xl font-semibold">5. User Rights</h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>You can log out of your account at any time.</li>
              <li>Currently, deleting accounts permanently is not supported.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-main mb-2 text-2xl font-semibold">6. Cookies and Tracking</h2>
            <p>
              We may use cookies or local storage to remember your login session and preferences
              such as your selected language.
            </p>
          </section>

          <section>
            <h2 className="text-main mb-2 text-2xl font-semibold">7. Complaints and Support</h2>
            <p>
              If you have any issues, concerns, or privacy-related complaints, you can submit a
              request through the <span className="text-main font-semibold">Help</span> section in
              the app. Your complaint will be forwarded to our support team, and we will get back to
              you as soon as possible.
            </p>
          </section>

          <section>
            <h2 className="text-main mb-2 text-2xl font-semibold">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected in
              this page with an updated &quot;Last updated&quot; date.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/profile"
            className="border-main text-main hover:bg-main rounded-lg border px-6 py-2 font-semibold transition hover:text-white"
          >
            Back to Profile
          </Link>
        </div>
      </section>
    </main>
  );
}
