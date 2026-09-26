const Loading = () => {
    return (
        <div className="flex min-h-[50vh] items-center justify-center bg-[#0b0c0f]">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

                <p className="text-sm text-gray-400">
                    Loading workouts...
                </p>
            </div>
        </div>
    );
};

export default Loading;