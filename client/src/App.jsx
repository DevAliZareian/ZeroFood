import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import { routes } from "./routes";

import { PopupProvider } from "./contexts/PopupContext";
import { BasketProvider } from "./contexts/BasketContext";
import { UserProvider } from "./contexts/UserContext";
import { OrdersProvider } from "./contexts/OrdersContext";

import FallBack from "./components/global/FallBack";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Suspense fallback={<FallBack />}>
          <PopupProvider>
            <BasketProvider>
              <OrdersProvider>
                <RouterProvider router={createBrowserRouter(routes)} />
              </OrdersProvider>
            </BasketProvider>
          </PopupProvider>
        </Suspense>
        <Toaster />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
