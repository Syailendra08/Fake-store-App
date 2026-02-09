import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import ToastFailed from "../components/ToastFailed";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";

export default function Login() {

    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate("/cart");
        }
    }, []);


    function submitForm() {
        setLoading(true);
        if (form.email == "" || form.password == "") {
            setError("Gagal! pastikan email dan password terisi")
        } else {
            setLoading(true);
            processLogin();
        }
    }


    async function processLogin() {
        const url = "https://api.escuelajs.co/api/v1/auth/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();
            // kalau res nya gaada access_token
            if (!result.access_token) {
                throw new Error("Email dan password tidak sesuai");
            }


            //siapkan token dari BE ke LS
            localStorage.setItem("access_token", result.access_token);
            localStorage.setItem("refresh_token", result.refresh_token);

            setError(""); //dikosongin kalo ada eror sebelumnya
            login();

            // pindahkan ke halaman keranjang 
            // <Link> pinda melalu HTML. useNavigate pindah lewat JS
            navigate("/cart");
        } catch (error) {
            setError("Gagal Login! pastinkan email dan password benar");


        } finally {
            setLoading(false);
        }
    }



    return (
        <>
            {
                error != "" && (<ToastFailed error={error} />)
            }



            <div className="w-100 block mx-auto mt-25">
                <h1 className="text-2xl mb-5 text-center">Login</h1>
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1">Your email</Label>
                        </div>
                        <TextInput id="email1" type="email" placeholder="lendra@gmail.com" required onKeyUp={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1">Your password</Label>
                        </div>
                        <TextInput id="password1" type="password" required onKeyUp={(e) => setForm({ ...form, password: e.target.value })} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>

                    {loading ? (
                        <Button disabled color="alternative"><Spinner aria-label="Default status example" /></Button>
                    ) : (<Button type="button" onClick={submitForm}>Login</Button>)}

                </form>
            </div>
        </>
    )
}