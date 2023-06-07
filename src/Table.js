import React from "react";

const Table = () => {
    const data = [
        [
          "Delhi",
          "≤ 5 Years",
          "2 per cent",
        ],
        [
          "Noida",
          "	≤ 11 Months",
          "2 per cent",
        ],
        [
          "Karnataka",
          "	≤ 11 Months",
          "	1% of the total rent plus deposit paid each year, or Rs 500, whichever is less",
        ],
        [
          "Tamil Nadu",
          "	≤ 11 Months",
          "	1 per cent of rent + Deposit Amount",
        ],
        [
          "Uttar Pradesh",
          "	< 1 Year",
          "	4 per cent of the annual rent + Deposit Amount",
        ],
        [
          "Maharashtra",
          "	≤ 60 Months",
          "0.25 per cent of the whole rent",
        ],
        [
          "Gurugram",
          "	≤ 5 Years",
          "1.5 per cent of the annual rent (calculated averagely)",
        ],
        [
          "Gurugram (ii)",
          "	5-10 Years",
          "	3 per cent of the annual rent (calculated averagely)",
        ],
       
      ];
//   const data = [
//     [
//       "Definition",
//       "Leasing is a contract in which one party grants the right of the property to the other to use it as an asset for a fixed amount of time.",
//       "Renting means allowing someone else to use your asset for a given time for a predetermined price.",
//     ],
//     ["Time Span", "Long Term", "Short Term"],
//     [
//       "Standards of Accounting",
//       "AS-19 Accounting Standards",
//       "No Particular Standard is required or applicable",
//     ],
//     ["Involvement of Parties", "Lessor and Lesse", "Landlord and Tenant"],
//     [
//       "Conditions for Maintenance",
//       "The responsibility for maintenance is entirely on the Lessor",
//       "Owner/Landlord is the only one responsible for maintenance of the property",
//     ],
//     ["Considerations", "Rentals according to the Lease", "Rent"],
//     [
//       "Changes",
//       "Once the contract gets signed, it can’t be changed further",
//       "The terms of the contract can be modified by the landlord.",
//     ],
//     [
//       "Buying Offers (if applicable)",
//       "The lessee receives an offer to acquire the leased asset for a residual value after the lease period.",
//       "Not Applicable",
//     ],
//   ];
  return (
    <div className="container">
      <h2>Difference Between Rent & Lease Agreement</h2>
      <table className="table  table-bordered" style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th>Basis of Comparison</th>
            <th>Lease</th>
            <th>Rent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
