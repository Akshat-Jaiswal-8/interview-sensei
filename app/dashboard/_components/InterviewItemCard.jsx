import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { FaBriefcase, FaClock, FaPlay, FaChartLine } from "react-icons/fa";

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };
  const onFeedback = () => {
    router.push("/dashboard/interview/" + interview?.mockId + "/feedback");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
              <FaBriefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-card-foreground group-hover:text-blue-600 transition-colors">
                {interview?.jobPosition}
              </CardTitle>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {interview?.jobExperience} Years
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <FaClock className="w-3 h-3" />
          <span>Created: {formatDate(interview.createdAt)}</span>
        </div>

        <div className="flex gap-3 mt-4">
          <Button
            onClick={onFeedback}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center space-x-2"
          >
            <FaChartLine className="w-3 h-3" />
            <span>Feedback</span>
          </Button>
          <Button
            onClick={onStart}
            size="sm"
            className="flex-1 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <FaPlay className="w-3 h-3" />
            <span>Start</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterviewItemCard;
