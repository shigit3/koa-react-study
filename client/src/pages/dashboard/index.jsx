import { Button, Message } from "@arco-design/web-react";
import request from "@/utils/http.js";
import reactLogo from "@/assets/react.svg";
import "./index.css";

const Dashboard = () => {
  const handleClick = async () => {
    const response = await request.get("/auth/verify");
    if (response.status === 200) {
      if (response.data.success) {
        Message.success(response.data.message);
      } else {
        Message.error(response.data.message);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* <h1>Dashboard</h1> */}
      <img src={reactLogo} className="logo react" alt="React Logo" />
      <div className="w-1/2 mt-8">
        <Button type="outline" long onClick={handleClick}>
          Click!
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
