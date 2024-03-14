import React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";


interface Listing {
  userRef: string;
  name: string;
}

interface User  {
  username: string;
  email: string;
}

interface ContactProps {
  listing: Listing;
}
const Contact = ({ listing }: ContactProps) =>{
  const [landlord, setLandlord] = useState<User | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  return (
    <div>
      {landlord && (
        <div className="">
          <p className="font-semibold">
            Contact <span className="font-semibold">{landlord.username}</span>
            for <span>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows={2}
            onChange={onChange}
            value={message || ""}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg my-4"
          />
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </div>
  );
}

export default Contact;

