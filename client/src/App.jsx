import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import { routes } from "./routes";

import { PopupProvider } from "./contexts/PopupContext";
import { BasketProvider } from "./contexts/BasketContext";
import { UserProvider } from "./contexts/UserContext";

import FallBack from "./components/global/FallBack";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Suspense fallback={<FallBack />}>
          <PopupProvider>
            <BasketProvider>
              <RouterProvider router={createBrowserRouter(routes)} />
            </BasketProvider>
          </PopupProvider>
        </Suspense>
        <Toaster />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
