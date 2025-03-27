import React from 'react';
import { 
  Bell, AlertTriangle, AlertCircle, Info, 
  Filter, Search, Download 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Alert {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  date: string;
  severity: 'critical' | 'warning' | 'info';
  source: string;
  sourceType: 'battery' | 'charger' | 'system';
  acknowledged: boolean;
}

// Sample data
const alerts: Alert[] = [
  {
    id: 'ALT-001',
    title: 'High String Voltage Alert',
    description: 'Battery Bank 1 voltage exceeded the threshold of 49V. Current value: 49.2V.',
    timestamp: '10:15 AM',
    date: 'Today',
    severity: 'critical',
    source: 'Battery Bank 1',
    sourceType: 'battery',
    acknowledged: false,
  },
  {
    id: 'ALT-002',
    title: 'High Cell Temperature Warning',
    description: 'Cell 4 in Battery Bank 2 temperature is approaching critical level (28.5°C).',
    timestamp: '09:30 AM',
    date: 'Today',
    severity: 'warning',
    source: 'Battery Bank 2',
    sourceType: 'battery',
    acknowledged: false,
  },
  {
    id: 'ALT-003',
    title: 'Connection Restored',
    description: 'Connection to Battery Bank 3 has been restored after 5 minutes of downtime.',
    timestamp: '08:45 AM',
    date: 'Today',
    severity: 'info',
    source: 'System',
    sourceType: 'system',
    acknowledged: true,
  },
  {
    id: 'ALT-004',
    title: 'Charger Output Voltage Fluctuation',
    description: 'Charger 1 output voltage is fluctuating. Recorded values: 47.2V, 48.5V, 47.8V in the last 15 minutes.',
    timestamp: '03:20 PM',
    date: 'Yesterday',
    severity: 'warning',
    source: 'Charger 1',
    sourceType: 'charger',
    acknowledged: true,
  },
  {
    id: 'ALT-005',
    title: 'Low String Current',
    description: 'Battery Bank 2 current dropped below the minimum threshold. Current value: 5.2A.',
    timestamp: '01:15 PM',
    date: 'Yesterday',
    severity: 'warning',
    source: 'Battery Bank 2',
    sourceType: 'battery',
    acknowledged: true,
  },
  {
    id: 'ALT-006',
    title: 'System Maintenance',
    description: 'Scheduled system maintenance completed successfully.',
    timestamp: '09:00 AM',
    date: 'Yesterday',
    severity: 'info',
    source: 'System',
    sourceType: 'system',
    acknowledged: true,
  },
  {
    id: 'ALT-007',
    title: 'Input Mains Failure',
    description: 'Input mains power failure detected for Charger 2. System switched to battery power.',
    timestamp: '11:45 AM',
    date: '2 days ago',
    severity: 'critical',
    source: 'Charger 2',
    sourceType: 'charger',
    acknowledged: true,
  },
];

const getSeverityIcon = (severity: Alert['severity'], className = 'h-5 w-5') => {
  switch (severity) {
    case 'critical':
      return <AlertCircle className={`text-status-critical ${className}`} />;
    case 'warning':
      return <AlertTriangle className={`text-status-warning ${className}`} />;
    case 'info':
      return <Info className={`text-status-normal ${className}`} />;
  }
};

const getSeverityBadge = (severity: Alert['severity']) => {
  switch (severity) {
    case 'critical':
      return (
        <Badge variant="destructive" className="rounded-sm">Critical</Badge>
      );
    case 'warning':
      return (
        <Badge variant="outline" className="text-status-warning border-status-warning rounded-sm">
          Warning
        </Badge>
      );
    case 'info':
      return (
        <Badge variant="outline" className="text-status-normal border-status-normal rounded-sm">
          Info
        </Badge>
      );
  }
};

const Alerts: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('all');
  
  const filteredAlerts = alerts.filter(alert => {
    // Filter by search query
    const matchesSearch = 
      alert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      alert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.source.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by tab
    const matchesTab = 
      activeTab === 'all' || 
      (activeTab === 'unacknowledged' && !alert.acknowledged) ||
      (activeTab === 'critical' && alert.severity === 'critical') ||
      (activeTab === 'warning' && alert.severity === 'warning') ||
      (activeTab === 'info' && alert.severity === 'info');
    
    return matchesSearch && matchesTab;
  });
  
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Alerts & Notifications</h1>
        <p className="text-muted-foreground">View and manage system alerts and notifications</p>
      </div>
      
      <Card>
        <CardHeader className="py-4 px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-scope-orange" />
              <span>System Alerts</span>
              <Badge variant="outline" className="ml-2">{alerts.length} total</Badge>
            </CardTitle>
            
            <div className="flex items-center gap-2">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search alerts..."
                  className="pl-8 w-full sm:w-[200px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="font-medium">Filter Alerts</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>Show Acknowledged</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked>Show Unacknowledged</DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Clear Filters</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="px-0 py-0">
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <div className="border-b px-6">
              <TabsList className="w-full justify-start rounded-none border-b-0 bg-transparent p-0">
                <TabsTrigger
                  value="all"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="unacknowledged"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Unacknowledged
                </TabsTrigger>
                <TabsTrigger
                  value="critical"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Critical
                </TabsTrigger>
                <TabsTrigger
                  value="warning"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Warning
                </TabsTrigger>
                <TabsTrigger
                  value="info"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Info
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="pt-0 mt-0">
              <div className="max-h-[600px] overflow-y-auto">
                {filteredAlerts.length === 0 ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center text-muted-foreground">
                    <Bell className="h-10 w-10 mb-2 text-muted-foreground/50" />
                    <p>No alerts found matching your criteria</p>
                    <Button 
                      variant="link" 
                      className="mt-2" 
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Group alerts by date */}
                    {['Today', 'Yesterday', '2 days ago'].map(date => {
                      const dateAlerts = filteredAlerts.filter(alert => alert.date === date);
                      if (dateAlerts.length === 0) return null;
                      
                      return (
                        <div key={date}>
                          <div className="px-6 py-2 bg-muted/30 border-y">
                            <span className="text-sm font-medium">{date}</span>
                          </div>
                          {dateAlerts.map((alert) => (
                            <div 
                              key={alert.id}
                              className={`px-6 py-4 border-b hover:bg-gray-50 transition-colors ${!alert.acknowledged ? 'bg-scope-light/30' : ''}`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="pt-0.5">
                                  {getSeverityIcon(alert.severity)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
                                    <h4 className="text-sm font-medium">{alert.title}</h4>
                                    <div className="flex items-center gap-2">
                                      {getSeverityBadge(alert.severity)}
                                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <Badge variant="outline" className="font-normal">
                                        {alert.source}
                                      </Badge>
                                      <Badge variant="secondary" className="font-normal">
                                        {alert.id}
                                      </Badge>
                                    </div>
                                    {!alert.acknowledged && (
                                      <Button size="sm" variant="outline">
                                        Acknowledge
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="unacknowledged" className="pt-0 mt-0">
              <div className="max-h-[600px] overflow-y-auto">
                {filteredAlerts.length === 0 ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center text-muted-foreground">
                    <Bell className="h-10 w-10 mb-2 text-muted-foreground/50" />
                    <p>No unacknowledged alerts found</p>
                    <Button 
                      variant="link" 
                      className="mt-2" 
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                      }}
                    >
                      View all alerts
                    </Button>
                  </div>
                ) : (
                  <>
                    {['Today', 'Yesterday', '2 days ago'].map(date => {
                      const dateAlerts = filteredAlerts.filter(alert => alert.date === date);
                      if (dateAlerts.length === 0) return null;
                      
                      return (
                        <div key={date}>
                          <div className="px-6 py-2 bg-muted/30 border-y">
                            <span className="text-sm font-medium">{date}</span>
                          </div>
                          {dateAlerts.map((alert) => (
                            <div 
                              key={alert.id}
                              className={`px-6 py-4 border-b hover:bg-gray-50 transition-colors ${!alert.acknowledged ? 'bg-scope-light/30' : ''}`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="pt-0.5">
                                  {getSeverityIcon(alert.severity)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
                                    <h4 className="text-sm font-medium">{alert.title}</h4>
                                    <div className="flex items-center gap-2">
                                      {getSeverityBadge(alert.severity)}
                                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <Badge variant="outline" className="font-normal">
                                        {alert.source}
                                      </Badge>
                                      <Badge variant="secondary" className="font-normal">
                                        {alert.id}
                                      </Badge>
                                    </div>
                                    {!alert.acknowledged && (
                                      <Button size="sm" variant="outline">
                                        Acknowledge
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="critical" className="pt-0 mt-0">
              <div className="max-h-[600px] overflow-y-auto">
                {filteredAlerts.length === 0 ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center text-muted-foreground">
                    <Bell className="h-10 w-10 mb-2 text-muted-foreground/50" />
                    <p>No critical alerts found</p>
                    <Button 
                      variant="link" 
                      className="mt-2" 
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                      }}
                    >
                      View all alerts
                    </Button>
                  </div>
                ) : (
                  <>
                    {['Today', 'Yesterday', '2 days ago'].map(date => {
                      const dateAlerts = filteredAlerts.filter(alert => alert.date === date);
                      if (dateAlerts.length === 0) return null;
                      
                      return (
                        <div key={date}>
                          <div className="px-6 py-2 bg-muted/30 border-y">
                            <span className="text-sm font-medium">{date}</span>
                          </div>
                          {dateAlerts.map((alert) => (
                            <div 
                              key={alert.id}
                              className={`px-6 py-4 border-b hover:bg-gray-50 transition-colors ${!alert.acknowledged ? 'bg-scope-light/30' : ''}`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="pt-0.5">
                                  {getSeverityIcon(alert.severity)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
                                    <h4 className="text-sm font-medium">{alert.title}</h4>
                                    <div className="flex items-center gap-2">
                                      {getSeverityBadge(alert.severity)}
                                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <Badge variant="outline" className="font-normal">
                                        {alert.source}
                                      </Badge>
                                      <Badge variant="secondary" className="font-normal">
                                        {alert.id}
                                      </Badge>
                                    </div>
                                    {!alert.acknowledged && (
                                      <Button size="sm" variant="outline">
                                        Acknowledge
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="warning" className="pt-0 mt-0">
              <div className="max-h-[600px] overflow-y-auto">
                {filteredAlerts.length === 0 ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center text-muted-foreground">
                    <Bell className="h-10 w-10 mb-2 text-muted-foreground/50" />
                    <p>No warning alerts found</p>
                    <Button 
                      variant="link" 
                      className="mt-2" 
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                      }}
                    >
                      View all alerts
                    </Button>
                  </div>
                ) : (
                  <>
                    {['Today', 'Yesterday', '2 days ago'].map(date => {
                      const dateAlerts = filteredAlerts.filter(alert => alert.date === date);
                      if (dateAlerts.length === 0) return null;
                      
                      return (
                        <div key={date}>
                          <div className="px-6 py-2 bg-muted/30 border-y">
                            <span className="text-sm font-medium">{date}</span>
                          </div>
                          {dateAlerts.map((alert) => (
                            <div 
                              key={alert.id}
                              className={`px-6 py-4 border-b hover:bg-gray-50 transition-colors ${!alert.acknowledged ? 'bg-scope-light/30' : ''}`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="pt-0.5">
                                  {getSeverityIcon(alert.severity)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
                                    <h4 className="text-sm font-medium">{alert.title}</h4>
                                    <div className="flex items-center gap-2">
                                      {getSeverityBadge(alert.severity)}
                                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <Badge variant="outline" className="font-normal">
                                        {alert.source}
                                      </Badge>
                                      <Badge variant="secondary" className="font-normal">
                                        {alert.id}
                                      </Badge>
                                    </div>
                                    {!alert.acknowledged && (
                                      <Button size="sm" variant="outline">
                                        Acknowledge
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="info" className="pt-0 mt-0">
              <div className="max-h-[600px] overflow-y-auto">
                {filteredAlerts.length === 0 ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center text-muted-foreground">
                    <Bell className="h-10 w-10 mb-2 text-muted-foreground/50" />
                    <p>No info alerts found</p>
                    <Button 
                      variant="link" 
                      className="mt-2" 
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                      }}
                    >
                      View all alerts
                    </Button>
                  </div>
                ) : (
                  <>
                    {['Today', 'Yesterday', '2 days ago'].map(date => {
                      const dateAlerts = filteredAlerts.filter(alert => alert.date === date);
                      if (dateAlerts.length === 0) return null;
                      
                      return (
                        <div key={date}>
                          <div className="px-6 py-2 bg-muted/30 border-y">
                            <span className="text-sm font-medium">{date}</span>
                          </div>
                          {dateAlerts.map((alert) => (
                            <div 
                              key={alert.id}
                              className={`px-6 py-4 border-b hover:bg-gray-50 transition-colors ${!alert.acknowledged ? 'bg-scope-light/30' : ''}`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="pt-0.5">
                                  {getSeverityIcon(alert.severity)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
                                    <h4 className="text-sm font-medium">{alert.title}</h4>
                                    <div className="flex items-center gap-2">
                                      {getSeverityBadge(alert.severity)}
                                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <Badge variant="outline" className="font-normal">
                                        {alert.source}
                                      </Badge>
                                      <Badge variant="secondary" className="font-normal">
                                        {alert.id}
                                      </Badge>
                                    </div>
                                    {!alert.acknowledged && (
                                      <Button size="sm" variant="outline">
                                        Acknowledge
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;
