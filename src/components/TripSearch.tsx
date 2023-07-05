"use client";

import React from "react";
import Input from "./Input";
import Datepicker from "./Datepicker";
import CurrencyInput from "react-currency-input-field";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <Datepicker
            placeholderText="Data de Ida"
            onChange={() => {}}
            className="w-full"
          />
          <Input placeholder="Orçamento" />
        </div>
      </div>
    </div>
  );
};

export default TripSearch;
