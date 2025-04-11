import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {!session ? (
        <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
          <h2 className="text-red-600 text-3xl font-bold text-center">Sign In</h2>
          <button
            onClick={() => signIn("github")}
            className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 cursor-pointer transition duration-300"
          >
            Sign in with GitHub
          </button>
          
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md space-y-4 text-center">
          <h2 className="text-red-600 text-3xl font-bold">
            Welcome, {session.user.name}
          </h2>
          <img
            src={session.user.image}
            alt="User profile"
            className="rounded-full w-20 h-20 mx-auto"
          />
          <p className="text-gray-600">{session.user.email}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}