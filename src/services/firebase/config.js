import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseConfig = () => {
    const config = {
        apiKey: "AIzaSyC0XkghZBT0-mCSt5yThP7lExytWdHmH60",
        authDomain: "bonne-sante-94cbd.firebaseapp.com",
        projectId: "bonne-sante-94cbd",
        storageBucket: "bonne-sante-94cbd.appspot.com",
        messagingSenderId: "40926868778",
        appId: "1:40926868778:web:4434934a7df4493ad01a53",
        measurementId: "G-W1ZHK9Q469"
    };

    const app = initializeApp(config);
    const database = getDatabase(app);
}
