import React from "react";
import { airports } from "../mocks/data";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

const Form = ({register,setIsOneWay,errors,isOneWay}) => {
  return (
    <>
      <div>
        <div className="flex justify-around space-x-8 mt-5">
          <div className="flex items-center space-x-2">
            <input
              onClick={() => {
                setIsOneWay(false);
              }}
              type="radio"
              className={`w-6 h-6 ${
                errors.tripType &&
                " focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              value="round trip"
              {...register("tripType", {
                required: {
                  value: true,
                  message: "Trip type is required",
                },
              })}
            />
            <p className="text-xl font-bold uppercase">Round trip</p>
          </div>

          <div className="flex items-center space-x-2">
            <input
              onClick={() => {
                setIsOneWay(true);
              }}
              type="radio"
              className={`w-6 h-6 ${
                errors.tripType &&
                " focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              value="one way"
              {...register("tripType", {
                required: {
                  value: true,
                  message: "Trip type is required",
                },
              })}
            />
            <p className="text-xl font-bold uppercase">one way</p>
          </div>
        </div>
        <div>
          {errors.tripType && (
            <span className="text-sm text-red-500">
              {errors.tripType.message}
            </span>
          )}
        </div>
      </div>

      {/* departure section */}
      <div>
        <div>
          <div className="relative">
            <p className="font-bold text-xl uppercase">flying from</p>
            <select
              className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                errors.departure &&
                " focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              {...register("departure", {
                required: {
                  value: true,
                  message: "Departure is required",
                },
              })}
            >
              <option value="" selected disabled hidden>
                --Select Airport--
              </option>
              {airports.map((airport, index) => (
                <option key={index} value={airport.city}>
                  {airport.name}
                </option>
              ))}
            </select>
            <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " />
          </div>
          <div>
            {errors.departure && (
              <span className="text-sm text-red-500">
                {errors.departure.message}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* arrival section */}
      <div>
        <div>
          <div className="relative">
            <p className="font-bold text-xl uppercase">flying to</p>
            <select
              className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                errors.arrival &&
                " focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              {...register("arrival", {
                required: {
                  value: true,
                  message: "Arrival is required",
                },
              })}
            >
              <option value="" selected disabled hidden>
                --Select Airport--
              </option>
              {airports.map((airport, index) => (
                <option key={index} value={airport.city}>
                  {airport.name}
                </option>
              ))}
            </select>
            <FaPlaneArrival className="text-4xl absolute left-5 top-10 " />
          </div>
          <div>
            {errors.arrival && (
              <span className="text-sm text-red-500">
                {errors.arrival.message}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* date section */}
      <div className="flex space-x-2">
        {/* departure section */}
        <div className="w-1/2">
          <div>
            <div className="relative">
              <p className="font-bold text-xl uppercase">departure date</p>
              <input
                type="date"
                className={`w-full h-16 text-2xl rounded-lg ${
                  errors.departureDate &&
                  " focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                {...register("departureDate", {
                  required: {
                    value: false,
                    message: "Departure date is required",
                  },
                })}
              />
            </div>
            <div>
              {errors.departureDate && (
                <span className="text-sm text-red-500">
                  {errors.departureDate.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* return section */}

        <div className="w-1/2">
          <div>
            <div className="relative">
              <p className="font-bold text-xl uppercase">return date</p>
              <input
                disabled={isOneWay ? true : false}
                type="date"
                className={`w-full h-16 text-2xl rounded-lg ${
                  errors.returnDate &&
                  " focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                {...register("returnDate", {
                  required: {
                    value: false,
                    message: "Return date is required",
                  },
                })}
              />
            </div>
            <div>
              {errors.returnDate && (
                <span className="text-sm text-red-500">
                  {errors.returnDate.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* button section */}
      <div>
        <input
          type="submit"
          value="Find flight"
          className="w-full h-16 font-bold text-3xl uppercase rounded-lg bg-green-100 hover:bg-white"
        />
      </div>
    </>
  );
};

export default Form;
