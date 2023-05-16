import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from "uuid";


const firebaseConfig = {
    apiKey: "AIzaSyAWHzE_WKsGR3Jwzo5zusYihAiLVseYATM",
    authDomain: "mvmnt-62e79.firebaseapp.com",
    projectId: "mvmnt-62e79",
    storageBucket: "mvmnt-62e79.appspot.com",
    messagingSenderId: "786088956045",
    appId: "1:786088956045:web:7228d75a62a9fc950992c4",
    measurementId: "G-3BJNFTJSHD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export async function uploadfile(file) {
    const storageRef = ref(storage,v4());
    await uploadBytes(storageRef,file)
    const url=await getDownloadURL(storageRef)
    return url
}
