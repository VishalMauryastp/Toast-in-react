import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./table.css"

const Explore = () => {
  // const navigate = useNavigate()
  const data = [
    {
      title: "Site visit to assess repair, utilities & society rules",
      mark: 1,
      mark2: 1,
    },
    {
      title: "Police Verification & Rent Agreement",
      mark: 1,
      mark2: 1,
    },
    {
      title: "Facilitate tenant move-in/out",
      mark: 1,
      mark2: 1,
    },
    {
      title: "Photography",
      mark: 1,
      mark2: 1,
    },
    {
      title: "Resolve dispute, if any",
      mark: 1,
      mark2: 0,
    },
    {
      title: "Periodic visit to property",
      mark: 1,
      mark2: 0,
    },
    {
      title: "Posting and publishing in multiple channel",
      mark: 1,
      mark2: 1,
    },
    {
      title: "Collection of security deposit and 1st rent",
      mark: 1,
      mark2: 1,
    },
    {
      title: "Repair & Maintenance",
      mark: 1,
      mark2: 0,
    },
    {
      title: "Connect with prospective Tenant and show flat",
      mark: 1,
      mark2: 1,
    },
    {
      title: "Complete society formality",
      mark: 1,
      mark2: 1,
    },
    {
      title: "Payment to statutory authorities",
      mark: 1,
      mark2: 0,
    },
  ];

  return (
    <div>
      <div className="Explore_title" >
      <h2 className="title2 text-center mt-5 pb-4">Explore Other Services</h2>
      </div>
      <div className="Explore ">
        
        <div className="">
          <table
            className=" table table-bordered"
            style={{ tableLayout: "fixed" }}
          >
            <thead>
              <tr className="table_head">
                <th>Services</th>
                <th>
                  End to End Property <br /> Management
                </th>
                <th>Rental Management</th>
              </tr>
            </thead>
            <tbody className="tableRows_container">
              {data.map((val, i) => {
                const { title, mark, mark2 } = val;
                return (
                  <tr className="tableRows" key={i}>
                    <td>{title}</td>
                    <td className=" ">
                      <div className=" d-flex position-absolute w-100 h-100 top-0 "
                      style={{
                        left:"0"
                      }}
                      >
                        {mark === 1 ? (
                          <img src="/ExploreXheck.svg" alt="true" />
                        ) : (
                          <img src="/ExploreCross.svg" alt="false" />
                        )}
                      </div>
                    </td>
                    <td className=" ">
                      <div className=" d-flex position-absolute w-100 h-100 top-0 "
                      style={{
                        left:"0"
                      }}
                      >
                        {mark2 === 1 ? (
                          <img src="/ExploreXheck.svg" alt="true" />
                        ) : (
                          <img src="/ExploreCross.svg" alt="false" />
                        )}
                      </div>
                    </td>
                   
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td>

                  <button className="me-auto ms-auto d-block Lernmore"
                  // onClick={() => {
                  //   navigate("/comming-soon");
                  // }}
                  >
                    Learn More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default Explore;
