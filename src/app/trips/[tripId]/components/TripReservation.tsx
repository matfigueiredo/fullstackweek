"use client";

import Button from "@/components/Button";
import Datepicker from "@/components/Datepicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  trip: Trip;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TripReservationForm>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Data inicial é obrigatória",
            },
          }}
          control={control}
          render={({ field }) => (
            <Datepicker
              placeholderText="Data de Início"
              onChange={field.onChange}
              className="w-full"
              selected={field.value}
              error={!!errors?.startDate}
              errorMessage="Data de início é obrigatória"
            />
          )}
        />

        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Data inicial é obrigatória",
            },
          }}
          control={control}
          render={({ field }) => (
            <Datepicker
              placeholderText="Data final"
              onChange={field.onChange}
              className="w-full"
              selected={field.value}
              error={!!errors?.endDate}
              errorMessage="Data final é obrigatória"
            />
          )}
        />
      </div>

      <Input
        {...register("guests", {
          required: {
            value: true,
            message: "Número de hóspedes é obrigatório",
          },
        })}
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className="mt-4"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">R$2500</p>
      </div>

      <div className="pb-10 border-b border-b-grayLighter w-full">
        <Button
          variant="primary"
          className="mt-3 w-full"
          onClick={() => handleSubmit(onSubmit)()}
        >
          Reservar agora
        </Button>
      </div>
    </div>
  );
};

export default TripReservation;
