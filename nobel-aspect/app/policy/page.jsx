"use client";

import React from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Contact from "../components/Contact";

const Designing = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Banner section */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mb-8 lg:mb-16 flex flex-col gap-4 mx-auto w-full">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-siteTextIcon-primary">
              Privacy statement
            </h2>
            <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
              amet lacinia metus. Maecenas varius lorem id nibh eleifend, a
              condimentum odio suscipit. Phasellus ac nisi nunc. Cras suscipit
              imperdiet felis vel scelerisque. Nunc eros lacus, facilisis eu
              quam sit amet, aliquet pulvinar felis. Vivamus orci leo
            </p>
            <div className="flex flex-col gap-3">
              <h2 className="mb-4 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary uppercase">
                Lorem ipsum dolor sit amet,
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sit amet lacinia metus. Maecenas varius lorem id nibh eleifend,
                a condimentum odio suscipit. Phasellus ac nisi nunc. Cras
                suscipit imperdiet felis vel scelerisque. Nunc eros lacus,
                facilisis eu quam sit amet, aliquet pulvinar felis. Vivamus orci
                leo, tincidunt sit amet hendrerit ac, consectetur vitae lorem.
                Quisque sit amet varius augue, a elementum purus. Vestibulum
                tempus nisi ac ligula malesuada luctus. Integer in ultricies
                est, gravida scelerisque nunc.
              </p>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                Vestibulum laoreet lacus id commodo mollis. Duis at imperdiet
                sapien, a rutrum sapien. Maecenas vel elit condimentum, dictum
                ante eu, facilisis felis. Vestibulum lacinia urna elit, in
                eleifend ante dignissim a. Etiam vel ex scelerisque, rhoncus
                libero vitae, vehicula lectus. Donec ac ex volutpat, maximus
                libero eu, elementum ipsum.
              </p>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sit amet lacinia metus. Maecenas varius lorem id nibh eleifend,
                a condimentum odio suscipit. Phasellus ac nisi nunc. Cras
                suscipit imperdiet felis vel scelerisque.
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <h2 className="mb-4 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary uppercase">
                Lorem ipsum dolor sit amet,
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sit amet lacinia metus. Maecenas varius lorem id nibh eleifend,
                a condimentum odio suscipit. Phasellus ac nisi nunc. Cras
                suscipit imperdiet felis vel scelerisque. Nunc eros lacus,
                facilisis eu quam sit amet, aliquet pulvinar felis. Vivamus orci
                leo, tincidunt sit amet hendrerit ac, consectetur vitae lorem.
                Quisque sit amet varius augue, a elementum purus. Vestibulum
                tempus nisi ac ligula malesuada luctus. Integer in ultricies
                est, gravida scelerisque nunc.
              </p>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                Vestibulum laoreet lacus id commodo mollis. Duis at imperdiet
                sapien, a rutrum sapien. Maecenas vel elit condimentum, dictum
                ante eu, facilisis felis. Vestibulum lacinia urna elit, in
                eleifend ante dignissim a. Etiam vel ex scelerisque, rhoncus
                libero vitae, vehicula lectus. Donec ac ex volutpat, maximus
                libero eu, elementum ipsum.
              </p>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sit amet lacinia metus. Maecenas varius lorem id nibh eleifend,
                a condimentum odio suscipit. Phasellus ac nisi nunc. Cras
                suscipit imperdiet felis vel scelerisque.
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <h2 className="mb-4 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary uppercase">
                Lorem ipsum dolor sit amet,
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sit amet lacinia metus. Maecenas varius lorem id nibh eleifend,
                a condimentum odio suscipit. Phasellus ac nisi nunc. Cras
                suscipit imperdiet felis vel scelerisque. Nunc eros lacus,
                facilisis eu quam sit amet, aliquet pulvinar felis. Vivamus orci
                leo, tincidunt sit amet hendrerit ac, consectetur vitae lorem.
                Quisque sit amet varius augue, a elementum purus. Vestibulum
                tempus nisi ac ligula malesuada luctus. Integer in ultricies
                est, gravida scelerisque nunc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </main>
  );
};

export default Designing;
