module.exports = {
  someSidebar: {
    'Getting Started': ['introduction','available-apis', 'salesforce-vs-propel', 'authentication', 'object-model'],
    'Integration Patterns': [
      {
      'label': 'Event-based Messaging',
      'type' : 'category',
      'items': ['event-based-messaging', 'platform-events', 'outbound-messages']
      }
    ],
    'Use Cases': ['erp','cad'],
    'API Reference': [
      {
        type : 'link',
        label: 'Propel REST API', // The label that should be displayed (string).
        href : 'https://api-docs.propelplm.com' // The target URL (string).
      },
      {
        type : 'link',
        label: 'Propel Import API',
        href : 'https://documenter.getpostman.com/view/6385615/SVfKyr1m?version=latest'
      }  
    ]
  },
};
