import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Target, TrendingUp, Award, CheckCircle, Mail, Upload, FileText, 
  Phone, Tv, Wifi, Star, Shield, Clock, MapPin, Quote, 
  Facebook, Twitter, Linkedin, Instagram, ExternalLink, ChevronRight
} from "lucide-react";
import { useState } from "react";
import impactSalesLogo from "@/assets/impact-sales-logo-red-black.png";
import rogersLogo from "@/assets/rogers-logo.svg";

const ForClients = () => {
  const [showForm, setShowForm] = useState(false);

  const handleScheduleConsultation = () => {
    setShowForm(true);
  };

  const handleEmailRedirect = () => {
    window.location.href = "mailto:partnerships@impactsalesgroup.net?subject=Partnership Inquiry";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={impactSalesLogo} alt="Impact Sales Group" className="h-12 w-12 object-contain" />
              <div>
                <span className="text-xl font-bold text-primary">Impact Sales Group</span>
                <p className="text-xs text-muted-foreground">Direct Sales Excellence</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="/#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="/#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="/#why-choose" className="text-foreground hover:text-primary transition-colors font-medium">Results</a>
              <a href="/#join" className="text-foreground hover:text-primary transition-colors font-medium">Careers</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-6 text-sm font-semibold px-4 py-2">
            🤝 Partner With Ontario's Best
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 gradient-text leading-tight break-words">
            Partner With Us<br className="hidden sm:block" />
            <span className="block sm:inline">Drive Your Sales</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Ontario's premier door-to-door sales specialists, connecting families with valuable products and services through authentic, face-to-face conversations that build lasting relationships.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>500+ households reached weekly</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>92% client retention rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Proven ROI results</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button size="lg" onClick={handleScheduleConsultation} className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-lg hover:shadow-xl btn-pulse transition-all duration-300 hover:scale-105">
              Schedule Free Consultation
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={handleEmailRedirect} className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 border-2 transition-all duration-300 hover:scale-105">
              Contact Partnership Team
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <Card className="w-full max-w-lg shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Star className="h-6 w-6 text-primary" />
                Schedule Your Free Consultation
              </CardTitle>
              <CardDescription className="text-base">
                Let's discuss how we can drive results for your business with our proven door-to-door sales strategies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg">Tell Us About Your Business</h3>
                  <p className="text-muted-foreground">Share your products, target market, and sales goals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg">Custom Strategy Session</h3>
                  <p className="text-muted-foreground">30-minute consultation to design your sales approach</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg">Proposal & Next Steps</h3>
                  <p className="text-muted-foreground">Receive detailed proposal with timeline and expectations</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-sm font-medium text-center">📈 Our clients see average 40% increase in sales within 90 days</p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={handleEmailRedirect} className="flex-1 text-lg py-6 shadow-lg">
                  Book Consultation
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)} className="px-6">
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Partnership Benefits Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16 px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 gradient-text break-words">Why Partner With Us</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proven door-to-door sales expertise that delivers measurable results for your business
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="card-hover border-2 border-primary/10 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:rotate-12">
                  <Target className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <CardTitle className="text-lg lg:text-xl break-words">Targeted Reach</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Access 500+ qualified households weekly with our strategic territory mapping and demographic targeting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-secondary/20 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:rotate-12">
                  <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <CardTitle className="text-lg lg:text-xl break-words">Proven Results</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  25% higher conversion rates and 92% client retention through our authentic relationship-building approach.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-primary/10 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:rotate-12">
                  <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <CardTitle className="text-lg lg:text-xl break-words">Full Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Complete campaign management from strategy to execution with dedicated account management and reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the companies that trust us to deliver exceptional door-to-door sales results
            </p>
          </div>
          
          <div className="flex justify-center items-center mb-16">
            <Card className="p-8 bg-gradient-to-r from-card to-secondary/5 border-2 border-primary/10">
              <div className="flex items-center gap-6">
                <img src={rogersLogo} alt="Rogers" className="h-12 w-auto object-contain" />
                <div className="text-left">
                  <p className="text-lg font-semibold text-primary">Rogers Communications</p>
                  <p className="text-sm text-muted-foreground">Exclusive Ontario Door-to-Door Partner</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Households Reached Weekly</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Client Retention Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">25%</div>
              <div className="text-sm text-muted-foreground">Higher Conversion Rates</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Average Sales Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Ready to Partner?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can drive measurable results for your business through proven door-to-door sales strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleScheduleConsultation} className="text-lg px-10 py-6">
                Schedule Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleEmailRedirect} className="text-lg px-10 py-6">
                Contact Us Directly
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/80 border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={impactSalesLogo} alt="Impact Sales Group" className="h-10 w-10 object-contain" />
                <span className="text-lg font-bold text-primary">Impact Sales Group</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ontario's premier door-to-door sales specialists delivering authentic results.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="/#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="/#services" className="block text-muted-foreground hover:text-primary transition-colors">Services</a>
                <a href="/#join" className="block text-muted-foreground hover:text-primary transition-colors">Careers</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>partnerships@impactsalesgroup.net</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Ottawa, Ontario, CA</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Impact Sales Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForClients;