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

const Index = () => {
  const [showJoinSteps, setShowJoinSteps] = useState(false);

  const handleJoinTeam = () => {
    setShowJoinSteps(true);
  };

  const handleEmailRedirect = () => {
    window.location.href = "mailto:careers@impactsalesgroup.net?subject=Application - Door to Door Sales";
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
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#why-choose" className="text-foreground hover:text-primary transition-colors font-medium">Results</a>
              <a href="#join" className="text-foreground hover:text-primary transition-colors font-medium">Careers</a>
              <a href="/for-clients" className="text-foreground hover:text-primary transition-colors font-medium">For Clients</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-6 text-sm font-semibold px-4 py-2">
            🏆 #1 Direct Sales Team in Ontario
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 gradient-text leading-tight break-words">
            Direct Sales Excellence<br className="hidden sm:block" />
            <span className="block sm:inline">Real Results</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            We're the trusted door-to-door sales experts reaching 500+ households weekly with products and services that truly matter to families.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>25% higher conversion rates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>92% client retention</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Real human connections</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button size="lg" onClick={handleJoinTeam} className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-lg hover:shadow-xl btn-pulse transition-all duration-300 hover:scale-105">
              Start Your Sales Career
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 border-2 transition-all duration-300 hover:scale-105">
              <a href="/for-clients">Partner With Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Join Team Steps Modal */}
      {showJoinSteps && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <Card className="w-full max-w-lg shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Star className="h-6 w-6 text-primary" />
                Launch Your Sales Career Today
              </CardTitle>
              <CardDescription className="text-base">
                Join our top-performing team and start earning competitive commissions with full training and support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg">Apply in 2 Minutes</h3>
                  <p className="text-muted-foreground">Quick application with your contact details and experience</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg">Submit Your Documents</h3>
                  <p className="text-muted-foreground">Upload resume and any relevant sales experience</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg">Fast-Track Interview</h3>
                  <p className="text-muted-foreground">Same-day review and quick phone interview process</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg">Get Your Callback</h3>
                  <p className="text-muted-foreground">Our hiring team will contact you within 48 hours with next steps</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-sm font-medium text-center">💰 Earn $60K-$100K+ annually with our proven system</p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={handleEmailRedirect} className="flex-1 text-lg py-6 shadow-lg">
                  Apply Now
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => setShowJoinSteps(false)} className="px-6">
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16 px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 gradient-text break-words">Who We Are</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The authentic face-to-face sales experts bringing industry-leading products and services directly to Canadian families
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="card-hover border-2 border-primary/10 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:rotate-12">
                  <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <CardTitle className="text-lg lg:text-xl break-words">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Revolutionize door-to-door sales by building authentic human connections that deliver real value to every household we visit.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-secondary/20 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:rotate-12">
                  <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <CardTitle className="text-lg lg:text-xl break-words">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  To be Canada's most trusted face-to-face sales partner, known for integrity, innovation, and exceptional results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-primary/10 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:rotate-12">
                  <Award className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <CardTitle className="text-lg lg:text-xl break-words">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Authenticity in every conversation, excellence in every interaction, and genuine care for the families we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16 px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 gradient-text break-words">Our Services</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert direct sales solutions bringing valuable products and services directly to Canadian households
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="card-hover border-2 border-primary/10 bg-gradient-to-br from-card to-primary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Direct Sales</CardTitle>
                <CardDescription className="text-base">Face-to-face sales excellence for every customer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">25% higher conversion rates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Personalized consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Expert product knowledge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Follow-up support included</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-secondary/20 bg-gradient-to-br from-card to-secondary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Customer Success</CardTitle>
                <CardDescription className="text-base">Dedicated support throughout the entire process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">500+ satisfied customers monthly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Complete needs assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Ongoing relationship management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Post-sale follow-up support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-primary/10 bg-gradient-to-br from-card to-primary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tv className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Training & Development</CardTitle>
                <CardDescription className="text-base">Comprehensive training for sales excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">#1 training program in Ontario</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Advanced sales techniques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Ongoing mentorship program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Career advancement paths</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Proven Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results that speak for themselves - backed by data and client success stories
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="card-hover p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">25% Higher Conversions</h3>
              <p className="text-muted-foreground">Consistently outperform industry averages with proven face-to-face techniques</p>
            </div>
            
            <div className="card-hover p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl border border-secondary/20">
              <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">200+ Customers/Month</h3>
              <p className="text-muted-foreground">Delivering consistent results month after month for Rogers partnerships</p>
            </div>
            
            <div className="card-hover p-6 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl border border-primary/20">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">500+ Households Weekly</h3>
              <p className="text-muted-foreground">Extensive territory coverage across Ontario's key markets</p>
            </div>
            
            <div className="card-hover p-6 bg-gradient-to-br from-secondary/5 to-primary/10 rounded-xl border border-secondary/20">
              <div className="bg-gradient-to-r from-secondary to-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">92% Client Retention</h3>
              <p className="text-muted-foreground">Long-term partnerships built on trust, results, and authentic relationships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Partners Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Authorized Rogers partner specializing in door-to-door sales of phone plans, internet packages, and TV services across Ontario
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Authorized Partner Since 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>5-Star Service Rating</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Card className="card-hover bg-gradient-to-br from-background to-primary/5 p-10 border-2 border-primary/20 shadow-xl max-w-md">
              <div className="text-center">
                <img src={rogersLogo} alt="Rogers Communications" className="h-20 mx-auto object-contain mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Rogers Communications</h3>
                <p className="text-muted-foreground mb-4">Canada's Leading Telecommunications Provider</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>Mobile Phone Plans</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span>High-Speed Internet</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Tv className="h-4 w-4 text-primary" />
                    <span>Premium TV Packages</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gradient-to-br from-card to-primary/5 border-t-2 border-primary/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
                <img src={impactSalesLogo} alt="Impact Sales Group" className="h-12 w-12 object-contain" />
                <div className="text-center sm:text-left">
                  <span className="text-xl sm:text-2xl font-bold text-primary block">Impact Sales Group</span>
                  <p className="text-sm text-muted-foreground">Direct Sales Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
                Ontario's premier door-to-door sales specialists, connecting families with valuable products and services through authentic, face-to-face conversations that build lasting relationships.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <Button variant="outline" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
                  <a href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-4 text-primary">Contact Us</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:info@impactsalesgroup.net" className="hover:text-primary transition-colors break-all text-sm">
                    info@impactsalesgroup.net
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Users className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:careers@impactsalesgroup.net" className="hover:text-primary transition-colors break-all text-sm">
                    careers@impactsalesgroup.net
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Ontario, Canada</span>
                </div>
              </div>
            </div>
            
            {/* Services & Legal */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-4 text-primary">Our Services</h3>
              <div className="space-y-2 text-muted-foreground mb-6">
                <p className="hover:text-primary transition-colors cursor-pointer text-sm">Direct Sales</p>
                <p className="hover:text-primary transition-colors cursor-pointer text-sm">Customer Success</p>
                <p className="hover:text-primary transition-colors cursor-pointer text-sm">Training & Development</p>
                <p className="hover:text-primary transition-colors cursor-pointer text-sm">Sales Excellence</p>
              </div>
              
              <h4 className="font-semibold mb-2">Legal</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-1">
                  Privacy Policy
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a href="#" className="hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-1">
                  Terms of Service
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-primary/20 pt-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-center lg:text-left text-sm">
                &copy; 2025 Impact Sales Group. All rights reserved. | Direct Sales Excellence
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-secondary" />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;