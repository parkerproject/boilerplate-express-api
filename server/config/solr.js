import solr from 'solr-client';

const config = {
  production: {
    solr_cloud: [['devsolrc01', 'devsolrc02', 'devsolrc03', 'devsolrc04']],
    host: process.env.SOLR_PROD_HOST,
    port: process.env.SOLR_PROD_PORT,
    protocol: 'http',
    path: '/solr/instock',
  },
  development: {
    solr_cloud: [['devsolrc01', 'devsolrc02', 'devsolrc03', 'devsolrc04']],
    host: process.env.SOLR_DEV_HOST,
    port: process.env.SOLR_DEV_PORT,
    protocol: 'http',
    path: '/solr/instock',
  },
  qa: {
    solr_cloud: [['devsolrc01', 'devsolrc02', 'devsolrc03', 'devsolrc04']],
    host: process.env.SOLR_QA_HOST,
    port: process.env.SOLR_QA_PORT,
    protocol: 'http',
    path: '/solr/instock',
  },
};


const options = config[process.env.NODE_ENV] || config.development;

const client = solr.createClient(options);

export default client;
