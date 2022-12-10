import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DiscussionDataService from "../../services/discussion.services";

function DiscussionBody() {
    const [discussion, setDiscussion] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined && id !== "") {
            getDiscussions()
        }
    }, [])
    
    const getDiscussions = async () => {
        const data = await DiscussionDataService.getAllDiscussions();
        const dataMap = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));
        dataMap.find((data) => {
            if (data.id == id) {
                return setDiscussion(data)
            }
        });
    }
    
    console.log(discussion.content);

    return (
        <>
        <div className="mt-10 bg-white p-10 rounded-md shadow-md">
                <p>{ discussion.content }</p>
        </div>
        </>
    )
}
export default DiscussionBody