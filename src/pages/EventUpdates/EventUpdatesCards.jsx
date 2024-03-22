import { useSelector, useDispatch } from "react-redux";
import { fetchNotifications } from "../../store/notificationSlice";
import { MdOutlineWifiOff } from "react-icons/md";

const EventUpdatesCards = () => {
  const dispatch = useDispatch();

  const notificationError = useSelector((state) => state.notification.error);
  const notificationStatus = useSelector((state) => state.notification.status);
  const notificationData = useSelector((state) => state.notification.data);

  if (notificationStatus !== "loaded") {
    return (
      <div className="w-full h-screen flex items-center justify-center gap-3 flex-col">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        <h1 className="text-lg font-semibold">Loading.....</h1>
      </div>
    );
  }

  if (notificationError) {
    return (
      <div className="w-full h-screen flex items-center justify-center gap-3 flex-col">
        <MdOutlineWifiOff size={32} />
        <h1 className="text-xl font-semibold">
          Error Occurred while fetching Event Updates
        </h1>
        <button
          onClick={() => {
            dispatch(fetchNotifications());
          }}
          className="px-5 py-2 border border-gray-500 bg-black hover:bg-white hover:text-black rounded text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="mt-14 pb-10 w-full max-w-7xl mx-auto">
      {notificationData && (
        <>
          {notificationData.map((note, index) => (
            <div key={index} className="grid grid-cols-12 my-10">
              <div className="col-span-1"></div>
              <div
                className={`col-span-3 ${
                  (index + 1) % 2 === 0 ? "order-2" : "order-1"
                } max-md:col-span-12 max-md:order-1`}
              >
                <img
                  src={note.picturePath}
                  alt="this is test"
                  className="w-[250px] h-[250px] p-3"
                />
              </div>
              <div
                className={`col-span-7 ${
                  (index + 1) % 2 === 0 ? "order-1" : "order-2"
                } max-md:order-2 max-md:col-span-12 py-3 max-md:px-3 w-full flex items-start justify-start flex-col`}
              >
                <h1 className="text-3xl max-md:text-center mb-2 w-full">
                  {note.heading}
                </h1>
                <p className="text-base max-md:text-center mb-1">
                  <div dangerouslySetInnerHTML={{ __html: note.info }} />
                </p>
                <a
                  href={note.link}
                  className="underline text-sm text-blue-800 w-full my-2 max-md:text-center"
                >
                  Click Here
                </a>
              </div>
              <div className="col-span-1"></div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default EventUpdatesCards;
