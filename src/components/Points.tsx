import Image from "next/image";
import React from "react";

const Points = () => {
  return (
    <>
      <div className="flex items-center justify-center px-4 sm:px-0">
        <div className="grid grid-cols-1 my-10 sm:grid-cols-2 gap-3 items-center max-w-6xl w-full">
          <div className="sm:pr-5">
            <h1 className="px-2 py-2 bg-green-400 text-gray-100 rounded-xl w-fit my-2 font-semibold">
              International Education
            </h1>
            <p className="text-justify">
              It is critical to understand the opportunities that students may
              have after the professional education and what are the current
              options pertaining to the same. For this, it is not only mandatory
              to know the industry areas and organizations, but also a
              pre-requisite to learn about the laws and regulations of the
              country in which the university is present. Also, the target
              professional opportunities in foreign countries are based on
              assumptions which should not be determined by the hearsay.
              Considering these circumstances, while road-mapping, it is
              critical to know the best- and worst-case scenarios so that the
              achievement of a dream career becomes real.
            </p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <Image
              src="/international.jpg"
              alt="International Education"
              width={450}
              height={400}
              className="object-cover rounded-xl pointer-events-none"
            />
          </div>
        </div>
      </div>
      <div className="block sm:hidden w-4/5 h-px mx-auto bg-gradient-to-r from-transparent via-black to-transparent" />

      <div className="flex items-center justify-center px-4 sm:px-0">
        <div className="grid grid-cols-1 my-10 sm:grid-cols-2 gap-5 items-center max-w-6xl w-full">
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/complex.jpg"
              alt="International Education"
              width={450}
              height={400}
              className="object-cover rounded-xl pointer-events-none"
            />
          </div>
          <div className="sm:pr-5">
            <h1 className="px-2 py-2 bg-green-400 text-gray-100 rounded-xl w-fit my-2 font-semibold">
              Complexities in academic course selection and application process
            </h1>
            <p className="text-justify">
              Various universities across the globe offer exciting options of
              professional education along with interesting combinations of the
              programs which differentiate them from one another. But, there is
              a need to evaluate and understand one&apos;s own goals before
              understanding the suitability of the universities before arriving
              at a prospective list. Also, the orientation of various
              universities is different. However, the flexibility provided by
              these circumstances can be very confusing, leading students to
              make choices that they did not expect. The result is a defocused
              application which often keeps oneself away from getting into
              one&apos;s dream universities.
            </p>
          </div>
        </div>
      </div>

      <div className="block sm:hidden w-4/5 h-px mx-auto bg-gradient-to-r from-transparent via-black to-transparent" />

      <div className="flex items-center justify-center px-4 sm:px-0">
        <div className="grid grid-cols-1 my-10 sm:grid-cols-2 gap-3 items-center max-w-6xl w-full">
          <div className="sm:pr-5">
            <h1 className="px-2 py-2 bg-green-400 text-gray-100 rounded-xl w-fit my-2 font-semibold">
              Lack of adequate road-mapping
            </h1>
            <p className="text-justify">
              It is critical to understand the opportunities that students may
              have after the professional education and what are the current
              options pertaining to the same. For this, it is not only mandatory
              to know the industry areas and organizations, but also a
              pre-requisite to learn about the laws and regulations of the
              country in which the university is present. Also, the target
              professional opportunities in foreign countries are based on
              assumptions which should not be determined by the hearsay.
              Considering these circumstances, while road-mapping, it is
              critical to know the best- and worst-case scenarios so that the
              achievement of a dream career becomes real.
            </p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <Image
              src="/roadMapping.jpg"
              alt="International Education"
              width={450}
              height={400}
              className="object-cover rounded-xl pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="block sm:hidden w-4/5 h-px mx-auto bg-gradient-to-r from-transparent via-black to-transparent" />

      <div className="flex items-center justify-center px-4 sm:px-0">
        <div className="grid grid-cols-1 my-10 sm:grid-cols-2 gap-5 items-center max-w-6xl w-full">
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/complex.jpg"
              alt="International Education"
              width={450}
              height={400}
              className="object-cover rounded-xl pointer-events-none"
            />
          </div>
          <div className="sm:pr-5">
            <h1 className="px-2 py-2 bg-green-400 text-gray-100 rounded-xl w-fit my-2 font-semibold">
              Cost-Time-Self-Esteem Equation
            </h1>
            <p className="text-justify">
              The enthusiasm of getting into the university can often deter one
              from analyzing the relationship between cost and time when it
              comes to international education. Often perceived to be expensive,
              knowing about how to optimize the costs while using time on the
              foreign lands can give one a great head-start in their career.
              Also, not doing the same can be hard on self-esteem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Points;
