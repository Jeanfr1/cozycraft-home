import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type SubmitButtonProps = {
  isSubmitting: boolean;
};

export const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Button
        type="submit"
        className="w-full bg-[#9b87f5] hover:bg-[#8b77e5] text-white font-semibold py-3 relative overflow-hidden"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="animate-spin" />
            Envoi en cours...
          </motion.div>
        ) : (
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Envoyer ma demande
          </motion.span>
        )}
      </Button>
    </motion.div>
  );
};