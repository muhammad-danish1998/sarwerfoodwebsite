import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";

const Inbox = () => {
  const people = [
    {
      name: `Sehr geehrter Kunde, sind Sie mit liefermars zufrieden
          Ihre Bestellung NQC3UHE wurde erfolgreich zugestellt.Wir sind Ihnen dankbar, dass Sie uns als Ihre bevorzugte Plattform......
          
          `,
    },

    // More people...
  ];
  return (
    <div>
      <HeaderNavbar />
      <div>
        <div className="bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1">
          <h1 className="text-4xl font-bold mb-8">Inbox</h1>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-1">
            {people.map((person) => (
              <>
                <div
                  key={person.email}
                  className="relative flex items-center space-x-3  border border-gray-300 bg-white px-6 py-5 shadow-sm "
                >
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />

                    <p className="truncate text-sm text-gray-500">
                      {person.name}
                    </p>
                  </div>
                </div>
                <div
                  key={person.email}
                  className="relative flex items-center space-x-3  border border-gray-300 bg-white px-6 py-5 shadow-sm "
                >
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />

                    <p className="truncate text-sm text-gray-500">
                      {person.name}
                    </p>
                  </div>
                </div>
                <div
                  key={person.email}
                  className="relative flex items-center space-x-3  border border-gray-300 bg-white px-6 py-5 shadow-sm "
                >
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />

                    <p className="truncate text-sm text-gray-500">
                      {person.name}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inbox;
