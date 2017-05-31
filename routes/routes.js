const ReportsController = require('../controllers/reports_controller');
const ServicesController = require('../controllers/services_controller');

module.exports = (app) => {
  app.get('/api', ReportsController.greeting);

  // User created reports
  app.post('/api/reports', ReportsController.userCreateReport);

  // Admin read all new unedited reports
  app.get('/api/reports/new', ReportsController.adminReadNewReports);

  // User can search edited reports using keywords
  app.get('/api/reports/search', ReportsController.searchEditedReports);

  // Admin can read one report
  app.get('/api/reports/:id', ReportsController.adminReadOneReport);

  // Admin create a new edited report
  app.post('/api/reports/:id', ReportsController.adminCreateEditedReport);

  // Admin can delete an edited report
  app.put('/api/reports/:id', ReportsController.adminDeleteEditedReport);

  // Admin can add a new service
  app.post('/api/services', ServicesController.addNewService);

  // All can access a list of all services
  app.get('/api/services', ServicesController.getAllServices);

  // User can return services with specific parameters
  app.get('/api/services/search', ServicesController.searchServices);

  // All can access a single services
  app.get('/api/services/:id', ServicesController.getOneService);

  // Admin can update an existing service
  app.put('/api/services/:id', ServicesController.updateService);

  // Admin can delete a service
  app.delete('/api/services/:id', ServicesController.removeService);

};