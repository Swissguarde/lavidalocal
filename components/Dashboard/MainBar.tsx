import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiPhotoAlbum } from "react-icons/bi";

type MainBarProps = {
  menuActive: string;
};

const MainBar: React.FC<MainBarProps> = ({ menuActive }) => {
  return (
    <div>
      <header className="flex h-fit flex-col rounded bg-[url('/images/banner.svg')] bg-center object-cover px-10 py-4 text-blue-900 shadow-lg">
        <div className="flex items-center">
          <h2 className="mr-2 text-sm font-bold">{menuActive}</h2>
          <HiOutlineArrowNarrowRight size={17} color="blue" />
        </div>
        <h2 className="mt-4 max-w-lg text-sm text-black">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College
        </h2>
      </header>

      <div className="mt-10 flex items-center justify-between px-12">
        <div className="relative">
          <img src="/images/user.png" className="h-32 w-32" alt="user" />
          <div className="absolute right-[-90%] top-[20%] flex flex-col gap-1">
            <button className="flex h-8 w-36 items-center justify-between bg-blue-900 px-3 py-2 text-sm">
              View Photo
              <BiPhotoAlbum className="ml-2" size={16} />
            </button>
            <button className="flex h-8 w-36 items-center justify-between bg-blue-900 px-3 py-2 text-sm">
              Upload Photo
              <AiOutlineCloudUpload className="ml-2" size={16} />
            </button>
          </div>
        </div>
        <button className="hidden h-fit w-fit items-center bg-blue-900 px-3 py-2 text-sm md:flex">
          Update Profile
          <CgProfile className="ml-2" size={16} />
        </button>
      </div>
      <div className="mt-6 px-12 sm:hidden">
        <button className="flex h-fit w-fit items-center bg-blue-900 px-3 py-2 text-sm">
          Update Profile
          <CgProfile className="ml-2" size={16} />
        </button>
      </div>

      <div className="mt-10 grid w-full grid-cols-1 gap-4 px-10 text-black md:grid-cols-2">
        <div>
          <div className="flex w-[80%] justify-between font-semibold text-blue-900">
            <h2>Bio Data Information</h2>
            <HiOutlineArrowNarrowRight size={17} />
          </div>
          <div className="mt-2 grid w-full grid-cols-2 items-start gap-2 text-sm text-blue-900 md:grid-cols-4">
            <div className="flex flex-col">
              <h2 className="font-semibold">Title</h2>
              <select className="text-xs" name="title">
                <option value="option1">Mr</option>
                <option value="option2">Mrs</option>
              </select>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">First Name</h2>
              <h2 className="text-xs">EBENEZER</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Other Name</h2>
              <h2 className="text-xs">TAIWO</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Last Name</h2>
              <h2 className="text-xs">BABALOLA</h2>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold">LGA</h2>
              <h2 className="text-xs">ILESHA-WEST</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">State of origin</h2>
              <h2 className="text-xs">OSUN STATE</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Country</h2>
              <h2 className="text-xs">NIGERIA</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between font-semibold text-blue-900">
            <h2>Employment Information</h2>
            <HiOutlineArrowNarrowRight size={17} />
          </div>
          <div className="mt-2 grid w-full grid-cols-2 gap-2 text-sm text-blue-900 md:grid-cols-3">
            <div className="flex flex-col">
              <h2 className="font-semibold">Employee Number</h2>
              <h2 className="text-xs">SSL-002</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Employment Type</h2>
              <h2 className="text-xs">FULL TIME</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Employment Resumption Date</h2>
              <h2 className="text-xs">2023-01-31</h2>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold">Designation</h2>
              <h2 className="text-xs">SOFTWARE DEVELOPER</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Department</h2>
              <h2 className="text-xs">ENTERPRISE UNIT</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <div className="flex justify-between font-semibold text-blue-900">
              <h2>Contact Information</h2>
              <HiOutlineArrowNarrowRight size={17} />
            </div>
            <div className="mt-2 grid w-full grid-cols-2 gap-2 text-sm text-blue-900 md:grid-cols-3">
              <div className="flex flex-col">
                <h2 className="font-semibold">Mobile Number</h2>
                <h2 className="text-xs">EBENEZER</h2>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold">Phone Number</h2>
                <h2 className="text-xs">TAIWO</h2>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold">Primary Email</h2>
                <h2 className="text-xs">BABALOLA@GMAIL.COM</h2>
              </div>

              <div className="flex flex-col">
                <h2 className="font-semibold">Secondary Email</h2>
                <h2 className="text-xs">TAIWO</h2>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center space-x-6">
            <h2>Signature</h2>
            <h2>Fingerprint</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainBar;
