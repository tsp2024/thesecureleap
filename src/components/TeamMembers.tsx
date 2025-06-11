import Image from "next/image";
import { contributingMembers, coreMembers } from "../../constant/teamMembers";
import { ReadMoreDialog } from "./ReadMoreDialog";

const TeamMembers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <hr />
      <div className="py-24 md:py-26">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Our Core Team
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {coreMembers.map(({ detail, img, name, profession }) => (
              <li key={name}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={img}
                  alt={`${name}'s profile picture`}
                  width={500}
                  height={500}
                  draggable={false}
                />
                <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">
                  {name}
                </h3>
                <p className="text-base/7 text-gray-600">{profession}</p>
                <p className="mt-4 text-base/7 text-gray-600 line-clamp-2">
                  {detail}
                </p>
                {detail && detail.split(" ").length > 30 && (
                  <ReadMoreDialog title={name} content={detail} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Our Contributing Team
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {contributingMembers.map(({ detail, img, name, profession }) => (
              <li key={name}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={img}
                  alt={`${name}'s profile picture`}
                  width={500}
                  height={500}
                  draggable={false}
                />
                <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">
                  {name}
                </h3>
                <p className="text-base/7 text-gray-600">{profession}</p>
                <p className="mt-4 text-base/7 text-gray-600 line-clamp-2">
                  {detail}
                </p>
                {detail && detail.split(" ").length > 30 && (
                  <ReadMoreDialog title={name} content={detail} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
