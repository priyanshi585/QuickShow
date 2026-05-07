// import React from 'react'

import { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/title";
import { dateFormat } from "../../lib/dateFormat";

const ListShows = () => {

  const currency = import.meta.env.VITE_CURRENCY;

  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getAllShows = async () => {
    try {
      setShow([{
        movie: dummyShowsData[0],
        showDateTime: "2026-05-05T02:30:00.000Z",
        showPrice: 59,
        occupiedSeats: {
          A1: "user_1",
          B1: "user_2",
          C1: "user_3",
        }
      }]);

      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }
  
    getAllShows();
  }, []);

  return !loading ? (
    <>
      <Title text1="List" text2="Shows"/>
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Total Bookings</th>
              <th className="p-2 font-medium">Earnings</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {show.map((show , index)=>(
                <tr key={index} className="border-b border-primary-10 bg-primary/5 even:bg-primary/10">
                  <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>
                  <td className="p-2 min-w-45">{dateFormat(show.showDateTime)}</td>
                  <td className="p-2 min-w-45">{Object.keys(show.occupiedSeats).length}</td>
                  <td className="p-2 min-w-45">{currency} {Object.keys(show.occupiedSeats).length * show.showPrice}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (<Loading />)
}

export default ListShows