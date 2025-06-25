"use client"
import axios from "axios";
import { useState } from "react";
export default function signup() {
    
    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");
    return  <div>
    <div className="flex flex-col items-center overflow-hidden justify-center min-h-screen ">
        <h1 className="text-2xl font-bold mb-4">Sign up</h1>
        <form className="flex flex-col gap-4">
            <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                onChange={(e) => setuser(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
                onChange={(e) => setpassword(e.target.value)}
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded font-bold"
                onClick={(e) => {
                    e.preventDefault();
                    axios.post("http://localhost:3000/api/auth/signup", {
                        username: user,
                        password: password
                    })
                }}
            >
                Sign up
            </button>
        </form>
    </div>
</div>
}