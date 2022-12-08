import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DiscussionDataService from "../../services/discussion.services";

function DiscussionTitle() {
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
    
    console.log(discussion);
    return (
        <>
            <h1 className="text-2xl font-medium">{discussion.title}</h1>
        </>
    )
}

export default DiscussionTitle;