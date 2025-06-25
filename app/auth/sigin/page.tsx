export default function Signin()
{
    return <div className="border-amber-300 border-2 rounded-lg p-4 mt-32 w-80 content-center items-center object-center">
        <span>Sign in</span>
        <form action="">
            <div>
                <label htmlFor="email">Email:</label>
                <input className=" border border-white" type="email" id="email" name="email" required/>
            </div>
            <br />
            <div>
                <label htmlFor=" password">Password:</label>
                <input className="border border-white" type="password" id="password" name="password" required />
            </div>
            <button className="border mt-1 text-blue-700 border-blue-300  bg-blue-300" type="submit">Sign In</button>
        </form>
    </div>
}