import { Button, Message } from "@arco-design/web-react";
import request from "@/utils/http.js";

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
      <h1>Dashboard</h1>
      <div className="w-1/2">
        <Button type="outline" long onClick={handleClick}>
          Click!
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
