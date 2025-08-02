'use client';
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Orders from './orders/page';

const VendorDashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-[#FCF9F2] py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center bg-white rounded-2xl shadow-sm px-6 py-4">
          <h1 className="text-2xl font-medium text-gray-900 font-geist">
            Vendor Dashboard
          </h1>
          <UserButton />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-medium text-gray-900 mb-4 font-geist">
              Welcome, {user?.firstName || 'Vendor'}!
            </h2>
            <p className="text-lg text-gray-600 font-geist">
              Discover and purchase quality scrap materials from verified sellers.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#EBF0DD] rounded-xl p-6 text-center border border-[#DFE6D3]">
              <h3 className="text-xl font-medium text-gray-900 mb-2 font-geist">
                Browse Scrap
              </h3>
              <p className="text-gray-600 mb-4 font-geist text-sm">
                Explore available scrap materials from sellers
              </p>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-geist font-medium hover:bg-gray-800 transition-all">
                Browse Items
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-2 font-geist">
                Manage Orders
              </h3>
              <p className="text-gray-600 mb-4 font-geist text-sm">
                Track your purchases and deliveries
              </p>
              <Link href="/dashboard/vendor/orders">
                <button className="bg-[#8BC34A] text-white px-6 py-2 rounded-lg font-geist font-medium hover:bg-[#7CB342] transition-all">
                  View Orders
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-2 font-geist">
                Analytics
              </h3>
              <p className="text-gray-600 mb-4 font-geist text-sm">
                View your purchase history and spending
              </p>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-geist font-medium hover:bg-gray-800 transition-all">
                View Analytics
              </button>
            </div>
          </div>

          {/* Inventory Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4 font-geist">
                Inventory Overview
              </h3>
              <p className="text-gray-600 font-geist">
                No inventory items yet. Start by purchasing your first scrap materials!
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4 font-geist">
                Recent Purchases
              </h3>
              <p className="text-gray-600 font-geist">
                No recent purchases. Browse available scrap to get started!
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <div className="text-2xl font-bold text-gray-900 font-geist">0</div>
              <div className="text-sm text-gray-600 font-geist">Total Orders</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <div className="text-2xl font-bold text-gray-900 font-geist">₹0</div>
              <div className="text-sm text-gray-600 font-geist">Total Spent</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <div className="text-2xl font-bold text-gray-900 font-geist">0</div>
              <div className="text-sm text-gray-600 font-geist">Active Orders</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <div className="text-2xl font-bold text-gray-900 font-geist">0</div>
              <div className="text-sm text-gray-600 font-geist">Saved Items</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
