"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", user);
      console.log(response);
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="text-black"
          />
          <label>password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="text-black"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default page;
