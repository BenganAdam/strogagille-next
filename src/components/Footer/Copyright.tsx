"use client";
export const Copyright = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="relative">
      <div className="after:bg-primary-yellow opacity-40 after:absolute after:top-0 after:h-[1px] after:w-32 after:left-1/2 after:-translate-x-1/2 "></div>
      <div className="flex justify-center items-center px-2 md:w-full w-72 mx-auto text-center ">
        <p className="text-sm opacity-60">
          © {thisYear}. Alla rättigheter reserverade enligt upphovsrättslagen.
        </p>
      </div>
    </div>
  );
};
