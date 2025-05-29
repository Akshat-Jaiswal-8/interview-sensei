import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import { Badge } from "@/components/ui/badge";
import { FaBrain, FaRocket, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden  py-16 px-10">
        <div className="relative z-10">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300">
            <FaRocket className="w-3 h-3 mr-2" />
            AI-Powered Interview Platform
          </Badge>
          <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
            Create and start your AI mock interviews to boost your confidence
            and land your dream job.
          </p>
        </div>
      </div>

      <div className="px-10 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <FaBrain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  AI Interviews
                </h3>
                <p className="text-sm text-muted-foreground">
                  Start practicing now
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <FaChartLine className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  Progress Tracking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monitor improvement
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                <FaRocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  Instant Feedback
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get detailed insights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Create New Interview Section */}
        <div className="mb-8">
          <h2 className="font-bold text-2xl text-foreground mb-2">
            Create New Interview
          </h2>
          <p className="text-muted-foreground mb-6">
            Set up a new mock interview tailored to your target role
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AddNewInterview />
          </div>
        </div>

        <InterviewList />
      </div>
    </div>
  );
};

export default Dashboard;
