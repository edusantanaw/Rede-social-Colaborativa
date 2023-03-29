import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./shared/context/Auth";
import { ChatProvider } from "./shared/context/Chat";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <ChatProvider>
      <App />
    </ChatProvider>
  </AuthProvider>
);
