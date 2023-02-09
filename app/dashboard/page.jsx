import Breadcrumb from "@/components/Common/Breadcrumb";
import Dashlayout from "@/components/Dashboard/dashlayout";
import PageShell from "@/components/Dashboard/pageShell";


const Dashboard = () => {
  return (
    <>
  
  <div class="flex">
      <div class="w-1/6 bg-gray-300">
        <Dashlayout />
      </div>
      <div class="w-5/6 bg-gray-200">
        <PageShell />
      </div>
    </div>
   
  

    </>
  );
};

export default Dashboard;
