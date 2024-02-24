// Importa las funciones que necesitas de Firebase
import { initializeApp } from "firebase/app";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAeW-_p1So3IsQ-uMKyZDcXK-6ENUwKNX8",
  authDomain: "cursada49970.firebaseapp.com",
  projectId: "cursada49970",
  storageBucket: "cursada49970.appspot.com",
  messagingSenderId: "984123621659",
  appId: "1:984123621659:web:30a331df5f1204e27653be"
};

// Inicializa Firebase con tu configuración
const app = initializeApp(firebaseConfig);

// Exporta la instancia de la aplicación de Firebase para que puedas usarla en otros archivos
export default app;
