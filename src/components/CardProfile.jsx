import { Card } from "flowbite-react";

export default function CardProfile({ item }) {
  return (
    <div className="flex flex-col items-center mt-4">
      <h5 className="text-xl text-heading mb-4">
        Welcome Back {item.name}!
      </h5>

      <Card className="p-0 bg-transparent shadow-none border-none w-fit">
        <div className="flex flex-col items-center bg-neutral-primary-soft p-6 rounded-base shadow-xs md:flex-row md:max-w-xl">
          <img
            className="object-cover w-48 h-48 rounded-base mb-4 md:mb-0"
            src={item.avatar}
            alt={item.name}
          />

          <div className="flex flex-col justify-between md:p-4 leading-normal text-white">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
              {item.name}
            </h5>

            <p className="mb-1 opacity-90">{item.email}</p>
            <p className="opacity-80 mb-6 text-body">
              Role: {item.role}
            </p>

            <button
              type="button"
              className="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium rounded-base text-sm px-4 py-2.5"
            >
              Read more
              <svg
                className="w-4 h-4 ms-1.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
