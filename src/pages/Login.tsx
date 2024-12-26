import { AuthContainer } from "@/components/login/AuthContainer";
import { AuthForm } from "@/components/login/AuthForm";
import { useAuthRedirect } from "@/components/login/useAuthRedirect";

const Login = () => {
  useAuthRedirect();

  return (
    <AuthContainer>
      <AuthForm />
    </AuthContainer>
  );
};

export default Login;