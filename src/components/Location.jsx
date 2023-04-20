import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
const Location = () => {
  return (
    <div className="container-fluid flex-wrap flex mb-4 max-w-[1640px] mx-auto">
      <h1 className="text-orange-600 font-bold text-4xl text-center w-full my-10 ">
        Our Location
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4  w-full">
        <div className="  p-2 mx-2 flex justify-center">
          <div className="p-6 rounded-lg w-full flex flex-col text-center justify-between">
            <ul className="my-4">
              <li className=" flex justify-center mb-2 ">
                <h1 className="font-semibold flex text-2xl text-orange-600">
                  العنوان{" "}
                  <span className="text-orange-600 mx-2">
                    {" "}
                    <GoLocation />{" "}
                  </span>
                </h1>
              </li>
              <li className="text-gray-600 mb-2">الحوامدية-15-شارع الحلو</li>
              <li className="text-gray-600">Giza, Egypt</li>
            </ul>
            <ul className="my-4">
              <li className=" flex justify-center mb-2 ">
                <h1 className="font-semibold flex text-2xl text-orange-600">
                  البريد الاكتروني{" "}
                  <span className="text-orange-600 mx-2">
                    {" "}
                    <AiOutlineMail />{" "}
                  </span>
                </h1>
              </li>
              <li className="text-gray-600">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=soultan@creep.com"
                  target="_blank"
                >
                  soultan@creep.com
                </a>
              </li>
            </ul>
            <ul className="my-4">
              <li className=" flex justify-center mb-2 ">
                <h1 className="font-semibold flex text-2xl text-orange-600">
                  التليفون المحمول{" "}
                  <span className="text-orange-600 mx-2">
                    {" "}
                    <AiOutlineMobile />{" "}
                  </span>
                </h1>
              </li>
              <li className="text-gray-600">+20-1111-6-800-29</li>
            </ul>
          </div>
        </div>
        <div className=" px-2 mx-2 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27670.150381581818!2d31.27834738243974!3d29.899761843831328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145849d638aa88b7%3A0x23abee6109b09202!2z2KfZhNit2YjYp9mF2K_Zitip2Iwg2KfZhNis2YrYstip!5e0!3m2!1sar!2seg!4v1680954588017!5m2!1sar!2seg"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className=" w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
