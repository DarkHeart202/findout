export default function TicketCard({ ticket, locale = "ar" }) {
  const isRtl = locale === "ar";

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-[0_0_11.7px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between">
      {/* القسم العلوي: العنوان والخط الفاصل */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-medium text-header ">
            {isRtl ? "التذكرة" : "Ticket"}
          </h2>
        </div>
        <hr className="border-slate-100 mb-6" />

        {/* تفاصيل التذكرة والسعر */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-base  font-semibold text-header">
            {isRtl ? "تذكرة عادية لمدة يوم" : "Standard 1-Day Ticket"}
          </span>
          <div className="flex items-center gap-1 font-bold text-orange-500 text-lg">
            <span className="text-base font-semibold">
              {ticket?.price || "120"}
            </span>
            <span className="text-xs font-normal">
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5859 9.66602C10.516 10.2317 10.4857 10.477 10.2246 11.0283L6.21289 11.8574C6.30511 11.2613 6.42811 10.8012 6.62793 10.5254L10.5859 9.66602ZM4.99805 5.76367L6.19727 5.50391V1.71582C6.64389 1.21448 6.91887 0.989672 7.45801 0.705078V5.23047L10.5859 4.55176C10.516 5.11728 10.4858 5.36264 10.2246 5.91406L7.45801 6.49805V7.77051L10.5859 7.10938C10.516 7.67485 10.4858 7.92028 10.2246 8.47168L7.45801 9.04199V9.05469L6.19727 9.31543V6.76465L4.99805 7.01758V8.62598L4.97656 8.62988C4.70086 9.11324 4.3125 9.69471 3.9375 10.1582L0 10.9072C0.0353043 10.4008 0.108942 10.1155 0.337891 9.60547L3.73828 8.86719V7.28418L0.586914 7.95117C0.622227 7.44482 0.695824 7.15951 0.924805 6.64941L3.73828 6.03809V1.01074C4.18469 0.509673 4.45912 0.284496 4.99805 0V5.76367Z"
                  fill="#F58220"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* قائمة المميزات (المقاعد وحضور الفعالية) */}
        <div className="flex flex-col gap-4 mb-8">
          {/* ميزة 1 */}
          <div className="flex items-center  gap-3">
            <img src="/tic.png" className="w-5 h-5" alt="verifieds" />
            <span className="text-sm font-medium text-[#7d7d7d] ">
              {isRtl ? "مقاعد خلفية" : "Back Seats"}
            </span>
          </div>

          {/* ميزة 2 */}
          <div className="flex items-center  gap-3">
            <img src="/tic.png" className="w-5 h-5" alt="verifieds" />
            <span className="text-sm font-medium text-[#7d7d7d] ">
              {isRtl ? "حضور الفعالية كامله" : "Full Event Access"}
            </span>
          </div>
        </div>
      </div>

      {/* الزر السفلي (اشتري تذكرة عادية) */}
      <button className="w-full bg-main-blue hover:bg-blue-hover text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm">
        <span className="w-5 h-5 flex items-center justify-center">
          <svg
            width="20"
            height="100%"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_612_12718)">
              <path
                d="M1.49902 7.12524V3.00024C1.49902 2.80133 1.57804 2.61057 1.71869 2.46991C1.85935 2.32926 2.05011 2.25024 2.24902 2.25024H15.749C15.9479 2.25024 16.1387 2.32926 16.2794 2.46991C16.42 2.61057 16.499 2.80133 16.499 3.00024V7.12524C16.0017 7.12524 15.5248 7.32279 15.1732 7.67442C14.8216 8.02605 14.624 8.50296 14.624 9.00024C14.624 9.49752 14.8216 9.97444 15.1732 10.3261C15.5248 10.6777 16.0017 10.8752 16.499 10.8752V15.0002C16.499 15.1992 16.42 15.3899 16.2794 15.5306C16.1387 15.6712 15.9479 15.7502 15.749 15.7502H2.24902C2.05011 15.7502 1.85935 15.6712 1.71869 15.5306C1.57804 15.3899 1.49902 15.1992 1.49902 15.0002V10.8752C1.9963 10.8752 2.47322 10.6777 2.82485 10.3261C3.17648 9.97444 3.37402 9.49752 3.37402 9.00024C3.37402 8.50296 3.17648 8.02605 2.82485 7.67442C2.47322 7.32279 1.9963 7.12524 1.49902 7.12524ZM2.99902 5.97624C3.56243 6.25547 4.03663 6.68653 4.36815 7.22084C4.69968 7.75514 4.87534 8.37144 4.87534 9.00024C4.87534 9.62905 4.69968 10.2453 4.36815 10.7796C4.03663 11.314 3.56243 11.745 2.99902 12.0242V14.2502H14.999V12.0242C14.4356 11.745 13.9614 11.314 13.6299 10.7796C13.2984 10.2453 13.1227 9.62905 13.1227 9.00024C13.1227 8.37144 13.2984 7.75514 13.6299 7.22084C13.9614 6.68653 14.4356 6.25547 14.999 5.97624V3.75024H2.99902V5.97624ZM6.74902 6.75024H11.249V8.25024H6.74902V6.75024ZM6.74902 9.75024H11.249V11.2502H6.74902V9.75024Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_612_12718">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="font-semibold cursor-pointer text-base">
          {isRtl ? "اشتري تذكرة عادية" : "Buy Standard Ticket"}
        </span>
      </button>
    </div>
  );
}
