"use client"
import Dashlayout from "@/components/Dashboard/dashlayout";
import DashNav from "@/components/Dashboard/dashnav";
import NavigationLinks from "@/components/Dashboard/navigation";
import PageShell from "@/components/Dashboard/pageShell";
import { Spacer } from "@nextui-org/react";


const Dashboard = () => {
  return (
    <>
    <DashNav />
    <div className="p-6">
    <Spacer y={2} />
    <NavigationLinks />
        <PageShell />
    </div>
   
   
  

    </>
  );
};

export default Dashboard;
