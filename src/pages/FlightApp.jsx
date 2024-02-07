import React from "react";
import { useState} from 'react'   
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Form from "../components/Form";
import Loader from "../components/Loader";
import Ticket from "../components/Ticket";

const FlightApp = () => {
  // handle event
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const [loading,setLoading]=useState();
  const [tickets,setTickets]=useState(null);
  const [isOneWay,setIsOneWay]=useState(false);

  const loadTickets=async(from,to,departureDate,returnDate)=>{
    setLoading(true)
    const response =await (await fetch(`/tickets?from=${from}&to=${to}&departureDate=${departureDate}&returnDate=${returnDate}`)).json();
    setTickets(response.data)
    setLoading(false)
  }
  // handle submit
  
  const onSubmit = (data) =>{
    console.log("on submit")
    console.log(data)
    
   loadTickets(data.departure,data.arrival,data.departureDate,data.returnDate)
  }
  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
            {/* header section */}
            <Header/>

            {/* body section */}
            <div>
              <div className="grid justify-center space-y-5 bg-indigo-50 pb-10">
                <Form register={register} setIsOneWay={setIsOneWay} errors={errors} isOneWay={isOneWay}/>
                
                {/*Tickets */}
                {loading && <Loader/>}
                {tickets && tickets.length == 0 && (<div className="text-center">İstediğiniz şartları sağlayan bilet bulunamadı</div>)}  
                {tickets?.map((ticket,index)=>(<Ticket key={index} ticket={ticket} isOneWay={isOneWay} />))}
              </div>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default FlightApp;
