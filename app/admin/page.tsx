import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <div className="flex">
            <h1 className="text-5xl mb-10 md:mb-10  font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              CareDrive
            </h1>
            <div className="svg">
              <svg
                fill="#ddd200"
                width="50px"
                height="50px"
                viewBox="0 0 32 32"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M14.982,18.968l-2.012,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l2.012,0l-0,2.012c-0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l-0,-2.012l2.011,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-2.011,0l-0,-2.011c-0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l-0,2.011Z" />
                <path d="M15.53,11.993l-10.548,0c-0.553,0 -1,0.448 -1,1l-0,8.858c-0,3.406 2.608,6.136 5.773,6.136c0,-0 12.453,-0 12.453,-0c3.166,-0 5.774,-2.73 5.774,-6.136l-0,-8.858c-0,-0.552 -0.448,-1 -1,-1l-1.339,0c2.91,-5.038 2.308,-7.246 2.308,-7.246c-0.078,-0.349 -0.336,-0.629 -0.677,-0.736c-0,0 -1.046,-0.435 -3.313,0.688c-1.789,0.887 -4.552,2.867 -8.431,7.294Zm-9.548,2l20,0c-0,0 -0,7.858 -0,7.858c-0,2.263 -1.67,4.136 -3.774,4.136l-12.453,-0c-2.103,-0 -3.773,-1.873 -3.773,-4.136l-0,-7.858Zm17.326,-2c1.881,-2.993 2.463,-4.898 2.634,-5.91c-0.413,0.114 -0.965,0.318 -1.604,0.681c-1.456,0.826 -3.464,2.376 -6.116,5.229l5.086,0Z" />
              </svg>
            </div>
          </div>
        </Link>

        <p className="text-16-semibold gradient-text">Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">
            <span className="gradient-text">Welcome</span> 👋
          </h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          {/* <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          /> */}
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
