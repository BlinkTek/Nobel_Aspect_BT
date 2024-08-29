import React from "react";

const Contact = () => {
  return (
    <section className="bg-siteNeutral-100">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="space-y-8 sm:grid md:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="flex flex-col items-center text-center p-5 rounded-2xl text-gray-500 dark:text-gray-400">
            <div className="flex justify-center items-center mb-4 rounded-full bg-sitePrimary-700/15 h-14 w-14 p-2">
              <div className="flex justify-center items-center rounded-full bg-white w-full h-full shadow-small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="text-sitePrimary-700 w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-medium">Email</h3>
            <p className="text-siteTextIcon-secondary dark:text-gray-400">Our friendly team is here to help.</p>
            <p className="text-siteTextIcon-primary pt-5">info@nobleaspect.com</p>
          </div>

          <div className="flex flex-col items-center text-center p-5 rounded-2xl text-gray-500 dark:text-gray-400">
            <div className="flex justify-center items-center mb-4 rounded-full bg-sitePrimary-700/15 h-14 w-14 p-2">
              <div className="flex justify-center items-center rounded-full bg-white w-full h-full shadow-small">
                <svg
                  className="text-sitePrimary-700 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-medium">Office</h3>
            <p className="text-siteTextIcon-secondary dark:text-gray-400">Come say hello at our office HQ.</p>
            <p className="text-siteTextIcon-primary pt-5">
              99 Wall St Ste 2077 <br />
              New York, NY 10005
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-5 rounded-2xl text-gray-500 dark:text-gray-400">
            <div className="flex justify-center items-center mb-4 rounded-full bg-sitePrimary-700/15 h-14 w-14 p-2">
              <div className="flex justify-center items-center rounded-full bg-white w-full h-full shadow-small">
                <svg
                  className="text-sitePrimary-700 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m7.057 2.418l1.167-.351a2.75 2.75 0 0 1 3.302 1.505l.902 2.006a2.75 2.75 0 0 1-.633 3.139L10.3 10.11a.25.25 0 0 0-.078.155c-.044.397.225 1.17.846 2.245c.45.781.859 1.33 1.206 1.637c.243.215.376.261.433.245l2.01-.615a2.75 2.75 0 0 1 3.034 1.02l1.28 1.776a2.75 2.75 0 0 1-.338 3.605l-.887.84a3.75 3.75 0 0 1-3.587.889c-2.754-.769-5.223-3.093-7.435-6.924C4.57 11.147 3.792 7.843 4.51 5.07a3.75 3.75 0 0 1 2.548-2.652m.433 1.437a2.25 2.25 0 0 0-1.53 1.59c-.602 2.332.087 5.261 2.123 8.788c2.034 3.522 4.223 5.583 6.54 6.23a2.25 2.25 0 0 0 2.152-.534l.886-.84a1.25 1.25 0 0 0 .154-1.639l-1.28-1.775a1.25 1.25 0 0 0-1.38-.464l-2.015.617c-1.17.348-2.231-.593-3.371-2.568c-.77-1.33-1.128-2.36-1.038-3.161c.046-.416.24-.8.545-1.086l1.495-1.393a1.25 1.25 0 0 0 .287-1.427l-.901-2.006a1.25 1.25 0 0 0-1.501-.684z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-medium">Phone</h3>
            <p className="text-siteTextIcon-secondary dark:text-gray-400">Mon-Fri from 8am to 7pm. </p>
            <p className="text-siteTextIcon-primary pt-5">+1 (201) 844-2537</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
