import React from 'react'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink, useLocation } from "react-router-dom";

const breadcrumbNames = {
    '/': 'Home',
    '/model': 'Models',
    '/model/:modelname': 'Model Details',
    '/mlflow': 'MLflow',
    '/audit': 'Audit Trail',
    '/notebook': 'Notebooks',
    '/addnotebook': 'Create Notebook',
    '/settings': 'Settings',
  };
  

const index = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const breadcrumbData = pathname.split("/").filter((x) => x);

    const breadcrumbs = [
        { label: <HomeIcon />, href: "/" },
        ...breadcrumbData.map((breadcrumb, index) => {
          const href = `/${breadcrumbData.slice(0, index + 1).join("/")}`;
          const name = breadcrumbNames[href] || breadcrumb;
          return { label: name, href };
        }),
      ];

      function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      }
  return (

    <div>
       <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              {breadcrumbs.map((breadcrumb, index) => (
                <NavLink
                  className="text-decoration-none text-dark"
                  key={index}
                  underline="hover"
                  color={
                    index === breadcrumbs.length - 1
                      ? "text.primary"
                      : "inherit"
                  }
                  to={breadcrumb.href}
                >
                  {breadcrumb.label}
                </NavLink>
              ))}
            </Breadcrumbs>
          </div>
    </div>
  )
}

export default index
