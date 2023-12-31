import { useState } from "react"
import { useLoaderData, Form, redirect, useActionData, useNavigation,  } from "react-router-dom"
import {loginUser} from '../api'

let formData

export function loginLoader({request}){
    return new URL(request.url).searchParams.get('message') 
}
export async function action({request}){
     formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get('redirectTo') || "/host"
    try {
        
     const data = await loginUser({email, password})
     localStorage.setItem("loggedin",true);

    
     // should simply be return redirect(/host)
     //but because we are use mirage js as a server it does not work and this is the only way around it 
     const response = redirect(pathname)
     response.body = true 
     return response
    } catch (err) {
        return err.message
    } 
}


export default function Login() {
    const message = useLoaderData()
    const error = useActionData()
    const navigation = useNavigation().state
   

   
    return (
        <div className=" font-inter min-h-[83vh] bg-[#FFF7ED] p-20">
           <h1 className="text-center text-[#161616] font-bold text-3xl ">Log in to your account</h1>
           <p className="text-center  text-[#161616] font-medium mb-8">Hello just press log in no real authentication in this demo app </p>
           {message && <h3 className=" text-center text-red-600 m-3">{message}</h3>}
           {error && <h3 className=" text-center text-red-600 m-3">{error}</h3>}
            <Form method="post" className="flex flex-col " replace>
                <input className="border border-[#D1D5DB] rounded-sm p-2"
                    name="email"
                    type="email"
                    placeholder="email"
                    value={"hello@justPressLogIn.com"}
                    required
                />
                <input className="border border-[#D1D5DB] rounded-sm p-2"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={"p123"}
                />
                <button disabled={navigation === 'submitting'} className=" bg-[#FF8C38] text-white py-3 mt-4 font-bold rounded-md disabled:bg-slate-300 disabled:cursor-not-allowed ">
                {navigation === "submitting" ? "Logging in..." : "Log in"}
                    </button>
            </Form>
        </div>
    )

}