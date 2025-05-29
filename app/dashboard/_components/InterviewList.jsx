"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import InterviewItemCard from "./InterviewItemCard";
import { Skeleton } from "@/components/ui/skeleton";

const InterviewList = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(
        eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(MockInterview.id));

    console.log(result);
    setInterviewList(result);
  };
  return (
    <div>
      <h2 className="font-bold text-2xl text-foreground mb-2">
        Previous Mock Interviews
      </h2>
      <p className="text-muted-foreground mb-6">
        Review your past interviews and track your progress
      </p>

      {interviewList ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-3">
          {interviewList.length > 0 ? (
            interviewList.map((interview, index) => (
              <InterviewItemCard key={index} interview={interview} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <div className="bg-muted/50 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No interviews yet
                </h3>
                <p className="text-muted-foreground">
                  Create your first mock interview to get started!
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-3">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="w-full h-[200px] rounded-lg" />
          ))}
        </div>
      )}
    </div>
  );
};

export default InterviewList;
