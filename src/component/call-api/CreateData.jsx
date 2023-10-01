import React from "react";
import { useForm } from "react-hook-form";

const CreateData = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username </label>
        <input
          type="text"
          defaultValue={props.data?.username}
          {...register("username", {
            required: true,
          })}
          style={{ border: "1px solid gray" }}
        />
        {errors.username && <span>Username không được để trống</span>}

        <br />
        <label>Password </label>
        <input
          type="text"
          {...register("password", {
            required: true,
          })}
          style={{ border: "1px solid gray" }}
        />
        {errors.password && <span>Password không được để trống</span>}

        <br />
        <label>Fullname </label>
        <input
          type="text"
          {...register("fullname", {
            required: true,
          })}
          style={{ border: "1px solid gray" }}
        />
        {errors.password && <span>Fullname không được để trống</span>}

        <br />
        <label>Dob </label>
        <input
          type="text"
          {...register("dob", {
            required: true,
          })}
          style={{ border: "1px solid gray" }}
        />
        {errors.password && <span>Dob không được để trống</span>}

        <br />
        <label>Phone </label>
        <input
          type="text"
          {...register("phone", {
            required: true,
          })}
          style={{ border: "1px solid gray" }}
        />
        {errors.password && <span>Phone không được để trống</span>}

        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default CreateData;
