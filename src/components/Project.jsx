import React from "react";

const Project = () => {
  return (
    <div
      id="project"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32"
    >
      <h1 className="text-center text-5xl font-light">Projects</h1>


      <div className="grid frid-cols-1 lg-grid-cols-2 xl:grid-cols-3 gap-5">
        <a href="https://admin.bpssu.com/login">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Bio-Process</h1>
          <h3 className="text-sm text-gray-700">
            Tools: Laravel, MySQL,Ajax,JavaScript{" "}
          </h3>
          <p className="text-sm text-gray-600">
            Built CRUD operation. Built an interactive section enabling
            user-admin communication through drawings and notifications on whenever read or get these drawings.

          </p>
        </div>
        </a>
       

        <a href="https://domy-mallorca.es/admin/login">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Domy</h1>
          <h3 className="text-xl text-gray-700">Tools: Laravel,MySQL </h3>
          <p className="text-sm text-gray-600">
           Developed Internal messaging
            feature for the users. Notification system whenever a project is
            created and assigned to a helper and project owner.
          </p>
        </div>
        </a>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">NGO</h1>
          <h3 className="text-xl text-gray-700">Tools: Laravel,Ajax,MySQL </h3>
          <p className="text-sm text-gray-600">
            Developed CRUD operation for user and admin. Implemented logic for
            winning lottery. Created API's for frontend which was built on react.
          </p>
        </div>

        {/* <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project</h1>
          <h3 className="text-xl text-gray-700">Laravel tech giant on php </h3>
          <p className="text-sm text-gray-600"></p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project</h1>
          <h3 className="text-xl text-gray-700">Laravel tech giant on php </h3>
          <p className="text-sm text-gray-600"></p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project</h1>
          <h3 className="text-xl text-gray-700">Laravel tech giant on php </h3>
          <p className="text-sm text-gray-600"></p>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
