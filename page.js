"use client";
import { useState } from "react";
import Button from "./../../ui/components/inputs/Button";
import Input from "./../../ui/components/inputs/Input";
import "./login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login, storeToken } from "@/app/utils/authService";
export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(data);
      if (res?.data?.token) {
        storeToken(res?.data?.token);
        router.push("/auth/connect-page");
      }
    } catch (e) {
      console.log(e);
      setError(e.response?.data?.error);
    }
  };
  return (
    <>
      <h1>Login to your account</h1>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={handleLogin}>
        <Input
          label="Email"
          value={data.email}
          setValue={(v) => setData((p) => ({ ...p, email: v }))}
          placeholder="Enter your Email Id"
        />
        <Input
          label="Password"
          value={data.password}
          setValue={(v) => setData((p) => ({ ...p, password: v }))}
          placeholder="Enter password"
          type="password"
        />
        <Input
          label="Remember me"
          setValue={(v) => setData((p) => ({ ...p, rememberMe: v }))}
          value={data.rememberMe}
          type="checkbox"
        />
        <Button>Login</Button>{" "}
      </form>
      <p>
        New to MyApp? <Link href="/auth/signup">Sign Up</Link>
      </p>
    </>
  );
}
