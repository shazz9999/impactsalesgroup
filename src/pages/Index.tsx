import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Award, CheckCircle, Mail, Upload, FileText } from "lucide-react";
import { useState } from "react";
import impactSalesLogo from "@/assets/impact-sales-logo.png";

const Index = () => {
  const [showJoinSteps, setShowJoinSteps] = useState(false);

  const handleJoinTeam = () => {
    setShowJoinSteps(true);
  };

  const handleEmailRedirect = () => {
    window.location.href = "mailto:careers@impactsalesgroup.com?subject=Application - Door to Door Sales";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={impactSalesLogo} alt="Impact Sales Group" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold text-primary">Impact Sales Group</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#join" className="text-foreground hover:text-primary transition-colors">Careers</a>
              <a href="#clients" className="text-foreground hover:text-primary transition-colors">For Clients</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Professional Door-to-Door Sales
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
            Face-to-Face Sales That Drive Results
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We specialize in direct sales campaigns that build genuine connections and deliver measurable impact for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleJoinTeam} className="text-lg px-8">
              Join Our Team
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8">
              <a href="#clients">For Clients</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Join Team Steps Modal */}
      {showJoinSteps && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Join Our Team - Quick Steps
              </CardTitle>
              <CardDescription>
                Ready to start your sales career? Follow these simple steps:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Fill the Form</h3>
                  <p className="text-sm text-muted-foreground">Complete our quick application form with your basic information</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Upload Documents</h3>
                  <p className="text-sm text-muted-foreground">Submit your resume and cover letter</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Email Submission</h3>
                  <p className="text-sm text-muted-foreground">Your application will be sent directly to our team</p>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={handleEmailRedirect} className="flex-1">
                  Start Application
                </Button>
                <Button variant="outline" onClick={() => setShowJoinSteps(false)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Impact Sales Group</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To revolutionize door-to-door sales through authentic connections and proven strategies that drive real business growth.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading direct sales company that transforms how businesses connect with their customers face-to-face.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrity, excellence, and genuine relationship-building form the foundation of everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Door-to-Door Campaigns</CardTitle>
                <CardDescription>Direct engagement strategies that convert</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Residential outreach
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Business-to-business sales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Product demonstrations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Generation</CardTitle>
                <CardDescription>Quality prospects for your business</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Qualified lead identification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Follow-up coordination
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    CRM integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Territory Management</CardTitle>
                <CardDescription>Strategic market coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Market analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Route optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Performance tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Impact Sales Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Experienced professionals who know how to connect</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">Track record of successful campaigns</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Growth Focused</h3>
              <p className="text-muted-foreground">Strategies designed for sustainable growth</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">Committed to excellence in every interaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section id="clients" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For Our Clients</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how our direct sales approach can transform your business growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Client Satisfaction Matrix</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <span className="font-medium">Campaign Success Rate</span>
                  <Badge variant="secondary">85%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <span className="font-medium">Client Retention</span>
                  <Badge variant="secondary">92%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <span className="font-medium">ROI Improvement</span>
                  <Badge variant="secondary">+150%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <span className="font-medium">Customer Satisfaction</span>
                  <Badge variant="secondary">4.8/5</Badge>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Consultation</CardTitle>
                <CardDescription>
                  Let's discuss how we can help grow your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Ready to see real results? Our team is here to create a custom sales strategy for your business.
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:info@impactsalesgroup.com?subject=Consultation Request">
                    Schedule Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={impactSalesLogo} alt="Impact Sales Group" className="h-10 w-10 object-contain" />
                <span className="text-xl font-bold text-primary">Impact Sales Group</span>
              </div>
              <p className="text-muted-foreground">
                Transforming businesses through authentic door-to-door sales strategies.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: info@impactsalesgroup.com</p>
                <p>Careers: careers@impactsalesgroup.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Door-to-Door Sales</p>
                <p>Lead Generation</p>
                <p>Territory Management</p>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Impact Sales Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;