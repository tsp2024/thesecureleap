import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";

const Events: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden md:flex mx-1 sm:mx-3 md:mx-10 mt-5">
      <div className="md:w-1/2 bg-[#80BE9A] flex flex-col items-center justify-center px-10">
        <img
          src="/image10.jpg"
          alt="Image"
          className="object-cover w-100 h-90 rounded-md my-10"
        />
        <h1 className="max-w-2xl text-center font-semibold text-3xl text-white">
          Technical Call for Papers (CFP) - Exclusive for Third and Fourth Year
          IT Students
        </h1>
        <p className="max-w-2xl text-center my-6 text-white">
          We are excited to announce a groundbreaking event, the Technical Call
          for Papers (CFP), exclusively for Third Year (TE) and Fourth Year (BE)
          students of the Information Technology division at VIT.
        </p>
      </div>
      <div className="md:w-1/2 p-8 bg-gradient-to-b from-orange-400 to-[#9D5D1D]">
        <h2 className="text-white text-2xl mb-2">Purpose and Vision:</h2>
        <p className="text-sm text-white max-w-full">
          🚀 Showcase Research Papers to Industry Experts and Corporates
        </p>
        <p className="text-sm text-white max-w-full">
          🌍 Foster New Connections with Global Audiences
        </p>
        <p className="text-sm text-white max-w-full">
          🌱 Encourage Human-Centric and Meaningful Tech Ideas for 21st-Century
          Societies About the Event:
        </p>
        <p className="text-sm text-white max-w-full">
          📅 Date: To Be Announced Soon!
        </p>
        <p className="text-sm text-white max-w-full">
          📍 Location: To Be Decided (Offline: VIT Bhopal Campus or Online: Open
          to VIT Final Year IT Students from other campuses)
        </p>
        <p className="text-sm text-white max-w-full">
          💰 Registration Fee: Rs. 1500/- per Group (Two students per group
          allowed)
        </p>
        <p className="text-sm text-white max-w-full">
          📝 Total Participants: 400 students (200 registrations from VIT IT
          Division)
        </p>

        <div className="my-2 sm:mt-4">
          <h2 className="text-white text-2xl mb-2">Purpose and Vision:</h2>
          <p className="text-sm text-white max-w-full">
            🏆 Top 30 papers will be selected for publishing in Industry Forums
            and Journals
          </p>
          <p className="text-sm text-white max-w-full">
            🥇 1st Prize: Rs. 35,000/- Cash Prize
          </p>
          <p className="text-sm text-white max-w-full">
            🥈 2nd Prize: Rs. 25,000/- Cash Prize
          </p>
          <p className="text-sm text-white max-w-full">
            🥉 3rd Prize: Rs. 15,000/- Cash Prize
          </p>
        </div>

        <div className="my-2 sm:mt-4">
          <h2 className="text-white text-2xl mb-2">Submission Guidelines:</h2>
          <p className="text-sm text-white max-w-full">
            📚 Research Papers should be Human-Centric and Relevant to
            21st-Century Societies
          </p>
          <p className="text-sm text-white max-w-full">
            🤝 Collaborate with Peers to Explore Innovative Ideas
          </p>
        </div>

        <div className="my-2 sm:mt-4">
          <h2 className="text-white text-2xl mb-2">Important Dates:</h2>
          <p className="text-sm text-white max-w-full">
            🗓 Event Announcement and Dates: To Be Announced Soon!
          </p>
          <p className="text-sm text-white max-w-full">
            🗓 Paper Submission Deadline: To Be Announced Soon!
          </p>
          <p className="text-sm text-white max-w-full">
            🗓 Results Declaration: To Be Announced Soon!
          </p>
        </div>

        <div className="my-2 sm:mt-4">
          <h2 className="text-white text-2xl mb-2">How to Participate:</h2>
          <p className="text-sm text-white max-w-full">
            🔗 Register your Group online at{" "}
            <Link
              href="/sign-in"
              // target="_blank"
              className="text-blue-700 hover:text-blue-600 hover:underline"
            >
              Portal
            </Link>{" "}
            once the dates are announced.
          </p>
          <p className="text-sm text-white max-w-full">
            📧 Submit your Research Papers to [Email Address] within the
            specified deadline.
          </p>

          <h3 className="text-white text-lg my-3">
            Don't miss this incredible opportunity to showcase your technical
            prowess and connect with industry experts. Let's together make this
            event a grand success! For any queries, feel free to reach out to
            [Contact Email/Number].
          </h3>

          <h3 className="text-white text-lg my-3">
            "Innovate, Collaborate, and Secure the Leap into the Future!"
          </h3>

          <h3 className="text-white text-lg my-3">
            Best Regards,
            <br />
            Event Organizer - The Secure Leap (TSL)
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Events;
