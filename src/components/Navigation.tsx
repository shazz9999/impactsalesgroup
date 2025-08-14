import React from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  return (
    <div className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@impactsales.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(613) 284-6299</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                Impact Sales
              </div>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    HOME
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    ABOUT US
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-primary/10 text-primary font-medium">
                    SERVICES
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4 bg-background border rounded-lg shadow-lg">
                      <div className="grid gap-3">
                        <a href="#" className="block p-3 rounded-md hover:bg-muted transition-colors">
                          <div className="font-medium text-foreground">Sales Training</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Comprehensive sales training programs for your team
                          </div>
                        </a>
                        <a href="#" className="block p-3 rounded-md hover:bg-muted transition-colors">
                          <div className="font-medium text-foreground">Lead Generation</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Strategic lead generation and prospecting services
                          </div>
                        </a>
                        <a href="#" className="block p-3 rounded-md hover:bg-muted transition-colors">
                          <div className="font-medium text-foreground">Sales Consulting</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Expert consulting to optimize your sales process
                          </div>
                        </a>
                        <a href="#" className="block p-3 rounded-md hover:bg-muted transition-colors">
                          <div className="font-medium text-foreground">CRM Implementation</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Setup and optimization of customer relationship management
                          </div>
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    PRICING
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    CONTACT
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    OUR PARTNERS
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="outline" className="ml-4">
                    PAY NOW
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button className="ml-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    FREE CONSULTATION
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;