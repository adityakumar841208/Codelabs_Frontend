const PostSkeleton = () => (
    <div className="w-full rounded-lg overflow-hidden shadow-md border mb-6 animate-pulse">
        {/* Header */}
        <div className="flex justify-between items-center p-2">
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="ml-2 space-y-2">
                    <div className="h-4 bg-gray-300 w-32 sm:w-24 md:w-32 lg:w-40"></div>
                    <div className="h-3 bg-gray-300 w-24 sm:w-20 md:w-24 lg:w-28"></div>
                    <div className="h-3 bg-gray-300 w-20 sm:w-16 md:w-20 lg:w-24"></div>
                </div>
            </div>
            <div className="bg-gray-300 rounded-lg w-16 h-6 sm:w-12 md:w-16 lg:w-20"></div>
        </div>

        {/* Post Content */}
        <div className="p-1">
            <div className="h-4 bg-gray-300 w-3/4 sm:w-2/3 md:w-3/4 lg:w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 w-1/2 sm:w-2/3 md:w-1/2 lg:w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 w-2/3 sm:w-3/4 md:w-2/3 lg:w-2/3 mb-2"></div>
            <div className="h-40 bg-gray-300 w-full mb-3"></div>
        </div>

        {/* Footer (likes, comments, etc.) */}
        <div className="px-4 py-2 border-t border-gray-300 flex justify-between text-sm">
            <div className="flex items-center space-x-1">
                <div className="h-4 bg-gray-300 w-6 sm:w-5 md:w-6 lg:w-6"></div>
                <div className="h-4 bg-gray-300 w-12 sm:w-10 md:w-12 lg:w-12"></div>
            </div>
            <div className="flex items-center justify-evenly space-x-2 gap-2">
                <div className="h-4 bg-gray-300 w-6 sm:w-5 md:w-6 lg:w-6"></div>
                <div className="h-4 bg-gray-300 w-6 sm:w-5 md:w-6 lg:w-6"></div>
                <div className="h-4 bg-gray-300 w-6 sm:w-5 md:w-6 lg:w-6"></div>
            </div>
        </div>
    </div>
);

export default PostSkeleton;
