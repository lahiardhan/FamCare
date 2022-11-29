import React from "react";

function CommentForm() {
    return (
        <div className="mt-10">
            <form action="">
                <textarea name="" id="" cols="30" rows="10" className="w-full rounded-md" placeholder="Type something..."></textarea>
                <div className="flex justify-end">
                    <button type="submit" className="bg-secondary-color px-10 py-2 rounded-xl text-white font-medium">
                        Balas
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;