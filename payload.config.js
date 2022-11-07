import { buildConfig } from 'payload/config';


// Schema
import Users from './collections/Users';
import Jobs from './collections/Jobs';
import applications from './collections/applications';
import resume from './collections/resume';
import message from './collections/message';
// Components
import Logo from './components/logo.js';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  // Access-Control-Allow-Origin:'*',
  cors: ['http://localhost:3001',],
  csrf: [
    "http://localhost:3001",
    "http://localhost",
  ],
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Icon: Logo,
        Logo: Logo,
      }
    }
  },
  collections: [
    Users,
    Jobs,
    applications,
    resume,
    message
    // Add Collections here
    // Examples
  ],
});
