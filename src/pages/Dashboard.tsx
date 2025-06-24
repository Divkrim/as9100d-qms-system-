import React from 'react';
import { 
  FileText, 
  CheckSquare, 
  Users, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  Clock,
  Target
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Active Documents',
      value: '247',
      icon: FileText,
      change: '+12%',
      changeType: 'positive',
    },
    {
      name: 'Completed Audits',
      value: '18',
      icon: CheckSquare,
      change: '+4.75%',
      changeType: 'positive',
    },
    {
      name: 'Training Sessions',
      value: '32',
      icon: Users,
      change: '+54.02%',
      changeType: 'positive',
    },
    {
      name: 'Open Non-Conformances',
      value: '3',
      icon: AlertTriangle,
      change: '-19%',
      changeType: 'positive',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'audit',
      title: 'Internal Audit - Production Floor',
      time: '2 hours ago',
      status: 'completed',
    },
    {
      id: 2,
      type: 'document',
      title: 'Quality Manual v2.1 Updated',
      time: '4 hours ago',
      status: 'updated',
    },
    {
      id: 3,
      type: 'training',
      title: 'AS9100D Training Session',
      time: '1 day ago',
      status: 'scheduled',
    },
    {
      id: 4,
      type: 'non-conformance',
      title: 'Material Inspection Issue',
      time: '2 days ago',
      status: 'resolved',
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Quarterly Management Review',
      dueDate: '2024-01-15',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Supplier Audit - ABC Corp',
      dueDate: '2024-01-20',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Document Control Review',
      dueDate: '2024-01-25',
      priority: 'low',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to your AS9100D Quality Management System dashboard
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <p className={`ml-2 text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Recent Activities */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Recent Activities</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3">
                <div className={`flex-shrink-0 w-2 h-2 rounded-full ${
                  activity.status === 'completed' ? 'bg-green-400' :
                  activity.status === 'updated' ? 'bg-blue-400' :
                  activity.status === 'scheduled' ? 'bg-yellow-400' :
                  'bg-gray-400'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                  activity.status === 'updated' ? 'bg-blue-100 text-blue-800' :
                  activity.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Upcoming Tasks</h3>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <div className="flex items-center mt-1">
                    <Clock className="h-4 w-4 text-gray-400 mr-1" />
                    <p className="text-sm text-gray-500">{task.dueDate}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  task.priority === 'high' ? 'bg-red-100 text-red-800' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="btn-primary flex items-center justify-center">
            <FileText className="h-4 w-4 mr-2" />
            New Document
          </button>
          <button className="btn-primary flex items-center justify-center">
            <CheckSquare className="h-4 w-4 mr-2" />
            Schedule Audit
          </button>
          <button className="btn-primary flex items-center justify-center">
            <Users className="h-4 w-4 mr-2" />
            Add Training
          </button>
          <button className="btn-primary flex items-center justify-center">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Report Issue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;