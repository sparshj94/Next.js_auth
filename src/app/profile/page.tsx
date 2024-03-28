"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const handleSubmit = async () => {
    const logoutUser = await axios.get("/api/users/logout");
    router.push("/login");
  };
  return (
    <>
      <div>
        <h1>Profile</h1>
        <button onClick={handleSubmit}>Logout</button>
      </div>
    </>
  );
};

export default page;
