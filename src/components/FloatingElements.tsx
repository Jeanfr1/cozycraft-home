import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export const FloatingElements = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCookieConsent = () => {
    setShowCookieConsent(false);
    localStorage.setItem("cookieConsent", "true");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Live Chat Button */}
      <Button
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
        size="icon"
        onClick={() => toast({ title: "Chat feature coming soon!" })}
      >
        <MessageSquare className="h-5 w-5" />
      </Button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          className="fixed bottom-20 right-4 z-50 rounded-full shadow-lg"
          size="icon"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-800">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" onClick={handleCookieConsent}>
                Accept
              </Button>
              <Button variant="ghost" onClick={handleCookieConsent}>
                Decline
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};