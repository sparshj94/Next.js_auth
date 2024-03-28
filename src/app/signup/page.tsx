"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="text-black"
          />
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
          <button type="submit">SignUp</button>
        </form>
      </div>
    </>
  );
};

export default page;
