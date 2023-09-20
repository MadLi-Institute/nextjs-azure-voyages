import RegisterForm from "@/components/Form/RegisterForm";
import { RevealProvider } from "@/providers/RevealProvider";
import { Divider } from "@nextui-org/divider";

const RegisterSec = () => {
  return (
    <section className="py-5 md:py-16">
        <Divider />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row p-10 gap-10 justify-center items-center">
        <RevealProvider>
          <div className="mb-2 md:mb-10 text-center">
            <h3 className="uppercase tracking-widest text-2xl font-bold md:text-5xl">
              Sign Up for future vacations
            </h3>
            <Divider className="py-[2px] my-2 max-w-[110px] md:max-w-xs mx-auto" />
          </div>
        </RevealProvider>
        <RegisterForm />
      </div>
      <Divider />
    </section>
  );
};

export default RegisterSec;
