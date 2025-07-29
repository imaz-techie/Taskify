import { useNavigate } from "react-router-dom";
import { useState } from "react";
import login from "../../../assets/icons/login1.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState(null);
  const [passworderror, setPassworderror] = useState(null);
  let navigate = useNavigate();

  function HandleSubmit() {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    let emailErr = null;
    let passwordErr = null;
    let isValid = true;

    if (!emailRegex.test(email)) {
      emailErr = "Invalid Email";
      isValid = false;
    }

    if (password.length < 6) {
      passwordErr = "Password must contain above 6 characters";
      isValid = false;
    }

    setEmailerror(emailErr);
    setPassworderror(passwordErr);

    if (isValid) {
      sessionStorage.setItem("login", "true");
      navigate("/");
    }
  }

  return (
    <main className="flex h-screen w-screen">
      <div>
        <img className="h-screen w-full" src={login} alt="" />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center p-3">
        <div className="flex flex-col items-center gap-3 bg-orange-100 p-10 border-[1px] border-[#d6b694] rounded-[25px]">
          <h1 className="text-[#ac8a72] text-4xl mt-4">WELCOME</h1>
          <p>Welcome ! Please enter your details.</p>

          <div className="flex flex-col gap-3 items-start w-full">
            <label htmlFor="email">Email</label>
            <input
              className="w-full border border-gray-300 rounded-[10px] p-1"
              type="text"
              name="email"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailerror && <span className="text-red-500">{emailerror}</span>}
            <label htmlFor="password">Password</label>
            <input
              className="w-full border border-gray-300 rounded-[10px] p-1"
              type="password"
              name="password"
              placeholder="Enter Password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passworderror && (
              <span className="text-red-500">{passworderror}</span>
            )}
          </div>
          <div className="w-full flex justify-between text-xs">
            <div className="flex gap-1 items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Forget Password</p>
          </div>
          <button
            onClick={HandleSubmit}
            className="bg-[#eeb58f] rounded-[6px] p-1 w-full text-center"
          >
            Sign in
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;
