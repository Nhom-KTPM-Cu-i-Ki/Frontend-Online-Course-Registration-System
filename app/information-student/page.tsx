import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

function InformationStudent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="" role="information-left-student"></div>
        <div className="" role="image-student">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="" role="action">
          <div>Thông tin sinh viên</div>
          <div>Đăng ký học phần</div>
        </div>
      </div>
      <div className="" role="courses-registration">
        <div className="" role="header">
          Dang ky hoc phan
        </div>
        <div className="" role="table"></div>
      </div>
      <div className="" role="class-registration"></div>
      <div className="" role="detail-class-registration"></div>
      <div className="" role="registrated courses"></div>
    </div>
  );
}

export default InformationStudent;
