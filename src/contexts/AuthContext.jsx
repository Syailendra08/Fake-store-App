import { createContext, useState } from "react";


export const AuthContext = createContext();

// menyimpan proses data uamg akan dibuat global (bisa diakses difile mana aja)

export default function AuthProvider({children}) {
    const[isLogin, setIsLogin] = useState(localStorage.getItem("access_token"));

   
     function logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setIsLogin(false);
    }

    function login() {
        // ubah state isLogin jadi data localstorage, untuk trigegr munculnya btn logout di navbar
        setIsLogin(localStorage.getItem("access_token"));
    }

    // mendefinisikan context akan digunakan di page apa aja
    return (
        // value: data/function yg diperbolehkan diakses global
        <AuthContext.Provider value={{isLogin, logout, login}}>
            {/* kalo ga[ake childre, perlu manggil satu satu file pages, kalo mau berlaku disemunaya gunakana props children */}
            {children}
            </AuthContext.Provider>
    )

}