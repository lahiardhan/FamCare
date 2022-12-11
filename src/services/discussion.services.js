import {
    db
} from "../utils/firebase-config";

import {
    collection,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
    serverTimestamp
} from "firebase/firestore";

const discussionCollectionRef = collection(db, "discussions");

class DiscussionDataService {
    addDiscussions = (newDiscussion) => {
        return addDoc(discussionCollectionRef,{
            newDiscussion,
            timestamp: serverTimestamp()
        });
    }

    updateDiscussion = (id, updatedDiscussion) => {
        const discussionDoc = doc(db, "discussions", id);
        return updateDoc(discussionDoc, updatedDiscussion);
    }

    deleteDiscussion = (id) => {
        const discussionDoc = doc(db, "discussions", id);
        return deleteDoc(discussionDoc);
    }

    getAllDiscussions = () => {
        return getDocs(discussionCollectionRef);
    }

    getDiscussion = (id) => {
        const discussionDoc = doc(db, "discussions", id);
        return getDoc(discussionDoc)
    }
    searchByTitle = async (params) => {
        const q = query(discussionCollectionRef, where("title", "==", params));
        const res = await getDocs(q);
        return res;
        // res.forEach((doc) => doc.data())
    }
}

export default new DiscussionDataService();