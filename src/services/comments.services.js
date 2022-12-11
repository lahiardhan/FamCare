import {
    db
} from "../config/firebase-config";

import {
    collection,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs,
} from "firebase/firestore";

const commentCollectionRef = collection(db, "comments");

class CommentDataService {
    addComments = (newComment) => {
        return addDoc(commentCollectionRef, newComment);
    }

    updateComment = (id, updatedComments) => {
        const commentDoc = doc(db, "comments", id);
        return updateDoc(commentDoc, updatedComments);
    }

    deleteComment = (id) => {
        const commentDoc = doc(db, "comments", id);
        return deleteDoc(commentDoc);
    }

    getAllComments = () => {
        return getDocs(commentCollectionRef);
    }

    getComment = (id) => {
        const commentDoc = doc(db, "comments", id);
        return getDoc(commentDoc)
    }
}

export default new CommentDataService();