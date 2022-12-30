import Link from "next/link";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { WarningIcon } from "../components/icons";


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    function throwError(msg: string, duration = 5000) {
        setError(msg)
        setTimeout(() => setError(null), duration)
    }

    function createAccount() {
        console.log('create account')
    }

    return (
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img className="h-screen w-full object-cover" src="https://source.unsplash.com/random" alt="Auth img" />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-2xl font-bold mb-5`}>Sign Up</h1>

                {error ? (
                    <div className={`flex item-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg`}>
                    {WarningIcon}
                    <span className={`ml-3`}>{error}</span>
                    </div>
                ): false}

                <AuthInput type="email" label="Email" value={email} changeValue={setEmail} required />

                <AuthInput type="password" label="Password" value={password} changeValue={setPassword} required />

                <button onClick={createAccount} className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>
                    Sign Up
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={createAccount} className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}>
                    Sign Up with Google
                </button>
                
                <div className="flex gap-1 mt-5">
                    <p>Already registered?</p>
                    <Link href={'signin'}>
                        <p className={`text-blue-500 hover: text-blue-700 font-semibold cursor-pointer`}>Sign In</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}