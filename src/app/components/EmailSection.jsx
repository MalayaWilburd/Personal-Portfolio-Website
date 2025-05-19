"use client";
import React, { useState } from "react";
import GithubIcon from "/public/github.svg";
import LinkedinIcon from "/public/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };


    return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">

        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question
                    or just want to say hi, I'd love to hear from you. You can contact me directly at malayawilburd@gmail.com, use the links below,
                    or use the form to the right. Thanks!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/MalayaWilburd">
                         <img src="/github.svg" alt="GitHub Icon" className="w-6 h-6 invert" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/malaya-wilburd-751aa82ba/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" className="invert" />
                    </Link>
                </div>
        </div>
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                <label 
                    htmlFor="email"  
                    className="text-white block mb-2 text-sm font-medium"
                >
                    Your email
                </label>
                <input 
                    name="email"
                    type="email" 
                    id="email" 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="example@email.com" 
                />
                </div>
                <div className="mb-6">
                <label 
                htmlFor="subject"  
                className="text-white block text-sm mb-2 font-medium"
                >
                    Subject
                </label>
                <input 
                    name="subject"
                    type="text" 
                    id="subject" 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="hi" 
                />
                </div>
                <div className="mb-6">
                    <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Leave your message here"
                    />
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-white-500 via-gray-500 to-black-500 hover:bg-slate-200 text-white cursor-pointer"
                >
                    Submit
                </button>
                {
                    //show message if email was submitted successfully
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>

    );
};

export default EmailSection;