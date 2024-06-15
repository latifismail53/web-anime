"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
const Searchbar = () => {
  const inputRef = useRef();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = inputRef.current.value;
    router.push(`/search/${query}`);
  };

  return (
    <div className="flex items-baseline space-x-20 lg:space-x-4">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative">
        <form class="flex items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            class="block w-full p-2 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search ..."
            ref={inputRef}
            required
          />
          <button
            type="submit"
            onInput={handleSubmit}
            onClick={handleSubmit}
            class="text-white absolute end-0 bottom-1 top-1 focus:ring-4font-medium rounded-lg text-sm px-4 py-2 "
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
