import React from "react";
import { getProject } from "../../services/ProjectRepo";
import { useEffect, useState } from "react";

const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProject((error, data) => {
      if (error) {
        console.error("Error mengambil data:", error);
      } else {
        setData(data);
      }
    });
  }, []);
  return (
    <div>
      <section id="project" className="pb-16">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap">
            <div className="mb-7 sm:mb-0">
              <h3 className="text-headingColor text-[2rem] font-[700]">
                Recent Project
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap mt-12">
            {data?.map((Project, Index) => (
              <div className="">{Project.name}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
