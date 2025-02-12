module.exports = {
  someSidebar: {
    'Getting Started': ['introduction','available-apis', 'salesforce-vs-propel', 'authentication',
      { 'label': 'Object Model',
        'type' : 'category',
        collapsed: false,
        'items': ['object-model-core-objects','object-model-attachments']
      }
    ],
    'Integration Patterns':
    [
      {
      'label': 'Event-based Messaging',
      'type' : 'category',
      collapsed: false,
      'items': ['event-based-messaging', 'platform-events', 'outbound-messages']
      }
    ],
    'Use Cases': ['erp','cad'],
    'Platform Extensibility':
    [
      {
        'label': 'Workspace',
        'type' : 'category',
        collapsed: false,
        'items': ['soql-adapters', {
                    'label':'Apex Adapters',
                    'type' :'category',
                    'items': ['apex-adapter-how-to']
                  }]
      },
      'apex-invocables'
    ],
    'API Reference': [
      {
        type : 'link',
        label: 'Propel REST API', // The label that should be displayed (string).
        href : 'https://developer.propelsoftware.com' // The target URL (string).
      },
      {
        type : 'link',
        label: 'Propel Import API',
        href : 'https://developer.propelsoftware.com#d74bd29d-fee2-4457-82c1-c2dc17193bbe'
      }
    ]
  },
};
