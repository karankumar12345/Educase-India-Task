import React from "react";

const Profile = () => {
  return (
    <div className="max-w-sm mx-auto border h-[900px] border-gray-200 rounded-md overflow-hidden bg-[#FAFAFA]">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-gray-800 text-lg font-medium">Account Settings</h2>
      </div>

      {/* Profile section */}
      <div className="flex items-start gap-4 p-4">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
            className="w-14 h-14 rounded-full object-cover"
          />
    
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Marry Doe</h3>
          <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
        </div>
      </div>

      {/* Bio */}
      <div className="px-4 pb-4 text-sm text-gray-700 leading-snug">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>

      {/* Bottom space */}
      <div className="h-48 border-t border-dashed border-gray-200"></div>
    </div>
  );
};

export default Profile;

