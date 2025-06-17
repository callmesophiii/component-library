import React from 'react';
import type { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children,
}) => {
  return (
    <div className="border p-4 rounded shadow">
      <div className="flex items-center space-x-4">
        {user.avatarUrl && (
          <img src={user.avatarUrl} alt={`${user.name} avatar`} className="w-16 h-16 rounded-full" />
        )}
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          {showEmail && <p className="text-gray-600">{user.email}</p>}
          {showRole && <p className="text-gray-500 italic">{user.role}</p>}
        </div>
      </div>
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      )}
      {children}
    </div>
  );
};
