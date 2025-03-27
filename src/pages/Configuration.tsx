
import React from 'react';
import { 
  Settings, Save, Battery, PlugZap, Bell, 
  Users, Smartphone, ServerCog 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from '@/components/ui/switch';

const Configuration: React.FC = () => {
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">System Configuration</h1>
        <p className="text-muted-foreground">Configure system parameters and settings</p>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader className="py-4 px-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-scope-orange" />
                <span>Configuration Settings</span>
              </CardTitle>
              
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="px-0 py-0">
            <Tabs defaultValue="battery">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="battery"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-6 py-3 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4" />
                    <span>Battery</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="charger"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-6 py-3 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <div className="flex items-center gap-2">
                    <PlugZap className="h-4 w-4" />
                    <span>Charger</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="alerts"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-6 py-3 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span>Alerts</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="users"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-6 py-3 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Users</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="system"
                  className="rounded-none border-b-2 border-transparent bg-transparent px-6 py-3 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <div className="flex items-center gap-2">
                    <ServerCog className="h-4 w-4" />
                    <span>System</span>
                  </div>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="battery" className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Battery Bank Configuration</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure battery bank parameters and thresholds
                    </p>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bankName">Bank Name</Label>
                          <Input id="bankName" defaultValue="Battery Bank 1" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bankLocation">Location</Label>
                          <Input id="bankLocation" defaultValue="Main Substation" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bankCapacity">Battery Capacity (Ah)</Label>
                          <Input id="bankCapacity" type="number" defaultValue="200" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bankVoltage">Nominal Voltage (V)</Label>
                          <Input id="bankVoltage" type="number" defaultValue="48" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cellCount">Number of Cells</Label>
                          <Input id="cellCount" type="number" defaultValue="24" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="installDate">Installation Date</Label>
                          <Input id="installDate" type="date" defaultValue="2023-01-15" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="manufacturerName">Manufacturer</Label>
                          <Input id="manufacturerName" defaultValue="SCOPE Battery Systems" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="modelNumber">Model Number</Label>
                          <Input id="modelNumber" defaultValue="SCP-48V-200AH" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Threshold Settings</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Set alarm and warning thresholds for the battery bank
                    </p>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="highVoltageWarning">High Voltage Warning (V)</Label>
                          <Input id="highVoltageWarning" type="number" step="0.1" defaultValue="53.0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="highVoltageAlarm">High Voltage Alarm (V)</Label>
                          <Input id="highVoltageAlarm" type="number" step="0.1" defaultValue="54.0" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="lowVoltageWarning">Low Voltage Warning (V)</Label>
                          <Input id="lowVoltageWarning" type="number" step="0.1" defaultValue="46.0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lowVoltageAlarm">Low Voltage Alarm (V)</Label>
                          <Input id="lowVoltageAlarm" type="number" step="0.1" defaultValue="44.0" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="highTempWarning">High Temperature Warning (°C)</Label>
                          <Input id="highTempWarning" type="number" step="0.1" defaultValue="35.0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="highTempAlarm">High Temperature Alarm (°C)</Label>
                          <Input id="highTempAlarm" type="number" step="0.1" defaultValue="40.0" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="highCurrentWarning">High Current Warning (A)</Label>
                          <Input id="highCurrentWarning" type="number" step="0.1" defaultValue="30.0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="highCurrentAlarm">High Current Alarm (A)</Label>
                          <Input id="highCurrentAlarm" type="number" step="0.1" defaultValue="40.0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="charger" className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Charger Configuration</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure charger parameters and settings
                    </p>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="chargerName">Charger Name</Label>
                          <Input id="chargerName" defaultValue="Charger 1" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="chargerLocation">Location</Label>
                          <Input id="chargerLocation" defaultValue="Main Substation" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="outputVoltage">Output Voltage (V)</Label>
                          <Input id="outputVoltage" type="number" step="0.1" defaultValue="48.0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="outputCurrent">Max Output Current (A)</Label>
                          <Input id="outputCurrent" type="number" step="0.1" defaultValue="30.0" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="chargerType">Charger Type</Label>
                          <Select defaultValue="constant">
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="constant">Constant Voltage</SelectItem>
                              <SelectItem value="threestage">Three-Stage</SelectItem>
                              <SelectItem value="intelligent">Intelligent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="manufacturerName">Manufacturer</Label>
                          <Input id="manufacturerName" defaultValue="SCOPE Power Systems" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Charger Thresholds</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Set alarm and warning thresholds for the charger
                    </p>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="inputHighVoltage">Input High Voltage (VAC)</Label>
                          <Input id="inputHighVoltage" type="number" defaultValue="250" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inputLowVoltage">Input Low Voltage (VAC)</Label>
                          <Input id="inputLowVoltage" type="number" defaultValue="180" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="outputHighVoltage">Output High Voltage (VDC)</Label>
                          <Input id="outputHighVoltage" type="number" step="0.1" defaultValue="56.0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="outputLowVoltage">Output Low Voltage (VDC)</Label>
                          <Input id="outputLowVoltage" type="number" step="0.1" defaultValue="42.0" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="highTemp">High Temperature (°C)</Label>
                          <Input id="highTemp" type="number" step="0.1" defaultValue="45.0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="overloadCurrent">Overload Current (A)</Label>
                          <Input id="overloadCurrent" type="number" step="0.1" defaultValue="35.0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="alerts" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Alert Configuration</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure alert settings and notifications
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-base font-medium">Notification Settings</h4>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="smsAlerts">SMS Alerts</Label>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Enable SMS notifications for critical alerts</span>
                            <Switch id="smsAlerts" defaultChecked />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="emailAlerts">Email Alerts</Label>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Enable email notifications for all alerts</span>
                            <Switch id="emailAlerts" defaultChecked />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Contact Numbers for SMS Alerts</Label>
                          <div className="space-y-2">
                            <div className="flex gap-2">
                              <Input placeholder="+1234567890" defaultValue="+911234567890" />
                              <Button variant="outline" className="flex-shrink-0">Remove</Button>
                            </div>
                            <div className="flex gap-2">
                              <Input placeholder="+1234567890" defaultValue="+919876543210" />
                              <Button variant="outline" className="flex-shrink-0">Remove</Button>
                            </div>
                            <div className="flex gap-2">
                              <Input placeholder="+1234567890" />
                              <Button variant="outline" className="flex-shrink-0">Add</Button>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Add up to 5 contact numbers for SMS alerts</p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="emailAddresses">Email Addresses</Label>
                          <div className="space-y-2">
                            <div className="flex gap-2">
                              <Input placeholder="email@example.com" defaultValue="admin@scope.com" />
                              <Button variant="outline" className="flex-shrink-0">Remove</Button>
                            </div>
                            <div className="flex gap-2">
                              <Input placeholder="email@example.com" defaultValue="operations@scope.com" />
                              <Button variant="outline" className="flex-shrink-0">Remove</Button>
                            </div>
                            <div className="flex gap-2">
                              <Input placeholder="email@example.com" />
                              <Button variant="outline" className="flex-shrink-0">Add</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-base font-medium">Alert Rules</h4>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="criticalAlertsOnly">Critical Alerts Only</Label>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Send SMS only for critical alerts</span>
                            <Switch id="criticalAlertsOnly" defaultChecked />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="alertFrequency">Alert Frequency</Label>
                          <Select defaultValue="immediate">
                            <SelectTrigger>
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate</SelectItem>
                              <SelectItem value="5min">Every 5 minutes</SelectItem>
                              <SelectItem value="15min">Every 15 minutes</SelectItem>
                              <SelectItem value="hourly">Hourly Digest</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-muted-foreground mt-1">How frequently alerts should be sent</p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="audibleAlarm">Audible Alarm</Label>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Enable local audible alarm for critical alerts</span>
                            <Switch id="audibleAlarm" defaultChecked />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="autoAcknowledge">Auto-Acknowledge</Label>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Automatically acknowledge resolved alerts</span>
                            <Switch id="autoAcknowledge" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="retentionPeriod">Alert Retention Period</Label>
                          <Select defaultValue="90days">
                            <SelectTrigger>
                              <SelectValue placeholder="Select period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="30days">30 days</SelectItem>
                              <SelectItem value="60days">60 days</SelectItem>
                              <SelectItem value="90days">90 days</SelectItem>
                              <SelectItem value="180days">180 days</SelectItem>
                              <SelectItem value="365days">1 year</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-muted-foreground mt-1">How long to keep alert history</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="users" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">User Management</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Manage users and access permissions
                    </p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Name</th>
                          <th className="text-left py-3 px-4 font-medium">Email</th>
                          <th className="text-left py-3 px-4 font-medium">Role</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                          <th className="text-right py-3 px-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">John Doe</td>
                          <td className="py-3 px-4">john.doe@scope.com</td>
                          <td className="py-3 px-4">Administrator</td>
                          <td className="py-3 px-4">
                            <span className="flex items-center">
                              <span className="h-2 w-2 rounded-full bg-status-normal mr-2"></span>
                              Active
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Jane Smith</td>
                          <td className="py-3 px-4">jane.smith@scope.com</td>
                          <td className="py-3 px-4">Operator</td>
                          <td className="py-3 px-4">
                            <span className="flex items-center">
                              <span className="h-2 w-2 rounded-full bg-status-normal mr-2"></span>
                              Active
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Mike Johnson</td>
                          <td className="py-3 px-4">mike.johnson@scope.com</td>
                          <td className="py-3 px-4">Viewer</td>
                          <td className="py-3 px-4">
                            <span className="flex items-center">
                              <span className="h-2 w-2 rounded-full bg-status-inactive mr-2"></span>
                              Inactive
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <Button className="mt-4">
                    <Users className="h-4 w-4 mr-2" />
                    Add New User
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="system" className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Settings</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure general system settings
                    </p>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="systemName">System Name</Label>
                        <Input id="systemName" defaultValue="SCOPE BMS System" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dataRefreshRate">Data Refresh Rate (seconds)</Label>
                        <Select defaultValue="60">
                          <SelectTrigger>
                            <SelectValue placeholder="Select refresh rate" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 seconds</SelectItem>
                            <SelectItem value="10">10 seconds</SelectItem>
                            <SelectItem value="30">30 seconds</SelectItem>
                            <SelectItem value="60">1 minute</SelectItem>
                            <SelectItem value="300">5 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dataLoggingInterval">Data Logging Interval (minutes)</Label>
                        <Select defaultValue="5">
                          <SelectTrigger>
                            <SelectValue placeholder="Select logging interval" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 minute</SelectItem>
                            <SelectItem value="5">5 minutes</SelectItem>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="UTC+5:30">
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="UTC+0">UTC</SelectItem>
                            <SelectItem value="UTC+5:30">UTC+5:30 (IST)</SelectItem>
                            <SelectItem value="UTC-5">UTC-5 (EST)</SelectItem>
                            <SelectItem value="UTC-8">UTC-8 (PST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                          <Switch id="maintenanceMode" />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          When enabled, alerts will be suppressed and data logging will continue
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Connectivity</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure network and communication settings
                    </p>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="communicationMode">Primary Communication Mode</Label>
                        <Select defaultValue="gsm">
                          <SelectTrigger>
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gsm">GSM/GPRS</SelectItem>
                            <SelectItem value="ethernet">Ethernet</SelectItem>
                            <SelectItem value="wifi">Wi-Fi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="apnSettings">APN Settings (for GSM/GPRS)</Label>
                        <Input id="apnSettings" defaultValue="internet" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="serverAddress">Server Address</Label>
                        <Input id="serverAddress" defaultValue="bms.scope.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="serverPort">Server Port</Label>
                        <Input id="serverPort" type="number" defaultValue="8080" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="dataEncryption">Data Encryption</Label>
                          <Switch id="dataEncryption" defaultChecked />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Enable secure encrypted data transmission
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Button>
                          <Smartphone className="h-4 w-4 mr-2" />
                          Test Connection
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Configuration;
