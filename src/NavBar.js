import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  const blogNavLink = [
    {
      title: "Real Estate",
      id: "lable1",
      subLinks: [
        {
          link: "Indian Real Estate Landscape",
          to: "/",
        },
        {
          link: "Land Records",
          to: "/",
        },
        {
          link: "International Real Estate Landscape",
          to: "/",
        },
        {
          link: "Govt. Portal",
          to: "/",
        },
        {
          link: "Property Management",
          to: "/",
        },
        {
          link: "Legal & Tax",
          to: "/",
        },
        {
          link: "Rental Market in India",
          to: "/",
        },
        {
          link: "RERA",
          to: "/",
        },
      ],
    },
    {
      title: "RealtyTech",
      id: "lable2",
      subLinks: [
        {
          link: "AI- Enabled Real Estate",
          to: "/",
        },
        {
          link: "Immersive Real Estate",
          to: "/",
        },
        {
          link: "Decentralized Real Estate",
          to: "/",
        },
      ],
    },
    {
      title: "Lifestyle",
      id: "lable3",
      subLinks: [
        {
          link: "Interior & Furnishing",
          to: "/",
        },
        {
          link: "Vastu",
          to: "/",
        },
        {
          link: "Building Construction",
          to: "/",
        },
        {
          link: "Celebrity Homes",
          to: "/",
        },
        {
          link: "Smart City",
          to: "/",
        },
        {
          link: "Govt. Infra",
          to: "/",
        },
        {
          link: "Smart Homes",
          to: "/",
        },
        {
          link: "Monuments",
          to: "/",
        },
        {
          link: "Rural Housing",
          to: "/",
        },
        {
          link: "Packers & Movers",
          to: "/",
        },
      ],
    },
    {
      title: "Investments & Savings",
      id: "lable4",
      subLinks: [
        {
          link: "Home Loans",
          to: "/",
        },
        {
          link: "EPF",
          to: "/",
        },
        {
          link: "Jewels & Valuables",
          to: "/",
        },
        {
          link: "Insurance",
          to: "/",
        },
        {
          link: "PPF",
          to: "/",
        },
        {
          link: "Share Price",
          to: "/",
        },
        {
          link: "Saving Accounts",
          to: "/",
        },
        {
          link: "NPS",
          to: "/",
        },
        {
          link: "Union Budget",
          to: "/",
        },
        {
          link: "Current Account",
          to: "/",
        },
        {
          link: "FD",
          to: "/",
        },
        {
          link: "Stamp Duty",
          to: "/",
        },
        {
          link: "CIBIL Score",
          to: "/",
        },
        {
          link: "GST",
          to: "/",
        },
        {
          link: "TAX",
          to: "/",
        },
        {
          link: "Stocks",
          to: "/",
        },
      ],
    },
    {
      title: "Govt ID’S",
      id: "lable5",
      subLinks: [
        {
          link: "Aadhaar Card",
          to: "/",
        },
        {
          link: "Birth Certificate",
          to: "/",
        },
        {
          link: "Domicile Certificate",
          to: "/",
        },
        {
          link: "PAN Card",
          to: "/",
        },
        {
          link: "Marriage Certificate",
          to: "/",
        },
        {
          link: "Police Verification Certificate",
          to: "/",
        },
        {
          link: "Passport & VISA",
          to: "/",
        },
        {
          link: "Employment ID Card",
          to: "/",
        },
        {
          link: "Disability ID Card",
          to: "/",
        },
        {
          link: "Voter ID Card",
          to: "/",
        },
        {
          link: "OCI Card",
          to: "/",
        },
        {
          link: "Pension ID Card",
          to: "/",
        },
        {
          link: "Driving License",
          to: "/",
        },
        {
          link: "Caste Certificate",
          to: "/",
        },
        {
          link: "Health Insurance Card",
          to: "/",
        },
        {
          link: "National ID Card",
          to: "/",
        },
        {
          link: "Disability Certificate",
          to: "/",
        },
        {
          link: "Investor ID Card",
          to: "/",
        },
        {
          link: "Ration Card",
          to: "/",
        },
        {
          link: "Senior Citizen Card",
          to: "/",
        },
        {
          link: "Ayushman Bharat Card",
          to: "/",
        },
      ],
    },
    {
      title: "Financial Measurements",
      id: "lable6",
      subLinks: [
        {
          link: "Buyer Guide",
          to: "/",
        },
        {
          link: "Seller Guide",
          to: "/",
        },
        {
          link: "Tenant Guide",
          to: "/",
        },
        {
          link: "NRI Guide",
          to: "/",
        },
      ],
    },
    {
      title: "Client Corner",
      id: "lable7",
      subLinks: [
        {
          link: "Current Matters",
          to: "/",
        },
        {
          link: "Awards & Recognition",
          to: "/",
        },
        {
          link: "Hot Blogs",
          to: "/",
        },
        {
          link: "Research",
          to: "/",
        },
        {
          link: "Media Coverage",
          to: "/",
        },
        {
          link: "Money Matters",
          to: "/",
        },
      ],
    },
    {
      title: "Current Trends",
      id: "lable8",
      subLinks: [
        {
          link: "temp1",
          to: "/",
        },
        {
          link: "temp2",
          to: "/",
        },
        {
          link: "temp3",
          to: "/",
        },
      ],
    },
    {
      title: "Startup Corner",
      id: "lable9",
      subLinks: [
        {
          link: "Startup Guide",
          to: "/",
        },
        {
          link: "Employee Guide",
          to: "/",
        },
        {
          link: "Startup Ideas",
          to: "/",
        },
        {
          link: "Govt. Assistance",
          to: "/",
        },
      ],
    },
  ];
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link> */}
                {blogNavLink.map((val, index) => {
                  const { title, subLinks } = val;
                  return (
                    <NavDropdown
                      title={title}
                      id={`offcanvasNavbarDropdown-expand-xxl`}
                    >
                      {subLinks.map((val, index) => {
                        return (
                          <NavDropdown.Item href="#action2">
                          {val.link}
                          </NavDropdown.Item>
                        );
                      })}
                     
                    </NavDropdown>
                  );
                })}
              </Nav>
          
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
