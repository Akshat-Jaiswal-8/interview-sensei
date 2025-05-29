import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Head from "next/head";
import Contect from "./_components/Contect";
import Link from "next/link";
import {
  FaGithub,
  FaBrain,
  FaChartLine,
  FaFileAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Head>
        <title>Interview Sensei - Master Your Interviews with AI</title>
        <meta
          name="description"
          content="Master your next interview with AI-powered mock interviews and personalized feedback"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Header Section */}
        <header className="w-full py-6 bg-background/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FaBrain className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Interview Sensei
              </h1>
            </div>

            <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-between mt-4 md:mt-0 space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="ghost" size="sm" asChild>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Akshat-Jaiswal-8/interview-sensei"
                  className="flex items-center space-x-2"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </Button>

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="#features">Features</a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#testimonials">Testimonials</a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#contact">Contact</a>
                </Button>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 md:py-32 px-6">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            🚀 AI-Powered Interview Preparation
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Master Your Next
            <br />
            <span className="text-blue-600">Interview</span>
          </h2>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Practice with AI-powered mock interviews, get instant personalized
            feedback, and build the confidence you need to land your dream job.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <a href="/dashboard" className="flex items-center space-x-2">
                <span>Start Practicing</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-2"
              asChild
            >
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Features for Interview Success
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to prepare for your interviews with
                confidence and precision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaBrain className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    AI Mock Interviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    Experience realistic interview scenarios with our advanced
                    AI that adapts to your responses and provides challenging
                    questions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaChartLine className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    Instant Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    Get immediate, personalized feedback on your answers, body
                    language, and communication skills to improve continuously.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaFileAlt className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    Detailed Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    Receive comprehensive reports highlighting your strengths,
                    areas for improvement, and actionable insights.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-muted/30 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of successful candidates who improved their
                interview skills
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "Interview Sensei transformed my interview preparation. The
                    AI feedback was incredibly detailed and helped me identify
                    areas I never knew I needed to work on."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      AJ
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-card-foreground">
                        Alex Johnson
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Software Engineer at Google
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "The personalized feedback was spot-on and helped me improve
                    my communication skills significantly. I landed my dream job
                    after just two weeks of practice!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      SW
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-card-foreground">
                        Sarah Williams
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Product Manager at Meta
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-background px-6">
          <Contect />
        </section>
      </main>

      <footer className="py-8 bg-muted text-muted-foreground text-center">
        <div className="container mx-auto px-6">
          <p>© 2024 Interview Sensei. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default page;
