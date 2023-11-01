import React from "react";

export default function BreadCrumb(props) {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center sm:flex-nowrap w-full h-auto min-h-[3rem] gap-2 bg-slate-100 rounded-lg p-2 px-4">
            <a
                href="/"
                className="text-black font-semibold hover:text-cerisered-600 text-sm"
            >
                Home
            </a>
            <h3 className="text-sm text-slate-400 ">&gt;</h3>
            {props.breadcrumbs
                ? props.breadcrumbs.map((e, index, array) => {
                      const isActive = array[array.length - 1] == e;
                      return (
                          <div
                              key={String(index) + "breadcrumbItem"}
                              className="flex flex-row justify-center items-center flex-nowrap gap-2 "
                          >
                              <a
                                  href={e.href}
                                  className={
                                      !isActive
                                          ? "text-black font-semibold hover:text-cerisered-600 text-sm"
                                          : "text-slate-500 font-semibold hover:text-cerisered-600 text-sm"
                                  }
                              >
                                  {e.text}
                              </a>
                              {!isActive ? (
                                  <h3 className="text-sm text-slate-400 ">
                                      &gt;
                                  </h3>
                              ) : null}
                          </div>
                      );
                  })
                : null}
        </div>
    );
}
