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
    console.log(discussion);

    const getDiscussions = async () => {
    const data = await DiscussionDataService.getDiscussion();
    setDiscussion(data.map((doc) => ({...doc.data(), id: doc.id})))
    }
    return (
        <>
            <h1 className="text-2xl font-medium">Ini Judul - <span>Tanggalnya</span></h1>
            <h1>params: {id}</h1>
            <pre>{ JSON.stringify(discussion, [], 2) }</pre>
        </>
    )
}

export default DiscussionTitle;