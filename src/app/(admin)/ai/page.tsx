"use client";
import React from "react";
import { BrainIcon } from "@/icons";

export default function AIPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            AI & Automation
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Artificial intelligence and automation tools
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
          <BrainIcon className="w-8 h-8" />
        </div>
      </div>

      {/* Coming Soon */}
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <BrainIcon className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI Features Coming Soon
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            We're working on exciting AI-powered features including intelligent automation, 
            predictive analytics, and smart recommendations.
          </p>
          
          {/* Feature Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              {
                title: "AI Assistant",
                description: "Intelligent chatbot for business queries",
                icon: "🤖"
              },
              {
                title: "Automation",
                description: "Smart workflow automation",
                icon: "⚡"
              },
              {
                title: "Predictions",
                description: "Predictive analytics and forecasting",
                icon: "🔮"
              },
              {
                title: "ML Models",
                description: "Custom machine learning models",
                icon: "🧠"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-gray-800 p-6 text-center"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
              Get Notified When Available
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}