import React from 'react';

const Loading = () => {
    return (
        // <div className="flex justify-center items-center">
        //     <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        // </div>
        <div className="flex justify-center items-center h-screen bg-green-300">
            <div className="grid gap-2">
                <div className="flex items-center justify-center ">
                    <div className="w-40 h-40 border-t-4 border-b-4 border-red-900 rounded-full animate-spin"></div>
                </div>
            </div>

        </div>
    );
};

export default Loading;