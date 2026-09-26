
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0b0c0f] px-4 text-center">
            <p className="text-7xl font-bold text-[#ccff00]">404</p>

            <h1 className="mt-4 text-2xl font-bold uppercase text-white">
                WORKOUT NOT FOUND
            </h1>

            <p className="mt-2 max-w-md text-sm text-gray-400">
                The workout or page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-[#ccff00] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300"
            >
                Back to Workouts
            </Link>
        </div>
    );
};

export default NotFound;