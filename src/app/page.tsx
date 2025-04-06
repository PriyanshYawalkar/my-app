//import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-2 flex flex-col items-center justify-center gap-8 w-full max-w-md p-8 rounded-lg border-2 shadow-lg">
        <h1 className="text-2xl font-bold text-blue-700">Welcome</h1>
        <form className="flex flex-col gap-4 w-full">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <a href="/welcome.tsx"></a>
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>

      </div>
      <hr />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Developed by Tanya Jain</p>
      </footer>
    </div>
  );
}
