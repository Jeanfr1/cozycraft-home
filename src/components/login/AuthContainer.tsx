import { motion } from "framer-motion";

interface AuthContainerProps {
  children: React.ReactNode;
}

export const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-2xl font-marcellus text-center text-[#9b87f5] mb-8">
            Bienvenue chez Elisabeth Laidin Design Bois
          </h1>
          {children}
        </motion.div>
      </div>
    </div>
  );
};