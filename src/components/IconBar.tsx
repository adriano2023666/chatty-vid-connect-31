import React from 'react';
import { MessageCircle, Gift, Share, Gamepad } from 'lucide-react';

const IconBar = () => {
  return (
    <div className="flex flex-col gap-4 fixed left-4 top-1/2 -translate-y-1/2">
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <MessageCircle className="w-6 h-6 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <Gift className="w-6 h-6 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <Share className="w-6 h-6 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <Gamepad className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default IconBar;