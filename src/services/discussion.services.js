import { db } from "../utils/firebase-config";

import { collection, getDoc, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";

const discussionCollectionRef = collection(db, "discussions");

class DiscussionDataService{
    addDiscussions = (newDiscussion) => {
        return addDoc(discussionCollectionRef, newDiscussion);
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
}

export default new DiscussionDataService();