import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Shop from "./pages/Shop";
import CustomOrder from "./pages/CustomOrder";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Care from "./pages/Care";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/custom" element={<CustomOrder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/care" element={<Care />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;