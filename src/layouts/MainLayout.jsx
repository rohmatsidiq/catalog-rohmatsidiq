import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LuUserRound } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";

export default function MainLayout() {
  return (
    <div>
      <div className="bg-white container mx-auto p-4 shadow-lg rounded-bl-2xl rounded-br-2xl">
        <div className="flex justify-between">
          <Link to={"/"}>
            <img src="/logo.svg" alt="logo" className="w-50" />
          </Link>
          <div className="flex justify-center items-center gap-4 sm:gap-8">
            <div className="flex gap-2 items-center justify-center cursor-pointer hover:text-teal-600">
              <LuUserRound className="text-2xl" />
              <div className="hidden sm:flex">Account</div>
            </div>
            <div className="flex gap-2 justify-end items-center cursor-pointer hover:text-teal-600">
              <IoBagHandleOutline className="text-2xl" />
              <div className="hidden sm:flex">Cart</div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
