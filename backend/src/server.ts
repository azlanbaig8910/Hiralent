// import http from 'http';
// import app from './app';
// import { connectDB } from './lib/mongo';
// import { loadDevStubs } from './bootstrap/devStubs';
// import { setupSocketIO } from './realtime/Socket.messaging';

// // Load dev stubs if we're in local/dev mode
// if (process.env.NODE_ENV !== 'production') {
//   loadDevStubs();
// }

// (async () => {
//   try {
//     const mongo = await connectDB();
//     app.locals.mongo = mongo;

//     const server = http.createServer(app);
    
//     const io = setupSocketIO(server);
//     app.set('socketio', io);

//     const PORT = process.env.PORT || 5000;
    
//     server.listen(PORT, () => {
//       console.log(`🚀 Server listening on port ${PORT}`);
//     });
    
//   } catch (err) {
//     console.error("Failed to start server:", err);
//     process.exit(1);
//   }
// })();

import http from 'http';
import app from './app';
import { connectDB } from './lib/mongo';
import { loadDevStubs } from './bootstrap/devStubs';
import { setupSocketIO } from './realtime/socket.messaging';

// Load dev stubs if we're in local/dev mode
if (process.env.NODE_ENV !== 'production') {
  loadDevStubs();
}

(async () => {
  try {
    // ---- MongoDB (OPTIONAL) ----
    if (process.env.MONGO_URI) {
      try {
        const mongo = await connectDB();
        app.locals.mongo = mongo;
        console.log('✅ MongoDB connected successfully');
      } catch (mongoErr) {
        console.error('❌ MongoDB connection failed:', mongoErr);
      }
    } else {
      console.warn('⚠️ MongoDB disabled: MONGO_URI not set');
    }

    // ---- HTTP Server ----
    const server = http.createServer(app);

    // ---- Socket.IO ----
    const io = setupSocketIO(server);
    app.set('socketio', io);

    const PORT = process.env.PORT || 5000;

    server.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });

  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
})();