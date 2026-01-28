import { useEffect, useState } from "react";
import CardProfile from "../components/CardProfile";

export default function Profile() {
  const [user, setUser] = useState(null);

  async function getUsers() {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users/1");
      const result = await response.json();
      setUser(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {user && <CardProfile item={user} />}
    </>
  );
}
