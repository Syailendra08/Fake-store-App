import { redirect } from "react-router-dom";

export function auth() {
    let access_token = localStorage.getItem("access_token");


    // jika tidak ada access token di local stoeage
    if (!access_token) { 
        // navigate() -> untuk fungsi yang menangani event
        // redirect -> untuk fungsi biasa (bukan penanganan event) digunakan dengan return 
        return redirect("/login");
    }

    // jika ada acess-token, dilanjut prosesnya
    return null;
}