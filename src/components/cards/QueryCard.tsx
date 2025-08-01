"use client";
import React from "react";
import { QuerySchema } from "../Schema/QuerySchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { IQuery } from "../interface/QueryINterface";
import { PostQuery } from "@/src/api/QueryData";

const QueryCard = () => {
  // data send to backend
  const mutation = useMutation({
    mutationFn: PostQuery,
    mutationKey: ["QueryFill"],
    onSuccess: (data) => {
      toast.success("message sent successfully");
      console.log(data);
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  // form data validation checker
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(QuerySchema),
  });

  const SubmitForm = (data: IQuery) => {
    mutation.mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(SubmitForm)}>
      <div className="flex flex-col text-black gap-2">
        <div className="flex flex-col gap-1">
          <label className="font-light text-white text-md">Full name</label>
          <input
            type="text"
            {...register("full_name")}
            className="border border-white px-4 py-1 font-thin text-sm text-white focus:outline-none rounded-md"
            placeholder="Jhon Dhoe"
          />
          {errors && errors.full_name ? (
            <p className="w-full text-sm font-light text-red-500">
              {errors.full_name.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-light text-white text-md">Email</label>
          <input
            type="text"
            {...register("email")}
            className="border border-white px-4 py-1 font-thin text-sm text-white focus:outline-none rounded-md"
            placeholder="jhon@gmail.com"
          />
          {errors && errors.email ? (
            <p className="w-full text-sm font-light text-red-500">
              {errors.email.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-light text-white text-md">Phone number</label>
          <input
            type="text"
            {...register("contactNumber")}
            className="border border-white px-4 py-1 font-thin text-sm text-white focus:outline-none rounded-md"
            placeholder="9712345678"
          />
          {errors && errors.contactNumber ? (
            <p className="w-full text-sm font-light text-red-500">
              {errors.contactNumber.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-thin text-white text-md">Description</label>
          <textarea
            rows={5}
            cols={5}
            {...register("query")}
            className="border border-white px-4 py-1 focus:outline-none rounded-md text-sm text-white font-thin"
          ></textarea>
          {errors && errors.query ? (
            <p className="w-full text-sm font-light text-red-500">
              {errors.query.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full px-5 py-2 rounded-sm text-white bg-red-600 cursor-pointer hover:bg-red-700 ease duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default QueryCard;
