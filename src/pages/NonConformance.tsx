import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Calendar, 
  Clock, 
  User, 
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  CheckCircle,
  XCircle
} from 'lucide-react';

const NonConformance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const nonConformances = [
    {
      id: 'NC-2024-001',
      title: 'Material Inspection Failure',
      description: 'Incoming material did not meet specification requirements',
      severity: 'major',
      status: 'open',
      reportedBy: 'John Smith',
      assignedTo: 'Sarah Johnson',
      reportedDate: '2024-01-15',
      dueDate: '2024-01-30',
      category: 'material',
      rootCause: 'Supplier quality issue',
    },
    {
      id: 'NC-2024-002',
      title: 'Process Documentation Missing',
      description: 'Work instruction not available at workstation',
      severity: 'minor',
      status: 'in-progress',
      reportedBy: 'Mike Davis',
      assignedTo: 'Lisa Wilson',
      reportedDate: '2024-01-12',
      dueDate: '2024-01-25',
      category: 'documentation',
      rootCause: 'Document control process gap',
    },
    {
      id: 'NC-2024-003',
      title: 'Calibration Overdue',
      description: 'Measuring equipment calibration expired',
      severity: 'major',
      status: 'closed',
      reportedBy: 'Lisa Wilson',
      assignedTo: 'John Smith',
      reportedDate: '2024-01-08',
      dueDate: '2024-01-20',
      category: 'equipment',
      rootCause: 'Calibration schedule not followed',
    },
    {
      id: 'NC-2024-004',
      title: 'Training Record Incomplete',
      description: 'Employee training records not up to date',
      severity: 'minor',
      status: 'open',
      reportedBy: 'Sarah Johnson',
      assignedTo: 'Mike Davis',
      reportedDate: '2024-01-10',
      dueDate: '2024-01-28',
      category: 'training',
      rootCause: 'Training tracking system issue',
    },
    {
      id: 'NC-2024-005',
      title: 'Product Dimension Out of Tolerance',
      description: 'Final inspection found dimensional non-conformance',
      severity: 'critical',
      status: 'in-progress',
      reportedBy: 'John Smith',
      assignedTo: 'Sarah Johnson',
      reportedDate: '2024-01-18',
      dueDate: '2024-01-22',
      category: 'product',
      rootCause: 'Machine setup error',
    },
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'open', label: 'Open' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'closed', label: 'Closed' },
  ];

  const filteredNonConformances = nonConformances.filter(nc => {
    const matchesSearch = nc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nc.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || nc.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-red-100 text-red-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'major':
        return 'bg-orange-100 text-orange-800';
      case 'minor':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'material':
        return 'bg-blue-100 text-blue-800';
      case 'documentation':
        return 'bg-purple-100 text-purple-800';
      case 'equipment':
        return 'bg-indigo-100 text-indigo-800';
      case 'training':
        return 'bg-green-100 text-green-800';
      case 'product':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isOverdue = (dueDate: string, status: string) => {
    if (status === 'closed') return false;
    return new Date(dueDate) < new Date();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Non-Conformance Management</h1>
          <p className="mt-2 text-gray-600">
            Track and manage quality non-conformances and corrective actions
          </p>
        </div>
        <button className="btn-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Report Non-Conformance
        </button>
      </div>

      {/* Search and Filter */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search non-conformances..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Filter className="h-4 w-4 text-gray-400 mr-2" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Non-Conformance Statistics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Open</p>
              <p className="text-2xl font-semibold text-gray-900">
                {nonConformances.filter(nc => nc.status === 'open').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-semibold text-gray-900">
                {nonConformances.filter(nc => nc.status === 'in-progress').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Closed</p>
              <p className="text-2xl font-semibold text-gray-900">
                {nonConformances.filter(nc => nc.status === 'closed').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-2xl font-semibold text-gray-900">
                {nonConformances.filter(nc => isOverdue(nc.dueDate, nc.status)).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Non-Conformances Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID / Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredNonConformances.map((nc) => (
                <tr key={nc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {nc.id}
                        </div>
                        <div className="text-sm text-gray-500">
                          {nc.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getSeverityColor(nc.severity)}`}>
                      {nc.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(nc.status)}`}>
                      {nc.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getCategoryColor(nc.category)}`}>
                      {nc.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {nc.assignedTo}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className={`flex items-center ${isOverdue(nc.dueDate, nc.status) ? 'text-red-600' : ''}`}>
                      <Calendar className="h-4 w-4 mr-1" />
                      {nc.dueDate}
                      {isOverdue(nc.dueDate, nc.status) && (
                        <AlertTriangle className="h-4 w-4 ml-1" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Non-Conformances */}
      <div className="card">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Non-Conformances</h3>
        <div className="space-y-4">
          {nonConformances
            .sort((a, b) => new Date(b.reportedDate).getTime() - new Date(a.reportedDate).getTime())
            .slice(0, 3)
            .map((nc) => (
              <div key={nc.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      nc.severity === 'critical' ? 'bg-red-100' :
                      nc.severity === 'major' ? 'bg-orange-100' :
                      'bg-yellow-100'
                    }`}>
                      <AlertTriangle className={`h-5 w-5 ${
                        nc.severity === 'critical' ? 'text-red-600' :
                        nc.severity === 'major' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-medium text-gray-900">{nc.id}</h4>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getSeverityColor(nc.severity)}`}>
                        {nc.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-900 mb-1">{nc.title}</p>
                    <p className="text-sm text-gray-500 mb-2">{nc.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Reported: {nc.reportedDate}</span>
                      <span>Due: {nc.dueDate}</span>
                      <span>Assigned to: {nc.assignedTo}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(nc.status)}`}>
                    {nc.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NonConformance;